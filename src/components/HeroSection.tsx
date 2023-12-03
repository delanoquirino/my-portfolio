"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        < motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
         className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-400">Olá! Eu sou {""}</div> Delano
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl">
            Este é o meu site e aqui você conhecerá minha jornada e projetos como Software Developer.
          </p>
          <div>
            <Link href="/#contact" className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 via-cyan-700 to-teal-400 text-white ">
              Contrate-me
            </Link>
            <Link href="https://drive.google.com/file/d/1L4TMWwV_-lc3cvImLlgLnLLeib2hJSFz/view?usp=sharing" target="_blank" className="inline-block w-full sm:w-fit rounded-full  hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3">Download CV</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
                src="/hero/hero-image.png"
              width={500}
              height={500}
              alt="hero image"
              className="absolute "
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
