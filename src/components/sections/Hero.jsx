'use client'
import React from "react";
import HeroBackground from "@/assets/Hero_Background.png";
import HeroImage from "@/assets/hero_img.png";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 "
      style={{
        backgroundImage:`url(${HeroBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center mt-30  md:items-start max-w-xl">
        <h1
          className="text-5xl md:text-6xl leading-[68px] md:leading-[84px] font-medium mb-4 text-[#636024]"
          style={{ fontFamily: "MM9 Prose Antique Cyr"}}
        >
          ВАШ ПУТЬ К ОБУЧЕНИЮ В КИТАЕ
        </h1>
        <p
          className="text-sm md:text-base mb-8 mb-4 text-[#000000]"
        >
          Сопровождение в университеты КНР без мифов и лишнего стресса. От подбора
          программы до зачисления.
        </p>
        <a
          href="#contact-block"
          className="w-full py-3 rounded-full text-white bg-[#5C0F07] hover:bg-[#4A0D05] transition-all duration-200 active:scale-95 inline-block text-center"
        >
          Оставить заявку
        </a>
      </div>

      <img
        src={HeroImage.src} 
        alt="Обучение в Китае"
        className="hidden md:block max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300 md:mt-30"
      />
    </section>
  );
};

export default Hero;