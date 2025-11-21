// Desktop Testimonials Component - Refined

"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  image: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="w-[387px] p-5 rounded-[22px] flex flex-col justify-center items-start gap-2.5"
      style={{
        background: "rgba(255, 255, 255, 0.10)",
        outline: "1px rgba(255, 255, 255, 0.20) solid",
        outlineOffset: "-1px",
      }}
    >
      <div className="self-stretch flex flex-col gap-3">
        <div className="self-stretch flex flex-col gap-3">
          <div className="self-stretch flex flex-col gap-2.5">
            <div className="self-stretch flex flex-col gap-3">
              {/* Quote Icon */}
              <div className="self-stretch h-10 pr-[293.99px] flex flex-col">
                <div className="w-12 h-10 relative overflow-hidden">
                  <Image
                    src="/quote.svg"
                    alt="Quote"
                    width={48}
                    height={40}
                    className="w-12 h-10"
                  />
                </div>
              </div>

              {/* Star Rating - render 5 stars using public/star.svg; gray out unfilled stars via CSS filter */}
              <div className="self-stretch h-4 flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => {
                  const filled = i < testimonial.rating;
                  return (
                    <div key={i} className="w-4 h-4 relative">
                      <Image
                        src="/star.svg"
                        alt={filled ? "Star" : "Star (empty)"}
                        width={16}
                        height={16}
                        className={`w-full h-full ${filled ? "" : "filter grayscale brightness-75"}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="self-stretch min-h-[120px] flex justify-center items-start gap-2.5">
            <p className="flex-1 text-white text-base font-medium leading-5">
              {testimonial.quote}
            </p>
          </div>
        </div>

        {/* Client Info */}
        <div
          className="self-stretch py-2 flex items-center gap-4"
          style={{
            borderTop: "1px rgba(255, 254.99, 254.98, 0.10) solid",
          }}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden flex flex-col">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="self-stretch h-12"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <span className="text-white text-base font-medium leading-5">
              {testimonial.name}
            </span>
            <span className="text-[#C2C2C2] text-sm font-normal leading-[14px]">
              {testimonial.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsDesktop() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      quote:
        '"Janco transformed our vision into reality. Their attention to detail and commitment to quality is exceptional. The team was professional throughout the entire construction process, and they delivered our dream home on time and within budget."',
      name: "Pradeep Jayawardena",
      location: "Colombo 7",
      image: "/client image.jpg",
      rating: 5,
    },
    {
      id: "testimonial-2",
      quote:
        '"Working with Janco was a fantastic experience. Their 20 years of expertise truly shows in every aspect of their work. From initial design to final handover, everything was handled with utmost professionalism. Highly recommended!"',
      name: "Sanduni Perera",
      location: "Kandy",
      image: "/client image.jpg",
      rating: 5,
    },
    {
      id: "testimonial-3",
      quote:
        '"I have worked with Janco on multiple projects, and they never disappoint. Their innovative approach to construction and real estate solutions has helped us deliver exceptional properties. A truly reliable partner."',
      name: "Rohan Fernando",
      location: "Galle",
      image: "/client image.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="w-full bg-[#1A1A1A] pt-24 pb-16 flex flex-col items-start gap-2.5 relative overflow-hidden" id="testimonials">
      <div className="self-stretch h-[642px] px-[120px] flex flex-col justify-center items-center gap-12 relative z-10">
        {/* Header */}
        <div className="self-stretch px-[120px] flex flex-col items-center gap-2.5">
          <div className="self-stretch text-center text-[#7CB342] text-xl font-normal leading-5 tracking-[-0.05rem]">
            TESTIMONIALS
          </div>
          <div className="self-stretch text-center">
            <span className="text-white text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
              What Our{" "}
            </span>
            <span className="text-[#7CB342] text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
              Clients Say
            </span>
          </div>
          <p className="self-stretch text-center text-[#C2C2C2] text-base font-medium leading-5 tracking-[-0.04rem]">
            Over 20 years of excellence in construction and real estate. Here&apos;s what our satisfied clients have to say about working with Janco.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="w-[1201px] flex flex-col gap-8">
          <div className="self-stretch flex items-center gap-5">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="self-stretch h-12 flex items-center justify-center gap-4">
            <div className="w-20 h-2 flex items-start gap-2">
              <div className="flex-1 h-2 bg-[#7CB342] rounded-full" />
              <div className="w-2 h-2 bg-[#C2C2C2] rounded-full" />
              <div className="w-2 h-2 bg-[#C2C2C2] rounded-full" />
              <div className="w-2 h-2 bg-[#C2C2C2] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Blur Effects */}
      <div 
        className="w-[392.42px] h-[392.42px] opacity-[0.07] bg-[#7CB342] rounded-full absolute bottom-0 left-[120px]"
        style={{ boxShadow: "128px 128px 128px", filter: "blur(64px)" }} 
      />
      <div 
        className="w-[392.42px] h-[392.42px] opacity-[0.07] bg-[#7CB342] rounded-full absolute bottom-0 right-[120px]"
        style={{ boxShadow: "128px 128px 128px", filter: "blur(64px)" }} 
      />
    </section>
  );
}
