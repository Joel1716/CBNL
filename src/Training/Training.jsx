import "./Training.css";
import Hero from "../Hero/Hero";
import { div, p } from "motion/react-client";
import { useState } from "react";
export default function Training() {
  const [courseClick, setCourseClick] = useState(false);
  const heroInfo = {
    page: "training-hero",
    pageHeading: "Empowering You Through Training",
  };
  const allCourses = [
    {
      heading: "VectaStar Engineer RC",
      infoHeading: "Cambridge 16 November 2020 – 20 November 2020 | Engineer",
      info: "RC",
    },
    {
      heading: "VectaStar Engineer RC",
      infoHeading:
        "Johannesburg, South Africa 16 November 2020 – 20 November 2020 | Engineer",
      info: "RC",
    },
    {
      heading: "VectaStar Engineer RC",
      infoHeading:
        "Lagos, Nigeria 16 November 2020 – 20 November 2020 | Engineer",
      info: "RC",
    },
    {
      heading: "VectaStar Engineer RC",
      infoHeading:
        "Nairobi, Kenya 16 November 2020 – 20 November 2020 | Engineer",
      info: "RC",
    },
    {
      heading: "VectaStar Engineer ZFS",
      infoHeading: "Cambridge 16 November 2020 – 20 November 2020 | Engineer",
      info: "ZFS",
    },
    {
      heading: "VectaStar Engineer ZFS",
      infoHeading:
        "Johannesburg, South Africa 16 November 2020 – 20 November 2020 | Engineer",
      info: "ZFS",
    },
    {
      heading: "VectaStar Engineer ZFS",
      infoHeading:
        "Lagos, Nigeria 16 November 2020 – 20 November 2020 | Engineer",
      info: "ZFS",
    },
    {
      heading: "VectaStar Engineer ZFS",
      infoHeading:
        "Nairobi, Kenya 16 November 2020 – 20 November 2020 | Engineer",
      info: "ZFS",
    },
    {
      heading: "VectaStar Engineer Specialist",
      infoHeading: "Cambridge 16 November 2020 – 20 November 2020 | Engineer",
      info: "specialist",
    },
    {
      heading: "VectaStar Engineer Specialist",
      infoHeading:
        "Johannesburg, South Africa 16 November 2020 – 20 November 2020 | Engineer",
      info: "specialist",
    },
  ];
  return (
    <>
      <Hero page={heroInfo.page} pageHeading={heroInfo.pageHeading} />
      <main className="page-main">
        <div className="intro-text">
          <h2>About Our Training</h2>
          <p>
            We offer a range of training courses to provide customers with the
            expertise to install and operate VectaStar networks which deliver
            enhanced long term performance.
          </p>
          <br />
          <p>
            We have dedicated facilities in Ghana, South Africa, Kenya and
            Nigeria for training customers and their contractors in the
            installation, commissioning, operation and maintenance of VectaStar.
            In addition, we run courses covering network management and
            administration and advanced troubleshooting.
          </p>
          <br />
          <p>
            Courses are delivered by certified CBNL trainers and experienced
            staff. The courses are examined and successful participants are
            certified as VectaStar competent engineers. Where feasible some of
            the courses can be delivered in customer premises.
          </p>
          <br />
          <p>Review courses and book a place below.</p>
        </div>
        <div className="course-container">
          <h2>Our Courses</h2>
          {allCourses.map((eachCourse, value) => {
            return (
              <Courses
                heading={eachCourse.heading}
                infoHeading={eachCourse.infoHeading}
                onCourseClick={setCourseClick}
                courseClick={courseClick}
                key={value}
                value={value}
              >
                {eachCourse.info === "ZFS" && (
                  <p className="ZFS-info">
                    Provides an overview of VectaStar Zero Footprint sectors and
                    the VectaStar Network Management System tools (VNMS) for NOC
                    and field engineers who will be working with ZFS-based
                    sectors and Remote Terminals
                  </p>
                )}
                {eachCourse.info === "RC" || eachCourse.info === "ZFS" ? (
                  <p>
                    Provides an overview of VectaStar and the VectaStar Network
                    Management System tools (VNMS) for NOC and field engineers
                    who will be working with VectaStar RC-based Hub site
                    equipment and Remote Terminals.
                  </p>
                ) : (
                  ""
                )}
                {eachCourse.info === "specialist" && (
                  <p>
                    Provides an in depth understanding of VectaStar hardware and
                    software components, covering how to design networks using
                    VectaStar solutions, how the system operates and the use of
                    the VNMS.
                  </p>
                )}
              </Courses>
            );
          })}
        </div>
      </main>
    </>
  );
}

function Courses({
  heading,
  infoHeading,
  onCourseClick,
  courseClick,
  value,
  children,
}) {
  const open = value === courseClick;
  return (
    <div className={`courses ${open && "courseClick"}`}>
      <div
        className="course-heading"
        onClick={() => onCourseClick(value === courseClick ? null : value)}
      >
        <p>{heading}</p>
      </div>
      <div className="course-info">
        <p className="info-heading">{infoHeading}</p>
        {children}
      </div>
    </div>
  );
}
