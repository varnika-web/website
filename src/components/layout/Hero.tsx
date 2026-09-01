"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Button from "../ui/Button";

import { heroSlides } from "@/src/data/heroSlides";
import { partnerLogos } from "@/src/data/partnerLogos";
import Badge from "../ui/Badge";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const marqueeItems = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlides[currentIndex].src}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentIndex].src}
              alt={heroSlides[currentIndex].alt}
              fill
              priority
              quality={85}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-start pt-32">
          <motion.div
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <Badge /> */}
            <h1 className="font-libre mb-4 text-4xl leading-tight font-semibold md:text-6xl lg:text-7xl">
              Build Wealth with Confidence
            </h1>
            <p className="mb-8 max-w-[90%] font-sans text-sm leading-6 text-neutral-200 md:max-w-lg lg:mb-8 lg:text-lg">
              Personalized investment strategies, financial planning, and wealth
              management designed to help you achieve your life goals.
            </p>
            <Button
              path="https://calendar.app.google/VAPZhD35wPEbvCjm6"
              target="_blank"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-16 w-full pb-6 md:pb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-0">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-neutral-300 uppercase md:mb-5">
              Powered by
            </p>
            <div className="overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm">
              <div
                className="flex w-max items-center gap-6 will-change-transform md:gap-8"
                style={{ animation: "marquee 25s linear infinite" }}
              >
                {marqueeItems.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="flex h-16 w-44 shrink-0 items-center justify-center md:h-20 md:w-56"
                  >
                    <Image
                      src={logo.src}
                      height={60}
                      width={220}
                      alt={logo.alt}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-66.666%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
