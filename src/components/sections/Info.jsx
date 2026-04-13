"use client";

import { useEffect, useState, useRef } from "react";
import { montserrat } from "@/app/layout";
import InfoBackground from "@/assets/InfoBackground.png";

const Info = () => {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false); // Состояние видимости блока
  const sectionRef = useRef(null); // Ссылка на секцию

  // 1. Отслеживаем появление блока в зоне видимости
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Перестаем следить после первого появления
        }
      },
      { threshold: 0.3 } // Сработает, когда 30% блока будет видно
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Запускаем таймер только когда isVisible === true
  useEffect(() => {
    if (!isVisible) return;

    let start = 1;
    const end = 100;
    const duration = 3000;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef} // Привязываем реф сюда
      className={`${montserrat.className} relative w-full py-15 px-4 md:px-16 lg:px-24 xl:px-32 flex items-center justify-center text-center text-white`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${InfoBackground.src})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <p className="text-base md:text-2xl opacity-90">
          За это время я помогла поступить уже более чем
        </p>

        <h2 className="text-6xl mt-5 mb-5 md:text-8xl font-semibold leading-none">
          {count}
          <span className="text-2xl mt-5 mb-5 md:text-3xl ml-2 font-normal">
            студентам.
          </span>
        </h2>

        <p className="text-base md:text-2xl mb-4 opacity-90 max-w-2xl">
          Среди них — языковые программы, бакалавриат и магистратура.
        </p>

        <p className="text-sm md:text-base opacity-70 mt-5">
          Географию поступлений и примеры можно посмотреть ниже.
        </p>
      </div>
    </section>
  );
};

export default Info;