import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";

interface ProjectCardProps {
  id: string;
  imagePath: string;
  title: string;
  location: string;
  sqft: string;
}

function ProjectCard({
  id,
  imagePath,
  title,
  location,
  sqft,
}: ProjectCardProps) {
  return (
    <div
      className="w-full rounded-[22px] inline-flex flex-col items-start justify-start"
      style={{
        outline: "1px #C2C2C2 solid",
      }}
    >
      {/* Project Image */}
      <Image
        src={imagePath}
        alt={title}
        width={400}
        height={210}
        className="w-full h-[210px] relative rounded-t-[22px] object-cover"
      />

      {/* Card Content */}
      <div className="self-stretch p-5 bg-secondary rounded-b-[22px] flex flex-col items-start justify-center gap-8">
        {/* Text Content */}
        <div className="self-stretch flex flex-col items-start justify-start gap-3">
          <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
            {/* Title */}
            <div className="self-stretch text-white text-[22px] font-medium leading-6">
              {title}
            </div>
            {/* Location & SQFT */}
            <div className="self-stretch text-ash text-sm font-medium leading-[14px]">
              {location} | SQFT - {sqft}
            </div>
          </div>
        </div>

        {/* View More Link */}
        <Link
          href="/projects"
          className="pt-[10px] pr-5 rounded-xl inline-flex items-center justify-center gap-2"
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

export function ProjectsMobile() {
  const projects = [
    {
      id: "modern-villa-kandy",
      imagePath: "/projects/project 1.jpg",
      title: "Modern Villa - Kandy",
      location: "Kandy",
      sqft: "2800",
    },
    {
      id: "house-project-mirigama",
      imagePath: "/projects/project 2.jpg",
      title: "House Project - Mirigama",
      location: "Mirigama",
      sqft: "2800",
    },
  ];

  return (
    <div className="w-full bg-[#F7F7F7] pt-[64px] pb-[64px] px-4">
      <div className="w-full max-w-[361px] sm:max-w-[500px] md:max-w-[600px] mx-auto flex flex-col items-start justify-start gap-8">
      {/* Text Section */}
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        {/* Heading */}
        <div className="self-stretch flex flex-col items-center justify-center gap-3">
          <div className="self-stretch">
            <span className="text-secondary text-[40px] font-medium leading-9 tracking-[-2px]">
              Latest
              <br />
            </span>
            <span className="text-primary text-[40px] font-medium leading-9 tracking-[-2px]">
              Projects
            </span>
          </div>
          <div className="w-full max-w-[361px] sm:max-w-[640px] md:max-w-[720px] text-secondary/75 text-sm leading-[14px]" style={{ fontWeight: 400 }}>
            Our signature projects reflect our commitment to realize your
            dreams. We have delivered successfully completed residential
            projects to thousands of happy customers throughout our more than 8
            years of journey.
          </div>
        </div>

        {/* Explore Projects Button */}
        <Link
          href="/projects"
          className="px-5 py-[10px] bg-secondary rounded-xl inline-flex items-center justify-center gap-2"
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

      {/* Projects Cards */}
      <div className="self-stretch flex flex-col items-center justify-start gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            imagePath={project.imagePath}
            title={project.title}
            location={project.location}
            sqft={project.sqft}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
