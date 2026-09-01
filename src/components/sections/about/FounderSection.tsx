"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import ScrollReveal from "../../ui/ScrollReveal";

const FounderSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="our-founder"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-0"
    >
      <ScrollReveal className="mb-12 text-center lg:mb-16">
        <p className="small-heading text-primary mx-auto">Our Founder</p>
        <h2 className="heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
          Meet Our Visionary Founder & CEO
          <br />
          <span className="text-primary">Dr. Varnika Tiwari</span>
        </h2>
      </ScrollReveal>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:grid-rows-[auto_auto]">
        <ScrollReveal
          className="rounded-3xl bg-[#F1F1F1] p-8 hover:bg-white lg:col-start-1 lg:row-start-1"
          delay={0.05}
        >
          {/* <p className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            Experience
          </p> */}
          <Image
            src={"/images/wallet.svg"}
            height={40}
            width={40}
            alt={"About Varnika"}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <p className="small-heading mt-4 text-sm">About Varnika Tiwari</p>
          <p className="mt-4 text-xl font-semibold">
            10+ years of experience in investing & wealth management
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#F1F1F1] hover:bg-white lg:col-start-2 lg:row-span-2 lg:row-start-1"
          delay={0.1}
          amount={0.15}
        >
          <button
            type="button"
            aria-label="Play founder introduction video"
            onClick={() => setIsVideoOpen(true)}
            className="text-primary absolute top-6 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-200 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-white/70 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:before:animate-none"
          >
            <span className="relative text-3xl font-black">+</span>
          </button>
          <div className="aspect-4/5 sm:aspect-3/4 lg:aspect-5/6">
            <Image
              src="/images/about/varnika.png"
              alt="Dr. Varnika Tiwari"
              className="h-full w-full object-cover"
              quality={100}
              fill
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          className="rounded-3xl bg-[#F1F1F1] p-8 hover:bg-white lg:col-start-3 lg:row-start-1"
          delay={0.15}
        >
          <p className="small-heading text-sm">Academic Credentials</p>
          <ul className="mt-4 list-disc space-y-3 pl-4 text-sm text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">Ph.D. in Management</span> –
              Specializing in{" "}
              <span className="text-primary font-semibold">
                Derivatives and MCX
              </span>{" "}
              from Galgotias University.
            </li>
            <li>
              <span className="font-semibold">NET Qualified</span> in Commerce
              and Management.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal
          className="rounded-3xl bg-[#F1F1F1] p-8 hover:bg-white lg:col-start-1 lg:row-start-2"
          delay={0.2}
        >
          <p className="small-heading text-sm">
            Certifications & Accreditations
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-4 text-sm text-slate-700 sm:text-base">
            <li>
              <span className="text-primary font-semibold">GST Certified</span>{" "}
              Professional
            </li>
            <li>
              <span className="text-primary font-semibold">
                SEBI Registered
              </span>{" "}
              Expert
            </li>
            <li>
              <span className="text-primary font-semibold">
                Certified Financial Analyst
              </span>{" "}
              by NISM
            </li>
            <li>
              Combining academic excellence with industry expertise to provide
              strategic financial insights and consulting.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal
          className="rounded-3xl bg-[#F1F1F1] p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] hover:bg-white lg:col-start-3 lg:row-start-2"
          delay={0.25}
        >
          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg"></p>
          <Image
            src={"/images/wallet.svg"}
            height={40}
            width={40}
            alt={"About Varnika"}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <p className="small-heading mt-4 text-sm">Domain Focus</p>
          <p className="mt-4 text-xl font-semibold">
            ETFs, NASDAQ, NYSE, forex, derivatives.
          </p>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Founder introduction video"
            onClick={() => setIsVideoOpen(false)}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.985, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.99, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-2xl leading-none text-white transition-colors hover:bg-black focus-visible:ring-2 focus-visible:ring-white"
              >
                ×
              </button>
              <video
                className="block max-h-[85vh] w-full"
                controls
                autoPlay
                muted
                playsInline
              >
                <source src="/videos/vv.MP4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FounderSection;
