import ServiceCard from "../../layout/ServiceCard";
import { Services } from "@/src/data/services";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="mx-auto max-w-max px-4 py-20 sm:max-w-7xl sm:px-0 sm:py-40"
    >
      <p className="small-heading">What we offer</p>
      <h3 className="heading">We can help you with each one of these</h3>
      <p className="max-w-lg pb-12 font-sans text-sm leading-6 text-neutral-600 md:max-w-xl lg:mb-8 lg:text-lg">
        Personalized investment strategies, financial planning, and wealth
        management designed to help you achieve your life goals.
      </p>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-6">
        {Services.map((Service, index) => (
          <ServiceCard
            key={index}
            href={Service.href}
            title={Service.title}
            description={Service.description}
            image={Service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
