// Desktop Testimonials Component

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

interface TestimonialCardDesktopProps {
  testimonial: Testimonial;
}

function TestimonialCardDesktop({ testimonial }: TestimonialCardDesktopProps) {
  return (
    <div
      className="w-[387px] p-5 rounded-[22px] flex flex-col items-start justify-center gap-2.5"
      style={{
        background: "rgba(255, 255, 255, 0.10)",
        outline: "1px rgba(255, 255, 255, 0.20) solid",
        outlineOffset: "-1px",
      }}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-3">
        <div className="self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              {/* Quote Icon */}
              <div className="self-stretch h-10 pr-[293.99px] flex flex-col items-start justify-start">
                <div className="w-12 h-10 relative overflow-hidden">
                  <Image
                    src="/quote.svg"
                    alt="Quote"
                    width={48}
                    height={40}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div className="self-stretch h-4 inline-flex items-start justify-start gap-1">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <div key={index} className="w-4 h-4 relative">
                    <Image
                      src="/star.svg"
                      alt="Star"
                      width={16}
                      height={16}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="self-stretch min-h-[120px] inline-flex items-center justify-start gap-2.5">
            <div className="flex-1 text-white text-base font-medium leading-5">
              {testimonial.quote}
            </div>
          </div>
        </div>

        {/* Client Info */}
        <div
          className="self-stretch py-2 inline-flex items-center justify-start gap-4"
          style={{
            borderTop: "1px rgba(255, 254.99, 254.98, 0.10) solid",
          }}
        >
          {/* Client Image */}
          <div className="w-12 h-12 overflow-hidden rounded-full inline-flex flex-col items-start justify-start">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="self-stretch h-12 relative object-cover"
            />
          </div>

          {/* Client Details */}
          <div className="flex-1 inline-flex flex-col items-start justify-start">
            <div className="text-white text-base font-medium leading-5">
              {testimonial.name}
            </div>
            <div className="text-ash text-sm font-normal leading-[14px]">
              {testimonial.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsDesktop() {
  const [activePage] = useState(0);

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
    <div className="hidden lg:flex w-full pt-24 pb-16 bg-secondary flex-col items-start justify-start gap-2.5 relative overflow-hidden">
      {/* Background blur elements */}
      <div
        className="absolute w-[392.42px] h-[392.42px] opacity-[0.07] bg-primary rounded-full pointer-events-none"
        style={{ 
          boxShadow: "128px 128px 128px",
          filter: "blur(64px)",
          left: "50%",
          top: "10%",
          transform: "translateX(-50%)"
        }}
      />
      <div
        className="absolute w-[392.42px] h-[392.42px] opacity-[0.07] bg-primary rounded-full pointer-events-none"
        style={{ 
          boxShadow: "128px 128px 128px",
          filter: "blur(64px)",
          left: "50%",
          bottom: "10%",
          transform: "translateX(-50%)"
        }}
      />

      <div className="self-stretch h-[642px] px-[120px] flex flex-col items-center justify-center gap-12 relative z-10">
        {/* Header Section */}
        <div className="self-stretch px-[120px] flex flex-col items-center justify-start gap-2.5">
          {/* Label */}
          <div className="self-stretch text-center text-primary text-xl font-normal leading-5">
            TESTIMONIALS
          </div>

          {/* Title */}
          <div className="self-stretch text-center">
            <span className="text-white text-[72px] font-medium leading-[64px]">
              What Our{" "}
            </span>
            <span className="text-primary text-[72px] font-medium leading-[64px]">
              Clients Say
            </span>
          </div>

          {/* Description */}
          <div className="self-stretch text-center text-ash text-base font-medium leading-5">
            Over 20 years of excellence in construction and real estate. Here&apos;s
            what our satisfied clients have to say about working with Janco.
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="w-[1201px] flex flex-col items-start justify-start gap-8">
          {/* Cards Row */}
          <div className="self-stretch flex items-center justify-start gap-5">
            {testimonials.map((testimonial) => (
              <TestimonialCardDesktop key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="self-stretch h-12 flex items-center justify-center gap-4">
            <div className="w-20 h-2 flex items-start justify-start gap-2">
              <div className="flex-1 h-2 bg-primary rounded-full" />
              <div className="w-2 h-2 bg-ash rounded-full" />
              <div className="w-2 h-2 bg-ash rounded-full" />
              <div className="w-2 h-2 bg-ash rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
