const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-8 text-neutral-700">
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <p className="max-w-md text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
