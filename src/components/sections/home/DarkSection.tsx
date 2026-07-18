import Button from "../../ui/Button";
import Pill from "../../ui/pill";
import FeatureCard from "../../layout/FeatureCard";
import Image from "next/image";

const DarkSection = () => {
  const pills = [
    "Financial Planning",
    "Investment Advisory",
    "Wealth Management",
    "Tax Planning",
  ];
  return (
    <section className="bg-primary-dark mt-70 min-h-screen w-full text-white sm:mt-50">
      <div className="mx-auto flex max-w-max flex-col-reverse justify-between px-4 py-20 pl-4 sm:max-w-7xl sm:flex-row sm:px-0 sm:py-48 sm:pl-0">
        <div className="max-w-md pt-20 sm:pt-0">
          {pills.map((pill, index) => (
            <Pill key={index} label={pill} className="mb-4" />
          ))}{" "}
          <span className="font-regular text-neutral-400">and more... </span>
          <p className="lg:text-md mb-8 max-w-[90%] pt-4 font-sans text-sm leading-6 text-neutral-400 md:max-w-sm lg:mb-8">
            Personalized investment strategies, financial planning, and wealth
            management designed to help you achieve your life goals.
          </p>
        </div>
        <div className="max-w-xl">
          <h2 className="pb-16 text-3xl text-white sm:text-5xl">
            We help you unlock{" "}
            <span className="text-accent m-0 font-semibold">
              financial freedom
            </span>{" "}
            with smart choices powered by our years of research and expert
            vision.
          </h2>
          <Button path="/#services" label="Explore Services" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-42 sm:px-0 sm:pt-16">
        <h5 className="py-12 text-center font-semibold">
          Comprehensive care fot
          <br />
          lasting solutions
        </h5>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 overflow-hidden p-0 lg:grid-cols-7">
          {/* Left: 2x2 card grid */}
          <div className="grid grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:col-span-5">
            <FeatureCard
              title="Personalized Approach"
              description="VR Wealth Creation emphasizes understanding individual client needs and goals."
            />
            <FeatureCard
              title="Expert Advisors"
              description="Experienced financial advisors provide personalized guidance and support."
            />
            <FeatureCard
              title="Comprehensive Solutions"
              description="Offering a wide range of financial services to address all aspects of wealth creation."
            />
            <FeatureCard
              title="Technology-enabled platform"
              description="Technology partners are Uptox, Zerodha and INDMoney."
            />
          </div>
          {/* Right: image */}
          <div className="relative h-full min-h-60 lg:col-span-2">
            <Image
              src="/images/feature-house.jpg"
              alt="House model and keys"
              className="h-full w-full bg-center object-cover"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
