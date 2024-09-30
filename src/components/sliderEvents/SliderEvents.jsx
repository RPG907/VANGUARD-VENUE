"use client";
import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Styles from "./slider.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { getEvents } from "../../app/events/page.jsx";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="white"
    >
      <path d="m320-116-34-34 330-330-330-330 34-34 364 364-364 364Z" />
    </svg>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="white"
    >
      <path d="M400-116 36-480l364-364 34 34-330 330 330 330-34 34Z" />
    </svg>
  );
}

const SliderEvents = async () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    customPaging: () => (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="white"
        >
          <path d="M480-480Zm0 228q-95 0-161.5-66.5T252-480q0-95 66.5-161.5T480-708q95 0 161.5 66.5T708-480q0 95-66.5 161.5T480-252Zm0-28q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
        </svg>
      </div>
    ),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const events = await getEvents();

  return (
    <>
      <div className={Styles.carouselContainer}>
        <div className={Styles.carousel}>
          <Slider {...settings}>
            {events &&
              events.map((event, index) => (
                <a key={event?._id}>
                  <div className={Styles.slide}>
                    <div className={Styles.imageContainer}>
                      <img
                        src={event.src}
                        alt=""
                        className={Styles.imageEvent}
                      />
                    </div>

                    <div className={Styles.textContainer}>
                      <h2>{event.title}</h2>
                      <p>{event.date}</p>
                    </div>
                  </div>
                </a>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderEvents;
