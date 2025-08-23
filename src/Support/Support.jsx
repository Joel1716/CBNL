import Hero from "../Hero/Hero";
import "./Support.css";
export default function Support() {
  const heroInfo = {
    page: "support-hero",
    pageHeading: "Need Assistance? We're Here to Help",
  };
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main className="page-main">
        <div className="intro-text">
          <h2>Get Support</h2>
          <p>
            Our online customer support includes a trouble ticketing system,
            software updates and documentation. Please note our trouble
            ticketing system and support resources are for CBNL contracted
            customers only. If you’re looking for general information, please
            contact our sales team.
          </p>
        </div>
        <div className="support-links">
          <a href="#">💼 Raise a Support Ticket</a>
          <a href="#">💼 Raise a Support Ticket</a>
          <a href="#">💼 Raise a Support Ticket</a>
          <a href="#">💼 Raise a Support Ticket</a>
          <a href="#">💼 Raise a Support Ticket</a>
          <a href="#">💼 Raise a Support Ticket</a>
          <a href="#">💼 Raise a Support Ticket</a>
          <a href="#">💼 Raise a Support Ticket</a>
        </div>
      </main>
    </>
  );
}
