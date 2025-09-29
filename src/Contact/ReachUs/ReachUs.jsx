import { useState } from "react";
import Hero from "../../Hero/Hero";
import "./ReachUs.css";
export default function ReachUs() {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const heroInfo = {
    page: "reach-us-hero",
    pageHeading: "Where We Operate",
    pageSubText:
      "Strong regional presence from Nigeria to South Africa with local support centres, warehousing and engineering teams.",
  };
  const contactInfo = [
    {
      name: "Nigeria",
      flag: "nigeria-flag.png",
      address: "21, Olori Muyibat Oyefusi Street, Lekki Phase 1, Lagos",
      number: ["+234-1-4540479", " +234-808-2000403", "+234-8091991622"],
    },
    {
      name: "Kenya",
      flag: "kenya-flag.png",
      address: "#202 Panesar’s Building, Mombasa Road, Nairobi",
      number: ["+254-710-989318", "+254-735-056206"],
    },
    {
      name: "Ghana",
      flag: "ghana-flag.png",
      address: "119 Koffi Anan Avenue, North Legon,  Accra",
      number: ["+233 (0) 556 966 091"],
    },
    {
      name: "Uganda",
      flag: "uganda.png",
      address:
        "Bukenya Zone A, Bukoto II, Nakawa Division, Kampala Central l 175435 Kampala GPO",
    },
    {
      name: "South-Africa",
      flag: "south-africa-flag.png",
      address:
        "Suites 15 & 16, Building C, Monte Circle, Montecasino Blvd, Fourways, Johannesburg 2191",
      number: ["+27 63 257 8619", "+27 82 773 5569"],
    },
    {
      name: "Cameroon",
      flag: "cameroon-flag.png",
      address: "Immeuble Indigo, 294 Rue 1239, Bonapriso, Douala",
      number: ["+237 988-42133", "+237 789-42505"],
    },
    {
      name: "United Kingdom",
      flag: "united-kingdom.png",
      address: "1 Deer Value Road, Peterborough, United Kingdom",
      number: ["+447917808784", "+2348091991622"],
    },
  ];
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
      <Hero page={heroInfo.page} />
      <main className="page-main">
        <div className="reach-out-container flex-center">
          <label for="cars">
            Select a country below to view office contact information:{" "}
          </label>
          {console.log(selectedCountry)}
          <select
            name="countriess"
            onChange={(e) => setSelectedCountry(e.target.value)}
            value={selectedCountry}
          >
            {contactInfo.map((contact, num) => {
              return (
                <option key={num} value={num}>
                  {contact.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="contact-info-container">
          <ContactCard contact={contactInfo.at(selectedCountry)} />
        </div>
        <h2>Or Send Us A Message</h2>
        <form onSubmit={handleSubmit} className="isp-form">
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          {/* Subject */}
          <input type="hidden" name="_subject" value="ISP Contact Form"></input>
          {/* Template */}
          <input type="hidden" name="_template" value="box"></input>

          <h3>Contact Form</h3>
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

function ContactCard({ contact }) {
  return (
    <>
      <div className="name-flag flex-center">
        <img src={contact.flag} alt="" />
        <h3>{contact.name}</h3>
      </div>
      <div className="contact-info flex-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
        </svg>
        <p>{contact.address}</p>
      </div>
      {contact.number && (
        <div className="contact-info flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
          </svg>
          <p>{contact.number.join(",")}</p>
        </div>
      )}
      <div className="contact-info flex-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
        </svg>
        <p>sales@cbnlafrica.com</p>
      </div>
    </>
  );
}
