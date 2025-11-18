"use client";

import { useState, useRef, useEffect } from "react";
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
      className="w-full p-5 rounded-[22px] inline-flex flex-col items-start justify-center gap-[10px]"
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
              <div className="self-stretch pr-[293.99px] flex flex-col items-start justify-start">
                <div className="w-[35px] h-[29px] relative overflow-hidden">
                  <Image
                    src="/quote.svg"
                    alt="Quote"
                    width={35}
                    height={29}
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
          <div className="self-stretch inline-flex items-start justify-center gap-2.5">
            <div className="flex-1 text-white text-sm font-medium leading-[14px]">
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
          <div className="flex-1 inline-flex flex-col items-start justify-start gap-1">
            <div className="text-white text-sm font-medium leading-[14px]">
              {testimonial.name}
            </div>
            <div className="w-[71px] text-ash text-xs font-normal leading-4">
              {testimonial.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      quote:
        '"Janco transformed our vision into reality. Their attention to detail and commitment to quality is exceptional. The team was professional throughout the entire construction process, and they delivered our dream home on time and within budget."',
      name: "Pradeep Jayawardena",
      location: "Colombo 7",
      image: "https://placehold.co/48x48",
      rating: 5,
    },
    {
      id: "testimonial-2",
      quote:
        '"Working with Janco was an absolute pleasure. Their expertise in construction and project management ensured everything ran smoothly. We highly recommend them to anyone looking for quality construction services."',
      name: "Nimal Fernando",
      location: "Kandy",
      image: "https://placehold.co/48x48",
      rating: 5,
    },
    {
      id: "testimonial-3",
      quote:
        '"The professionalism and dedication of the Janco team exceeded our expectations. They delivered a beautiful home that perfectly matches our requirements. Thank you for making our dream come true!"',
      name: "Sunil Perera",
      location: "Galle",
      image: "https://placehold.co/48x48",
      rating: 5,
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / containerWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft = activeIndex * container.offsetWidth;
    }
  }, [activeIndex]);

  return (
    <div className="w-full py-[72px] px-4">
      <div className="w-full max-w-[393px] mx-auto flex flex-col items-start justify-start gap-[10px] relative">
      <div className="self-stretch flex flex-col items-center justify-center gap-6">
        {/* Text Section */}
        <div className="w-[393px] px-4 flex flex-col items-center justify-start gap-2">
          {/* Label */}
          <div className="self-stretch text-center text-primary text-base font-normal leading-5">
            TESTIMONIALS
          </div>

          {/* Heading */}
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            <div className="self-stretch text-center">
              <span className="text-white text-[40px] font-medium leading-9">
                What Our </span>
              <span className="text-primary text-[40px] font-medium leading-9">
                Clients Say
              </span>
            </div>

            {/* Description */}
            <div className="self-stretch text-center text-ash text-sm leading-[14px]" style={{ fontWeight: 400 }}>
              Over 20 years of excellence in construction and real estate.
              Here&apos;s what our satisfied clients have to say about working
              with Janco.
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          {/* Swipeable Testimonial Cards */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="inline-flex items-start justify-start gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-[361px] flex-shrink-0 snap-center" style={{ scrollSnapAlign: 'center' }}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="self-stretch inline-flex items-center justify-center gap-4">
            <div className="w-20 h-2 flex items-start justify-start gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "flex-1 bg-primary" : "w-2 bg-ash"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
    </div>
  );
}

export function TestimonialsBackground() {
  return (
    <>
      {/* Background Blur Effects */}
      <div
        className="w-[164.49px] h-[164.49px] absolute"
        style={{
          opacity: 0.18,
          background: "#7CB342",
          boxShadow: "128px 128px 128px",
          filter: "blur(64px)",
        }}
      />
      <div
        className="w-[164.49px] h-[164.49px] absolute"
        style={{
          opacity: 0.11,
          background: "#7CB342",
          boxShadow: "128px 128px 128px",
          borderRadius: "9999px",
          filter: "blur(64px)",
        }}
      />
    </>
  );
}
