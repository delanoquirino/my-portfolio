"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import html from "../../public/iconskill/html.png";
import css from "../../public/iconskill/css.png";
import javascript from "../../public/iconskill/javascript.png";
import reactImage from "../../public/iconskill/react.png";
import nextjs from "../../public/iconskill/nextjs.png";
import github from "../../public/iconskill/github.png";
import tailwind from "../../public/iconskill/tailwind.png";
import chakra from "../../public/iconskill/chakra.png";
import typescript from "../../public/iconskill/typescript.png";
import jest from "../../public/iconskill/jest.png";
import node from "../../public/iconskill/node.png";
import Image from "next/image";

const SkillIcon = [
  {
    id: 1,
    src: html,
    title: "HTML",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
  },
  {
    id: 4,
    src: reactImage,
    title: "React",
  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind",
  },
  {
    id: 6,
    src: nextjs,
    title: "Next JS",
  },
  {
    id: 7,
    src: github,
    title: "GitHub",
  },
  {
    id: 8,
    src: chakra,
    title: "ChakraUI",
  },
  {
    id: 9,
    src: typescript,
    title: "Typescript",
  },
  {
    id: 10,
    src: jest,
    title: "Jest",
  },
  {
    id: 11,
    src: node,
    title: "Node",
   
  },
];

export const MySkills = () => {
  return (
    <div className="h-screen w-full items-center justify-between bg-cover bg-center">
      <div className="flex flex-col gap-16 w-full text-center items-center mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1>Skills</h1>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
            {SkillIcon.map((skill, i) => (
                <SwiperSlide key={i}>
                    <Image src={skill.src} alt={skill.title} width={60} height={60} />
                </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection:true }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
            {SkillIcon.map((skill, i) => (
                <SwiperSlide key={i}>
                    <Image src={skill.src} alt={skill.title} width={60} height={60} />
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
