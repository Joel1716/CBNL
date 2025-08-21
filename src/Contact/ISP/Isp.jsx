import "./Isp.css";
import Hero from "../../Hero/Hero";
import React, { useState } from "react";
export default function Isp() {
  const heroInfo = {
    page: "isp-hero",
    pageHeading: "Partner With Us to Expand Your ISP Network",
  };
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      Company_Name: e.target["Company Name"].value,
      Company_Country: e.target["Company Country"].value,
      Contact_Email: e.target["Contact Email"].value,
      Company_Address: e.target["Company Address"].value,
      _subject: e.target._subject.value,
      _template: e.target._template.value,
      _honey: e.target._honey.value, // honeypot field
    };

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/2415cc9068e746e8388431d52c92000e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("failed");
      }
    } catch (err) {
      setStatus("error");
    }
  };
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main className="page-main">
        <div className="intro-text">
          <h2>Let's Build the Future of Connectivity</h2>
          <p>
            We're passionate about helping ISPs like yours deliver faster
            speeds, wider coverage, and reliable connections. By filling out
            this form, you'll connect directly with our solutions team, who can
            offer tailored recommendations and partnership opportunities
            designed to help your network grow.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="isp-form">
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          {/* Subject */}
          <input type="hidden" name="_subject" value="ISP Contact Form"></input>
          {/* Template */}
          <input type="hidden" name="_template" value="box"></input>

          <h3>ISP Contact Form</h3>
          <div>
            <label>Company Name</label>
            <input type="text" name="Company Name" required />
          </div>
          <div>
            <label>Company Country</label>
            <input type="text" name="Company Country" required />
          </div>
          <div>
            <label>Contact Email</label>
            <input type="email" name="Contact Email" required />
          </div>
          <div>
            <label>Company Address</label>
            <textarea name="Company Address" required></textarea>
          </div>
          <button type="submit" className="button-form">
            Send
          </button>
          {status === "success" && (
            <p className="success">Message sent successfully!</p>
          )}
          {status === "failed" && (
            <p className="failed">Something went wrong. Please try again.</p>
          )}
          {status === "error" && (
            <p className="error">Error sending message.</p>
          )}
        </form>
      </main>
    </>
  );
}
