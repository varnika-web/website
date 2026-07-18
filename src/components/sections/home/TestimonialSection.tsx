"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Testimonial from "../../layout/Testimonial";
import Counter from "../../ui/Counter";

import { testimonials, figures, clientele } from "@/src/data/testimonialData";

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const figuresRef = useRef<HTMLDivElement | null>(null);
  const [figuresVisible, setFiguresVisible] = useState(false);

  // Slider Animation

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, [isMobile]);

  const goTo = (i: number) => {
    setIndex(i % testimonials.length);
  };

  // Figures in presence

  useEffect(() => {
    const el = figuresRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFiguresVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section>
      <div className="pt-32 sm:mx-auto sm:max-w-7xl">
        <p className="small-heading text-center sm:max-w-7xl">Our Clients</p>
        <h3 className="heading mb-24 text-center">
          Tailored Financial
          <br />
          Solutions for Every Client
        </h3>
      </div>

      <div className="relative w-full sm:overflow-hidden">
        <motion.div
          className="flex overflow-x-scroll sm:overflow-x-visible"
          style={{ width: `${testimonials.length}` }}
          animate={
            isMobile
              ? undefined
              : { x: `-${(index * 100) / testimonials.length}%` }
          }
          transition={
            isMobile
              ? undefined
              : { type: "tween", ease: "easeInOut", duration: 0.8 }
          }
        >
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex shrink-0 justify-center px-4">
              <Testimonial
                photo={testimonial.photo}
                description={testimonial.description}
                name={testimonial.name}
                brand={testimonial.brand}
              />
            </div>
          ))}
        </motion.div>

        <div className="mt-6 hidden justify-center gap-3 sm:flex">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === index ? "bg-black" : "bg-black/30"
              }`}
            />
          ))}
        </div>

        {/* FIGURES  */}
        <div
          ref={figuresRef}
          className="figures mx-auto max-w-3xl py-16 sm:py-32"
        >
          <div className="mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center">
              <p className="py-8 text-6xl font-bold text-black sm:text-7xl">
                <Counter
                  target={figures.clients}
                  duration={1800}
                  suffix="+"
                  start={figuresVisible}
                />
              </p>
              <p className="text-secondary text-xs">HAPPY CLIENTS</p>
            </div>

            <div className="text-center">
              <p className="py-8 text-6xl font-bold text-black sm:text-7xl">
                <Counter
                  target={figures.team}
                  duration={2000}
                  suffix="+"
                  start={figuresVisible}
                />
              </p>
              <p className="text-secondary text-xs">EXPERT TEAM</p>
            </div>

            <div className="text-center">
              <p className="py-8 text-6xl font-bold text-black sm:text-7xl">
                <Counter
                  target={figures.years}
                  duration={1600}
                  suffix="+"
                  start={figuresVisible}
                />
              </p>
              <p className="text-secondary text-xs">YEARS OF EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clientele  */}

      <div className="clientele w-full py-6">
        <div className="flex flex-col gap-4 px-4 sm:flex-row sm:gap-8 sm:px-0">
          {clientele.map((clientele, i) => (
            <div
              key={i}
              className="group relative h-72 w-full overflow-hidden sm:h-96"
            >
              <Image
                src={clientele.image}
                alt={clientele.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="bg-primary-dark absolute right-0 bottom-5 left-5 w-[90%] px-5 py-5 text-white sm:bottom-10">
                <h3 className="mb-2 text-base font-semibold">
                  {clientele.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {clientele.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
