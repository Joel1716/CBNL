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
  const clients = [
    {
      img: "MTN.svg",
      alt: "MTN Logo",
    },
    {
      img: "9-mobile.png",
      alt: "9-mobile Logo",
    },
    {
      img: "Unitel.jpg",
      alt: "Unitel Logo",
    },
    {
      img: "safaricom.png",
      alt: "",
    },
    {
      img: "Liquid.png",
      alt: "Liquid Logo",
    },
    {
      img: "Telkom.png",
      alt: "Telkom Logo",
    },
    {
      img: "INQ.png",
      alt: "INQ Logo",
    },
    {
      img: "airtel.png",
      alt: "airtel Logo",
    },
    {
      img: "vodacom.png",
      alt: "vodacom Logo",
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
            duration="1500"
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
            {clients.map((client, value) => (
              <div key={value}>
                <img src={client.img} alt={client.alt} />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
}
