import ClienteleCard from "@/src/components/layout/ClienteleCard";
import ContactForm from "@/src/components/layout/ContactForm";
import SubHero from "@/src/components/layout/SubHero";
import ContactFaqSection from "@/src/components/sections/contact/ContactFaqSection";
import ContactInfoSection from "@/src/components/sections/contact/ContactInfoSection";
import Future from "@/src/components/sections/Future";
import ScrollReveal from "@/src/components/ui/ScrollReveal";

const page = () => {
  return (
    <div>
      <SubHero
        title="Reach out to unlock financial freedom"
        description="A brief insight into our journey, values, and mission - learn more about who we are and what drives us."
        image="/images/contact/7.png"
      />
      <ContactForm />

      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:flex-row sm:gap-10 sm:px-0">
        <ScrollReveal className="w-full" delay={0.05}>
          <ClienteleCard
            title="Head Office (Noida) - 10:30 AM to 6:30 PM"
            description="20th Floor, Galaxy blue sapphire plaza, Extension, Greater Noida W Rd, Sector 4, Noida, Uttar Pradesh 201309"
            image="/images/contact/office/noida.webp"
          />
        </ScrollReveal>
        <ScrollReveal className="w-full" delay={0.12}>
          <ClienteleCard
            title="Lucknow Office"
            description="10th Floor, Regus, Kathauta Chauraha Rd, Vijaipur Colony, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226016"
            image="/images/contact/office/lucknow.jpg"
          />
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-0 sm:py-0">
        <ContactFaqSection />
        <ContactInfoSection />
      </section>

      <Future imageUrl="/images/contact/cf.jpg" />
    </div>
  );
};

export default page;
