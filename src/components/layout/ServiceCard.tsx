import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ href, title, description, image }: ServiceCardProps) => {
  return (
    <Link
      href={href}
      className="group bg-primary-light relative col-span-2 block h-110 w-auto overflow-hidden rounded-lg border border-white/10 px-6 py-8 text-neutral-700"
    >
      <div className="flex h-90 flex-col justify-between">
        {/* card content */}
        <div>
          <Image
            src={"/images/wallet.svg"}
            height={32}
            width={32}
            alt="financial services offered by VRWealth"
          />
          <h3 className="my-3 text-xl font-semibold">{title}</h3>
        </div>
        <div>
          <p className="pb-6 text-sm leading-relaxed text-neutral-900">
            {description}
          </p>
          <a href={href} className="inline-flex flex-col font-semibold">
            Learn More
            <span className="mt-1 h-px w-full bg-current" />
          </a>
        </div>
      </div>
      {/* Image, hidden until hover */}
      <div className="absolute inset-0 h-full w-full shrink-0 overflow-hidden rounded-md opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </Link>
  );
};

export default ServiceCard;
