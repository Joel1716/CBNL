import "./oem.css";
import Hero from "../../Hero/Hero";
import React, { useState } from "react";
export default function Oem() {
  const heroInfo = {
    page: "oem-hero",
    pageHeading: "Collaborate With Us to Power Next-Generation OEM Products",
  };
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      Contact_Name: e.target["Contact Name"].value,
      Contact_Email: e.target["Contact Email"].value,
      Company_Name: e.target["Company Name"].value,
      Company_Country: e.target["Company Country"].value,
      Interest_Region: e.target["Region of Interest"].value,
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
          <h2>Strong Partnerships, Stronger Solutions</h2>
          <p>
            Our carrier-grade wireless solutions are trusted by OEMs worldwide
            to power high-performance products. Fill out the form below to start
            a conversation with our technical and partnership team. Together, we
            can explore integration possibilities that give your products a
            competitive edge.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="oem-form">
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          {/* Subject */}
          <input type="hidden" name="_subject" value="OEM Contact Form"></input>
          {/* Template */}
          <input type="hidden" name="_template" value="box"></input>

          <h3>OEM Contact Form</h3>
          <div>
            <label>Contact Name</label>
            <input type="text" name="Contact Name" required />
          </div>
          <div>
            <label>Contact Email</label>
            <input type="email" name="Contact Email" required />
          </div>
          <div>
            <label>Company Name</label>
            <input type="text" name="Company Name" required />
          </div>
          <div>
            <label>Company Country</label>
            <input type="text" name="Company Country" required />
          </div>
          <div>
            <label>Region of Interest</label>
            <input type="text" name="Region of Interest" required />
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
