import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import front from "@/public/front.png";
import back from "@/public/back.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "SamuelMuliika",
    hash: "#SamuelMuliika",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Bachelors In Information Systems and Technology",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Front-end web-development",
    description:
      "Transforming your vision into reality through intuitive frontend development that prioritizes usability and aesthetics.",
    tags: ["React", "Next.js", "HTML", "CSS", "JavaScript"],
    imageUrl: front,
  },
  {
    title: "Back-end web-developmnt",
    description:
      "Behind every great website lies a powerful backend. Let me build the engine that propels your online presence forward.",
    tags: ["Django", "DRF", "PostgreSql"],
    imageUrl: back,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Bootstrap",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "MySql",
  "PostgreSQL",
  "Python",
  "Django",
] as const;
