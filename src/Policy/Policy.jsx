import Hero from "../Hero/Hero";
import "./Policy.css";
export default function Policy() {
  const heroInfo = {
    page: "policy-hero",
    pageHeading: "Values that must be followed",
  };
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main className="page-main ">
        <div className="intro-text policies">
          <h2>QUALITY AND OCCUPATIONAL HEALTH & SAFETY POLICY STATEMENT</h2>
          <p>
            Cambridge Broadband Networks Limited (“CBNL”) in the constant
            pursuit of excellence, is committed to the provision of
            premium-level telecommunications services that meet and exceed
            customer expectations using highly motivated employees,
            best-in-class technology, and optimizing our performance by building
            strategic relationships with our partners and other interested
            parties.
          </p>
          <p>
            We provide safe and healthy working conditions by committing to the
            elimination of hazards, reduction of OH&S risks, and prevention of
            workplace injury and ill health relative to our operations both at
            sites and in our facilities. We consistently ensure consultation and
            participation of workers in making decisions related to OH&S.
          </p>
          <p>
            We implement an integrated management system that consists of ISO
            9001:2015 and ISO 45001:2018 standard requirements integrated into
            our processes to minimize quality and occupational health and safety
            risks, while in compliance with applicable regulatory and statutory
            requirements.
          </p>
          <p>
            We strive to continuously improve our integrated management system
            through a robust organizational knowledge-based and learning culture
            to improve our processes and safeguard our workers and other
            interested parties through a healthy work-life balance.
          </p>
          <p>
            Quality and OH&S remain the responsibility of all employees and
            contractors.
          </p>
          <p>Accordingly, we:</p>
          <ul>
            <li>
              Have established appropriate quality and OH&S objectives at
              various levels.
            </li>
            <li>
              Engage employees in the development and implementation of quality
              and OH&S programs through consultation and participation.
            </li>
            <li>
              Strive to satisfy applicable quality and OH&S requirements,
              including statutory and regulatory requirements and mutually
              agreed on customer requirements related to quality and OH&S.
            </li>
            <li>
              Communicate quality and OH&S issues to our employees and other
              stakeholders as needful.
            </li>
            <li>
              Expect all employees of CBNL and external parties identified in
              the integrated management system to comply with these policies and
              with the IMS management system. All staff, and certain external
              parties, will receive or be required to provide appropriate
              training.
            </li>
            <li>
              Have documented this policy and will maintain it and update it as
              appropriate, at relevant intervals or upon significant change.
            </li>
            <li>
              Provide all the resources necessary in terms of infrastructure and
              ongoing staff training, to ensure that the company delivers on its
              quality and OH&S commitments.
            </li>
          </ul>
        </div>
        <div className="exec-signature">
          <img src="exec-signatures.png" alt="" />
        </div>
      </main>
    </>
  );
}
