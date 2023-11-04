import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "./testimonial.css";
import { testimonialData } from "./testimonialData";

function Testimonial() {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <div className="aksil-testimonial-container section__padding">
      <h4>Découvrez ce que nos clients disent :</h4>
      <h2>Avis de nos clients</h2>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="swiper-slide">
              <div className="aksil-testimonial__avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <h3 className="aksil-testimonial__name">{testimonial.name}</h3>
              <p className="aksil-testimonial__review">{testimonial.review}</p>
              <div className="aksil-testimonial__rating">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <span key={index} className="aksil-testimonial__star">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Testimonial;
