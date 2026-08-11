import Image from "next/image";

import ScrollReveal from "../../ui/ScrollReveal";

const ContactInfoSection = () => {
  return (
    <ScrollReveal
      className="flex w-full max-w-sm flex-col gap-4 pb-24 sm:max-w-md sm:pb-42"
      direction="left"
      delay={0.1}
    >
      <div className="rounded-xl bg-[#f2f2f2] px-7 py-8 sm:px-8 sm:py-9">
        <div>
          <span className="mb-2 block text-xs font-bold tracking-[0.08em] text-black uppercase">
            Email
          </span>
          <a
            href="mailto:varnika@vrwealth.net"
            className="hover:text-primary text-base text-neutral-800 transition sm:text-lg"
          >
            varnika@
            <span className="text-primary">vrwealth</span>
            .net
          </a>
        </div>

        <div className="mt-8">
          <span className="mb-2 block text-xs font-bold tracking-[0.08em] text-black uppercase">
            Phone
          </span>
          <div className="flex flex-col gap-1 text-base text-neutral-800 sm:text-lg">
            <a
              href="tel:+91-8796774415"
              className="hover:text-primary transition"
            >
              +91-8796774415
            </a>
            <a
              href="tel:+91-8796774425"
              className="hover:text-primary transition"
            >
              +91-8796774425
            </a>
          </div>
        </div>
      </div>

      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
        <Image
          src="/images/contact/ci.png"
          alt="Planning session at VR Wealth Creation"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
      </div>
    </ScrollReveal>
  );
};

export default ContactInfoSection;
