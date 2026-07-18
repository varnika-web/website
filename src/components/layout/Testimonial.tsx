interface TestimonialProps {
  photo: string;
  description: string;
  name: string;
  brand: string;
}

const Testimonial = ({ photo, description, name, brand }: TestimonialProps) => {
  return (
    <div className="flex h-56 max-w-lg overflow-hidden rounded-2xl shadow-md sm:h-72 sm:w-full sm:max-w-2xl sm:min-w-xl">
      {/* Photo */}
      <div className="h-full w-1/3 sm:w-2/5">
        <img src={photo} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className="bg-secondary flex h-full w-2/3 flex-col justify-center px-8 sm:w-3/5">
        <p className="mb-6 text-sm leading-relaxed text-white">{description}</p>
        <p className="text-md font-semibold text-black">{name}</p>
        <p className="text-sm text-black/80">{brand}</p>
      </div>
    </div>
  );
};

export default Testimonial;
