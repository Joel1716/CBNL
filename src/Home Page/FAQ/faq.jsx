import { useState } from "react";
import "./faq.css";
export default function Faq() {
  const faqs = [
    {
      questions: "How does your solution work in rural areas?",
      answers:
        "Our equipment is designed to perform even in low-infrastructure regions with reliable backhaul connectivity.",
    },
    {
      questions: "Do you offer maintenance or after-deployment support?",
      answers:
        "Yes, we provide continuous monitoring and support services tailored to each client’s needs.",
    },
    {
      questions: "What industries do you typically work with?",
      answers:
        "We partner with telecoms, ISPs, enterprise organizations, and government sectors.",
    },
    {
      questions: "Can your solutions scale with our network growth?",
      answers:
        "Absolutely. Our platform is built for modular scaling across regions and demands.",
    },
  ];
  return (
    <div className="faq-section">
      <div className="faq-heading text-center">
        <h3>Frequently Asked Questions</h3>
        <p>
          Answers to the most common questions about our services and solutions.
        </p>
      </div>
      <div className="faq-container">
        {faqs.map((faq, value) => {
          return <Accordion faq={faq} value={value} key={value} />;
        })}
      </div>
    </div>
  );
}
function Accordion({ faq, value }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`faq ${isOpen && "open"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="number">{value < 10 ? `0${value + 1}` : `${value + 1}`}</p>
      <p className="heading">{faq.questions}</p>
      <p className="sign">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="info">{faq.answers}</div>}
    </div>
  );
}
