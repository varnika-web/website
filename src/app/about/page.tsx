import Image from "next/image";

import ArticleCard from "@/src/components/layout/ArticleCard";
import SubHero from "@/src/components/layout/SubHero";
import FounderSection from "@/src/components/sections/about/FounderSection";
import TeamSection from "@/src/components/sections/about/TeamSection";
import Future from "@/src/components/sections/Future";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const articles = [
  {
    title: "Top investing firm in Delhi NCR with clientele across the world",
    icon: "/images/wallet.svg",
    alt: "financial services offered by VRWealth",
  },
  {
    title: "We extend our services to a wide range of people across facets",
    icon: "/images/wallet.svg",
    alt: "financial services offered by VRWealth",
  },
  {
    title:
      "Our personalized approach to finance has helped hundreds of clients",
    icon: "/images/wallet.svg",
    alt: "financial services offered by VRWealth",
  },
];

const countries = [
  "India",
  "United States",
  "Thailand",
  "Japan",
  "Singapore",
  "United Arab Emirates (UAE)",
];

const cities = [
  "Lucknow",
  "Gorakhpur",
  "Varanasi",
  "Kanpur",
  "Meerut",
  "Hapur",
  "Delhi",
  "Noida",
  "Ghaziabad",
  "Mumbai",
  "Assam",
  "Bihar",
  "Banaglore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Haryana",
  "Riva",
];

const page = () => {
  return (
    <div>
      <SubHero
        title="About VR Wealth Creation"
        description="A brief insight into our journey, values, and mission - learn more about who we are and what drives us."
        image="/images/about/office.jpeg"
      />

      {/* STARTING CARDS */}
      <section className="mx-auto px-4 py-20 sm:max-w-7xl sm:px-0">
        <div className="flex flex-wrap justify-center gap-6 lg:justify-between">
          {articles.map((article, index) => (
            <ScrollReveal key={article.title} delay={index * 0.1} amount={0.15}>
              <ArticleCard
                title={article.title}
                icon={article.icon}
                alt={article.alt}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
      {/* About Us */}
      <div id="about-vr-wealth" className="scroll-mt-24">
        <ScrollReveal
          as="section"
          className="mx-auto px-4 py-24 sm:max-w-2xl sm:py-42"
        >
          <h3 className="heading">
            We are <span className="text-primary font-black">VR</span>
            <span className="font-bold italic">Wealth </span>
            Creation and <br /> this is our story
          </h3>
          <p className="mt-12 ml-12 text-sm leading-5 sm:ml-24 sm:max-w-[70%] sm:text-base sm:leading-7">
            VR Wealth Creations, established in 2022, is a seasoned Indian stock
            market investment organization. Since its inception, it has built an
            impressive portfolio focused on emerging sectors such as renewable
            energy, derivatives, futures, options, ETFs, and crude oil.
            <br />
            <br />
            With a disciplined value investing approach inspired by Warren
            Buffett, we have consistently achieved returns that surpass the
            NIFTY 50 index annually. Despite market volatility, our strategy of
            thorough fundamental analysis and a long-term investment horizon has
            enabled us to identify several multi-bagger stocks in the small and
            mid-cap segments.
            <br />
            <br />
            Additionally, we have successfully navigated opportunities in
            derivatives, futures, options, and exchange-traded funds (ETFs),
            which derive their value from underlying assets such as stocks,
            commodities, or currencies.
          </p>
        </ScrollReveal>
      </div>
      <FounderSection />
      <TeamSection />
      {/* CLIENT  */}
      <section
        id="our-client"
        className="mx-auto scroll-mt-24 px-4 sm:max-w-7xl sm:px-0"
      >
        <ScrollReveal>
          <h3 className="heading text-center">
            Our Client Base is Across
            <br />
            the World
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <img
            src="/images/world.png"
            alt="VR Wealth Creation Client Base"
            className="py-12 sm:px-36"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="py-8 text-center">
            {countries.map((country, index) => (
              <p key={country} className="inline pr-6 hover:font-semibold">
                {countries[index]}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center py-4">
            {cities.map((city, index) => (
              <p key={city} className="pr-6 hover:font-semibold">
                {cities[index]}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <div className="mx-auto px-4 py-24 sm:max-w-7xl sm:px-0 sm:py-32">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <ScrollReveal className="row-span-1" amount={0.15}>
            <Image
              src="/images/about/gallery/v.png"
              alt="VR Wealth Creation Team"
              width={1000}
              height={1000}
              className="h-48 object-cover sm:h-96"
            />
          </ScrollReveal>
          <ScrollReveal className="sm:col-span-2" delay={0.08} amount={0.15}>
            <Image
              src="/images/about/gallery/6.png"
              alt="VR Wealth Creation Team"
              width={1000}
              height={1000}
              className="h-48 w-full object-cover sm:h-96"
            />
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 gap-12 pt-4 sm:grid-cols-3">
          <ScrollReveal className="sm:col-span-2" delay={0.12} amount={0.15}>
            <Image
              src="/images/about/gallery/t.png"
              alt="VR Wealth Creation Team"
              width={1000}
              height={1000}
              className="h-48 object-cover sm:h-96"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.16} amount={0.15}>
            <Image
              src="/images/about/gallery/4.png"
              alt="VR Wealth Creation Team"
              width={1000}
              height={1000}
              className="h-48 w-full object-cover sm:h-96"
            />
          </ScrollReveal>
        </div>
      </div>
      <Future imageUrl="/images/future/2.jpg" />
    </div>
  );
};

export default page;
