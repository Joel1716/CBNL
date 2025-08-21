import "./clients.css";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Clients() {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <section className="clients-section">
      <div>
        <div className="clients-heading text-center">
          <h2>Our Clients</h2>
          {/* <h3>Trusted by Industry Leaders across africa</h3> */}
          <p>
            We work with top companies in Nigeria, Kenya, Ghana, South-Africa
            and many more...
          </p>
        </div>
        <div className="slideshows">
          <Slide
            slidesToScroll={3}
            slidesToShow={3}
            indicators={true}
            arrows={true}
            autoplay={true}
            infinite={true}
            duration="2000"
            responsive={responsiveSettings}
            nextArrow={
              <button
                style={{
                  border: "0px",
                  background: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="50px"
                >
                  <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                </svg>
              </button>
            }
            prevArrow={
              <button
                style={{
                  border: "0px",
                  background: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  width="50px"
                >
                  <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                </svg>
              </button>
            }
          >
            <div>
              <img src="MTN.jpeg" alt="" />
            </div>
            <div>
              <img src="9-mobile.png" alt="" />
            </div>
            <div>
              <img src="Unitel.jpg" alt="" />
            </div>
            <div>
              <img src="safaricom.png" alt="" />
            </div>
            <div>
              <img src="Liquid.png" alt="" />
            </div>
            <div>
              <img src="Telkom.png" alt="" />
            </div>
            <div>
              <img src="INQ.png" alt="" />
            </div>
            <div>
              <img src="airtel.png" alt="" />
            </div>
            <div>
              <img src="vodacom.png" alt="" />
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="slideshow-container flex-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>
        <div className="slideshow">
          <img src="MTN.png" alt="" />
          <img src="INQ.png" alt="" />
          <img src="Liquid.png" alt="" />
          {/* <img src="Telkom.png" alt="" />
          <img src="Unitel.jpg" alt="" />
          <img src="vodacom.png" alt="" /> */
}
//   </div>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//   >
//     <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
//   </svg>
// </div> */}
