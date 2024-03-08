"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a self-taught and results-driven full-stack web developer with love for turning ideas into reality through code. I thrive in dynamic environments, embracing challenges as opportunities for growth. I specialize in building robust and scalable web applications from concept to completion. Whether it's crafting elegant front-end experiences or architecting efficient back-end systems, I enjoy the entire process of creating software that makes a positive impact.
      </p>

      <p>
       When I'm not coding, you can find me playing with my dogs, catching up on a serie / anime, listening to audio-books & podcasts, or interacting with friends & family. Balancing work with my personal interests keeps me inspired and brings a fresh perspective to my projects.
      </p>
    </motion.section>
  );
}
