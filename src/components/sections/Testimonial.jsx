"use client";
import React, { useState } from "react";
import Image from "next/image";
import { mm9Prose } from "@/app/layout";
import BackgroundCard from '@/assets/Blocks/blockTestimonial.svg'
import MobilebackgroundCard from '@/assets/Blocks/MobileblockTestimonial.svg'
import Ornament from '@/assets/ornament.svg'
import { motion, AnimatePresence } from "framer-motion"; 
import GreenFlowerIcon from "@/assets/greenflower.svg";
import RedFlowerIcon from "@/assets/redflower.svg";


const reviewsData = [
  {
    id: 1,
    category: "О консультации по поступлению",
    text: "Была на первой консультации с Таей по обсуждению общих вопросов по документам и процессу поступления. Все прошло четко, информативно. Нравится, что мы изначально договорились прописать вопросы и потом поэтапно все обсудили.",
  },
  {
    id: 2,
    category: "О сопровождении",
    text: "Благодаря вашей помощи весь путь от подачи документов до поступления стал понятным и комфортным. Все этапы были разъяснены максимально подробно, а поддержка на каждом этапе сильно снизила стресс.",
  },
  {
    id: 3,
    category: "Отзывы о подборе университетов",
    text: "Очень детальный подбор вузов под мой бюджет и запросы. Специалисты помогли сориентироваться в огромном количестве программ и выбрать именно те, что подходят под мой профиль. Огромное спасибо!",
  },
  {
    id: 4,
    category: "Отзывы о подборе университетов",
    text: "Очень детальный подбор вузов под мой бюджет и запросы. Специалисты помогли сориентироваться в огромном количестве программ и выбрать именно те, что подходят под мой профиль. Огромное спасибо!",
  },
    {
    id: 5,
    category: "О консультации по поступлению",
    text: "Была на первой консультации с Таей по обсуждению общих вопросов по документам и процессу поступления. Все прошло четко, информативно. Нравится, что мы изначально договорились прописать вопросы и потом поэтапно все обсудили.",
  },
  {
    id: 6,
    category: "О сопровождении",
    text: "Благодаря вашей помощи весь путь от подачи документов до поступления стал понятным и комфортным. Все этапы были разъяснены максимально подробно, а поддержка на каждом этапе сильно снизила стресс.",
  },
];

const Testimonial = () => {
  const [filter, setFilter] = useState("Все");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);

  const categories = ["Все", "О консультации по поступлению", "О сопровождении", "Отзывы о подборе университетов"];

  const filteredReviews = filter === "Все" 
    ? reviewsData 
    : reviewsData.filter(r => r.category === filter);

  const totalPages = filteredReviews.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const scrollToIndex = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <section className="relative w-full overflow-hidden">
    <div className="absolute -bottom-50  md:-bottom-80 -left-55 w-100 h-100 md:w-160 md:h-160 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-containt" />
    </div >
    <div className="py-16 px-4 max-w-8xl w-full md:px-16 lg:px-24 xl:px-32 mx-auto relative overflow-hidden">
    <h2 className={`${mm9Prose.className} text-2xl md: text-8xl text-[#5E0F08] mb-10`}>Отзывы</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setCurrentIndex(0); }}
            className={`px-5 py-2 border border-[##5E0F08] rounded-full transition-all text-sm md:text-base ${
              filter === cat ? "bg-[#5E0F08] text-white" : "text-[#5E0F08] hover:bg-[#8B1D1D]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative">
        {totalPages > 1 && (
          <>
            <button onClick={prevSlide} className="absolute -left-2 md:-left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/90 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all shadow-md">
              ❮
            </button>
            <button onClick={nextSlide} className="absolute -right-2 md:-right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/90 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all shadow-md">
              ❯
            </button>
          </>
        )}

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-0 md:gap-6"
            style={{ transform: `translateX(-${currentIndex * (typeof window !== 'undefined' && window.innerWidth >= 768 ? 51 : 100)}%)`, }}
          >
            {filteredReviews.map((review) => (
              <div 
                key={review.id}
                onClick={() => setSelectedReview(review)}
                className="min-w-full md:min-w-[calc(50%-12px)] h-[280px] md:h-[320px] relative cursor-pointer flex items-center justify-center p-8 md:p-14"
              >
                <Image 
                  src={BackgroundCard} 
                  alt="background" 
                  fill 
                  className="hidden md:block -z-10 object-stretch" 
                />
                <Image 
                  src={MobilebackgroundCard} 
                  alt="background" 
                  fill 
                  className="block md:hidden -z-10 object-stretch" 
                />
                <div className="w-full text-start px-4">
                  <h3 className="text-[#5C1616] font-semibold text-sm md:text-base uppercase tracking-wider">
                    {review.category}
                  </h3>
                  <div className="h-[1px] bg-[#8B1D1D] w-full my-4 opacity-60" />
                  <p className="text-[#5C1616]/90 text-base md:text-sm line-clamp-4 leading-relaxed">
                    {review.text}
                  </p>
                </div>
              </div>              
            ))}
          </div>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="hidden md:flex justify-center mt-10 gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
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
      )}

      {selectedReview && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedReview(null)}
        >
          <div 
            className="max-w-xl w-full p-8 md:p-12 relative bg-[#FDFCF6] rounded-sm border border-[#8B1D1D]/30 shadow-2xl" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-2xl text-[#8B1D1D] hover:rotate-90 transition-transform" 
              onClick={() => setSelectedReview(null)}
            >
              ✕
            </button>
            <h3 className="text-[#5C1616] font-bold text-xl mb-2">{selectedReview.category}</h3>
            <div className="h-[2px] bg-[#8B1D1D] w-20 mb-6" />
            <p className="text-[#5C1616] leading-relaxed text-lg italic">
              «{selectedReview.text}»
            </p>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default Testimonial;