import Image from "next/image";
import Button from "../ui/Button";

const Future = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Left: Text content */}
        <div className="flex flex-col gap-6">
          <h3 className="heading">
            Build a better future with the <br /> right investments
          </h3>

          <p className="max-w-md">
            Secure your financial future with smart, strategic investments. Our
            expert guidance helps you grow wealth, manage risks, and achieve
            long-term financial success.
          </p>

          <div>
            <Button path="" />
          </div>
        </div>
        {/* Right: Image */}
        <div className="relative h-100 w-full overflow-hidden md:h-120">
          <Image
            src="/images/future.png"
            alt="Financial consultant overlooking the city"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Future;
