import "./Exec.css";
import Hero from "../Hero/Hero";
export default function Exec() {
  const heroInfo = {
    page: "exec-hero",
    pageHeading: "Meet Our Leadership Team",
  };
  const execInfo = [
    {
      img: "obehi.jpg",
      name: "Obehi Okosun",
      role: "Chief Executive Officer",
    },
    {
      img: "bassey.jpg",
      name: "Bassey Daniel",
      role: "Chief Operating Officer",
    },
    {
      img: "gary.jpeg",
      name: "Gary De-Rozario",
      role: "Technical Sales Manager",
    },
    {
      img: "neville.jpg",
      name: "Neville Chapman",
      role: "Chief Technical Officer",
    },
    {
      img: "francis.jpg",
      name: "Francis Okinyo",
      role: "Regional Director, East Africa",
    },
    {
      img: "bola.jpeg",
      name: "Adebola Olowojolu",
      role: "ED, Operations ( ETNS)",
    },
  ];
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main className="page-main ">
        <div className="intro-text">
          <h2>How they shape CBNL</h2>
          <p>
            At CBNL, our leadership team brings decades of experience in
            broadband technology, business strategy, and innovation. Each member
            plays a vital role in driving our mission to deliver reliable,
            high-performance connectivity solutions to partners and customers
            worldwide.
          </p>
        </div>
        <div className="exec-container">
          {execInfo.map((exec) => {
            return (
              <div className="exec-box">
                <img className="exec-img" src={exec.img} alt="" />
                <p className="exec-name">{exec.name}</p>
                <p className="exec-role">{exec.role}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
