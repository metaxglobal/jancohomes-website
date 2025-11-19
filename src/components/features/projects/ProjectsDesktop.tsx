// Desktop Projects Component

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";

// Type 1: Vertical Card (Image Top + Content Below)
interface ProjectCardType1Props {
  imagePath: string;
  title: string;
  location: string;
  sqft: string;
}

function ProjectCardType1({ imagePath, title, location, sqft }: ProjectCardType1Props) {
  return (
    <div className="w-[387px] flex flex-col items-start justify-start">
      {/* Image */}
      <Image
        src={imagePath}
        alt={title}
        width={387}
        height={250}
        className="self-stretch h-[250px] rounded-t-[22px] object-cover"
      />
      
      {/* Content */}
      <div className="self-stretch h-[188px] p-[30px] bg-secondary rounded-b-[22px] flex flex-col items-start justify-between">
        <div className="self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
            <div className="self-stretch text-white text-4xl font-medium leading-10">
              {title}
            </div>
            <div className="self-stretch text-ash text-base font-medium leading-5">
              {location} | SQFT - {sqft}
            </div>
          </div>
        </div>
        
        <Link
          href="/projects"
          className="h-12 px-5 py-2.5 rounded-xl inline-flex items-center justify-center gap-2"
          style={{
            outline: "1px #C2C2C2 solid",
            outlineOffset: "-1px",
          }}
        >
          <div className="flex items-center justify-start gap-2">
            <div className="text-primary text-base font-medium leading-5">
              View More Projects
            </div>
            <div className="w-5 h-5 relative overflow-hidden">
              <HugeiconsIcon
                icon={ArrowDownRight01Icon}
                size={20}
                color="#7CB342"
                strokeWidth={2}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

// Type 2: Horizontal Card with Description (Image Left + Content Right)
interface ProjectCardType2Props {
  imagePath: string;
  title: string;
  location: string;
  sqft: string;
  description: string;
}

function ProjectCardType2({ imagePath, title, location, sqft, description }: ProjectCardType2Props) {
  return (
    <div className="w-[793px] h-[438px] rounded-[22px] flex items-center justify-between">
      {/* Image */}
      <Image
        src={imagePath}
        alt={title}
        width={406}
        height={438}
        className="w-[406px] h-[438px] rounded-l-[22px] object-cover"
      />
      
      {/* Content */}
      <div className="w-[387px] h-[438px] px-[30px] bg-secondary rounded-r-[22px] flex flex-col items-start justify-center gap-12">
        <div className="self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
            <div className="self-stretch text-white text-4xl font-medium leading-10">
              {title}
            </div>
            <div className="self-stretch text-ash text-base font-medium leading-5">
              {location} | SQFT - {sqft}
            </div>
          </div>
          <div className="self-stretch text-ash text-base font-medium leading-5">
            {description}
          </div>
        </div>
        
        <Link
          href="/projects"
          className="h-12 px-5 py-2.5 rounded-xl inline-flex items-center justify-center gap-2"
          style={{
            outline: "1px #C2C2C2 solid",
            outlineOffset: "-1px",
          }}
        >
          <div className="flex items-center justify-start gap-2">
            <div className="text-primary text-base font-medium leading-5">
              View More Projects
            </div>
            <div className="w-5 h-5 relative overflow-hidden">
              <HugeiconsIcon
                icon={ArrowDownRight01Icon}
                size={20}
                color="#7CB342"
                strokeWidth={2}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

// Type 3: Wide Horizontal Card with Description (Image Left + Content Right)
interface ProjectCardType3Props {
  imagePath: string;
  title: string;
  location: string;
  sqft: string;
  description: string;
}

function ProjectCardType3({ imagePath, title, location, sqft, description }: ProjectCardType3Props) {
  return (
    <div className="w-[1200px] flex items-center justify-between">
      {/* Image */}
      <Image
        src={imagePath}
        alt={title}
        width={812}
        height={400}
        className="w-[812px] h-[400px] rounded-l-[22px] object-cover"
      />
      
      {/* Content */}
      <div className="w-[388px] h-[400px] px-[30px] bg-secondary rounded-r-[22px] flex flex-col items-start justify-center gap-12">
        <div className="self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
            <div className="self-stretch text-white text-4xl font-medium leading-10">
              {title}
            </div>
            <div className="self-stretch text-ash text-base font-medium leading-5">
              {location} | SQFT - {sqft}
            </div>
          </div>
          <div className="self-stretch text-ash text-base font-medium leading-5">
            {description}
          </div>
        </div>
        
        <Link
          href="/projects"
          className="h-12 px-5 py-2.5 rounded-xl inline-flex items-center justify-center gap-2"
          style={{
            outline: "1px #C2C2C2 solid",
            outlineOffset: "-1px",
          }}
        >
          <div className="flex items-center justify-start gap-2">
            <div className="text-primary text-base font-medium leading-5">
              View More Projects
            </div>
            <div className="w-5 h-5 relative overflow-hidden">
              <HugeiconsIcon
                icon={ArrowDownRight01Icon}
                size={20}
                color="#7CB342"
                strokeWidth={2}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function ProjectsDesktop() {
  return (
    <div className="hidden lg:flex w-full px-[120px] py-24 bg-background-3 flex-col items-center justify-center gap-12" id="projects">
      {/* Header Section */}
      <div className="self-stretch flex items-center justify-between">
        {/* Title */}
        <div className="flex items-center justify-center gap-2.5">
          <div className="w-[252px]">
            <span className="text-secondary text-[72px] font-medium leading-[64px]">
              Latest
              <br />
            </span>
            <span className="text-primary text-[72px] font-medium leading-[64px]">
              Projects
            </span>
          </div>
        </div>
        
        {/* Description & CTA */}
        <div className="w-[576px] flex flex-col items-end justify-start gap-6">
          <div className="w-[565px] text-secondary/75 text-base font-medium leading-5">
            Our signature projects reflect our commitment to realize your
            dreams. We have delivered successfully completed residential
            projects to thousands of happy customers throughout our more than 8
            years of journey.
          </div>
          
          <Link
            href="/projects"
            className="h-12 px-5 py-2.5 bg-secondary rounded-xl inline-flex items-center justify-center gap-2"
          >
            <div className="flex items-center justify-start gap-2">
              <div className="text-white text-base font-medium leading-5">
                Explore Projects
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <HugeiconsIcon
                  icon={ArrowDownRight01Icon}
                  size={20}
                  color="white"
                  strokeWidth={2}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="self-stretch flex flex-col items-center justify-center gap-5">
        {/* Row 1 - Type 1 (Vertical) + Type 2 (Horizontal with Description) */}
        <div className="flex items-center justify-start gap-5">
          <ProjectCardType1
            imagePath="/projects/project 1.jpg"
            title="Modern Villa - Kandy"
            location="Kandy"
            sqft="2800"
          />
          
          <ProjectCardType2
            imagePath="/projects/project 2.jpg"
            title="House Project - Mirigama"
            location="Mirigama"
            sqft="2534"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        {/* Row 2 - Type 3 (Wide Horizontal with Description) */}
        <div className="w-[1200px] flex items-center justify-between">
          <ProjectCardType3
            imagePath="/projects/project 3.jpg"
            title="Luxury Residence - Colombo"
            location="Colombo 7"
            sqft="3200"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
}
