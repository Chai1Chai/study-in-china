"use client";
import Image from "next/image";
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { UNIVERSITIES } from '@/assets/Data/uniData';
import { montserrat } from "@/app/layout";
import Ornament from '@/assets/ornament.svg'
import { motion, AnimatePresence } from "framer-motion"; 
import GreenFlowerIcon from "@/assets/greenflower.svg";
import RedFlowerIcon from "@/assets/redflower.svg";

const iconVariants = {
  initial: { opacity: 0, scale: 0.8 }, 
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }, 
  hover: { scale: 1.15 }, 
};


const Universities = () => {
  const [activeCity, setActiveCity] = useState("Все города");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const [itemsPerPage, setItemsPerPage] = useState(3);
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setItemsPerPage(1);
    } else {
      setItemsPerPage(3);
    }
  };

  handleResize(); // при загрузке
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
useEffect(() => {
  setCurrentIndex(0);
  if (scrollRef.current) {
    scrollRef.current.scrollTo({ left: 0 });
  }
}, [itemsPerPage]);

  const cityList = useMemo(() => {
    const cities = UNIVERSITIES.map(uni => uni.cityId); 
    return ["Все города", ...new Set(cities)];
  }, []);

  // 2. Фильтрация
  const filteredUnis = useMemo(() => {
    if (activeCity === "Все города") return UNIVERSITIES;
    return UNIVERSITIES.filter(uni => uni.cityId === activeCity);
  }, [activeCity]);

  const totalPages = Math.ceil(filteredUnis.length / itemsPerPage);


const scrollToPage = (page) => {
  if (scrollRef.current) {
    const container = scrollRef.current;
    const card = container.querySelector('.uni-card');

    if (card) {
      const cardWidth = card.offsetWidth;
      const gap = 24; // md:gap-6 = 24px

      const pageWidth = (cardWidth * itemsPerPage) + (gap * (itemsPerPage - 1));

      container.scrollTo({
        left: page * pageWidth,
        behavior: 'smooth'
      });

      setCurrentIndex(page);
    }
  }
};

const nextSlide = () => {
  if (currentIndex < totalPages - 1) {
    scrollToPage(currentIndex + 1);
  } else {
    scrollToPage(0);
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    scrollToPage(currentIndex - 1);
  } else {
    scrollToPage(totalPages - 1);
  }
};

  useEffect(() => {
    setCurrentIndex(0);
    if (scrollRef.current) scrollRef.current.scrollTo({ left: 0 });
  }, [activeCity]);

  return (
    <section className="relative py-12 py-20 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      <div className="absolute -bottom-30 -right-30 md:-bottom-55 md:-right-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>
      <div className="absolute -bottom-30 -left-30 md:-bottom-55 md:-left-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>
      <div className="absolute -top-30 -right-30 md:-top-55 md:-right-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none z-0">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>
      <div className="absolute -top-30 -left-30 md:-top-55 md:-left-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
              <h2 className={`${montserrat.className} text-3xl md:text-6xl font-base text-center mb-12 md:mb-16  text-[#636024]`}>
          Университеты
        </h2>

        <div className="mb-10 relative z-30 max-w-[400px] mx-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white border border-[#636024]/30 px-6 py-3 rounded-xl flex justify-between items-center text-[#636024] shadow-sm"
          >
            <span className="font-medium">{activeCity}</span>
            <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          
          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-amber-100 rounded-2xl shadow-xl max-h-60 overflow-y-auto">
              {cityList.map(city => (
                <div 
                  key={city}
                  className={`px-6 py-3 hover:bg-[#636024] hover:text-white cursor-pointer transition-colors ${activeCity === city ? 'bg-[#636024]/10' : ''}`}
                  onClick={() => { setActiveCity(city); setIsOpen(false); }}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative px-2 md:px-10">

          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/80 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all">
            ❮
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/80 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all">
            ❯
          </button>
            <div 
              ref={scrollRef}
              className="flex overflow-x-hidden scroll-smooth gap-0 md:gap-6"
            >
                {filteredUnis.map((uni, idx) => (
                <div 
                  key={uni.id} 
                  className="uni-card flex-shrink-0 w-full md:w-[calc((100%-3rem)/3)]"
                >
                  <div className="bg-[#EAE6D6] rounded-[2rem] overflow-hidden h-full flex flex-col border border-white/40 shadow-sm">
                    <div className="h-48 md:h-64 overflow-hidden">
                      <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col items-center text-center flex-grow">
                      <h3 className="text-base md:text-lg font-bold text-[#636024] mb-3 leading-tight min-h-[3rem]">
                        {uni.name}
                      </h3>
                      <p className="text-[#636024]/70 text-base md:text-base leading-relaxed line-clamp-7">
                        {uni.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="hidden md:flex justify-center mt-10 gap-4 items-center">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToPage(idx)}
              className="relative outline-none focus:outline-none"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <AnimatePresence mode="wait">
                {currentIndex === idx ? (
                  <motion.div
                    key="red"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                  
                    <img src={RedFlowerIcon.src} className="w-6 h-6" alt="active" /> 
                  </motion.div>
                ) : (
                  <motion.div
                    key="green"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                  
                    <img src={GreenFlowerIcon.src} className="w-6 h-6" alt="inactive" />

                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;