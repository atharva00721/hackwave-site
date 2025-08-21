"use client";

import React, { useRef } from "react";
import { useState } from "react";
import Navbar from "@/components/global/nav";
import TeamCard from "@/components/ui/TeamCard";
import VariableProximity from "@/components/ui/VariableProximity";

// Judge and Mentor interface matching TeamCard component
interface JudgeMentor {
  id: number;
  name: string;
  role: string;
  bio?: string;
  image: string;
  category: "judge" | "mentor";
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Judges data
const judges: JudgeMentor[] = [
  {
    id: 1,
    name: "Srashti Jain",
    role: "Founder of TechVraksh",
    image: "/judge&mentor/srasthi.jpeg",
    category: "judge",
    social: {
      linkedin: "https://www.linkedin.com/in/srashtisj/",
    },
  },
  {
    id: 2,
    name: "Adeen Shukla",
    role: "CTO at Metafic",
    image: "/judge&mentor/Adeen.png",
    category: "judge",
    social: {
      linkedin: "https://www.linkedin.com/in/adeen-s/",
    },
  },
];

// Mentors data
const mentors: JudgeMentor[] = [
  {
    id: 1,
    name: "Daksh Kitukale",
    role: "AI/ML Researcher",
    image: "/judge&mentor/Daksh.jpg",
    category: "mentor",
    social: {
      linkedin: "https://www.linkedin.com/in/daksh-kitukale-824843235/",
    },
  },
  // {
  //   id: 2,
  //   name: "Mentor Name 2",
  //   role: "Data Scientist",
  //   image: "/icons/icon_5.png",
  //   category: "mentor",
  //   social: {
  //     linkedin: "https://linkedin.com/in/mentor2",
  //   },
  // },
  // {
  //   id: 3,
  //   name: "Mentor Name 3",
  //   role: "UX Designer",
  //   image: "/icons/icon_6.png",
  //   category: "mentor",
  //   social: {
  //     linkedin: "https://linkedin.com/in/mentor3",
  //   },
  // },
];

const JudgesPage = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#141414] text-[#fcf2e8] pb-20 px-6">
        {/* Header Section */}
        <div
          ref={containerRef}
          className="text-center h-screen mb-16 flex flex-col items-center justify-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-[#fcf2e8] mb-6">
            <VariableProximity
              label="Judges & Mentors"
              fromFontVariationSettings="wght 200"
              toFontVariationSettings="wght 900"
              radius={400}
              containerRef={containerRef}
            />
          </h1>
          <p className="text-xl md:text-2xl text-[#ccc] max-w-3xl mx-auto">
            Meet our esteemed judges and mentors who will guide and evaluate
            participants throughout the hackathon journey.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Judges Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-[#fcf2e8] mb-4">
                <span className="inline-block px-2 sm:px-3 md:px-4 lg:px-6 bg-pink-300 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border-2 sm:border-3 md:border-4 lg:border-6">
                  Judges
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#ccc] max-w-2xl mx-auto">
                Industry experts who will evaluate your innovative solutions and
                creativity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {judges.map((judge) => (
                <TeamCard
                  key={`judge-${judge.id}`}
                  member={judge}
                  onMouseEnter={setHoveredMember}
                  onMouseLeave={() => setHoveredMember(null)}
                />
              ))}
              {/* Placeholder card to keep grid balanced when adding future sponsors */}
              {judges.length < 3 && (
                <div className="hidden lg:flex items-center justify-center rounded-[24px] border border-dashed border-[rgb(60,60,60)] p-6 text-[#ccc] min-h-[400px]">
                  More coming soon
                </div>
              )}
            </div>
          </div>

          {/* Mentors Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-[#fcf2e8] mb-4">
                <span className="inline-block px-2 sm:px-3 md:px-4 lg:px-6 bg-pink-300 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border-2 sm:border-3 md:border-4 lg:border-6">
                  Mentors
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#ccc] max-w-2xl mx-auto">
                Experienced professionals ready to guide you through challenges
                and help you succeed
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor) => (
                <TeamCard
                  key={`mentor-${mentor.id}`}
                  member={mentor}
                  onMouseEnter={setHoveredMember}
                  onMouseLeave={() => setHoveredMember(null)}
                />
              ))}
              {/* Placeholder card to keep grid balanced when adding future mentors */}
              {mentors.length < 3 && (
                <div className="hidden lg:flex items-center justify-center rounded-[24px] border border-dashed border-[rgb(60,60,60)] p-6 text-[#ccc] min-h-[400px]">
                  More coming soon
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JudgesPage;
