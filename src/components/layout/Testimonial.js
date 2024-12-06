"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Darren Webster",
    position: "Founder & CEO - Goalster",
    testimonial:
      "This platform has revolutionized how we handle procurement. Highly recommended!",
    image: "/playvdo.png",
  },
  {
    name: "David Nyurenberg",
    position: "Founder & CEO - Valor digital ",
    testimonial:
      "The seamless experience and organized projects have been a game-changer for our projects.",
    image: "/playvdo.png",
  },
  {
    name: "Offir Manor",
    position: "CEO - Bio-Lead",
    testimonial:
      "I love how easy it is to compare and outstanding creativity and innovations. Excellent platform!",
    image: "/playvdo.png",
  },
];

const TestimonialPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="bg-[#e7e7ff] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-4 pb-8">
          <h2 className="text-[48px] font-semibold">
            What our <span className="text-blue-800"> clients say </span>
          </h2>
          <p className="text-lg pb-6 text-center w-1/2">
            We are delivering strong results and outcomes for some of the world
            leading new age digital challengers and businesses.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-10 text-center"
              >
                <div className="flex items-center justify-center w-full mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-lg border-2 shadow-[0_0_15px_#00000020] w-full "
                    width={200}
                    height={200}
                    quality={100}
                  />
                </div>
                <p className="text-gray-600 text-lg italic mb-6">
                  {testimonial.testimonial}
                </p>
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;