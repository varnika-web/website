import { CircleStar } from "lucide-react";
import Image from "next/image";

const Badge = () => {
  return (
    <div className="border-secondary text-secondary borderPY-2 mb-4 flex max-w-fit items-center justify-center rounded-lg border py-2 pr-3 pl-1 text-sm">
      <img
        src={"/images/badge.png"}
        alt="VRWealth is Top Ranked Investing firm in Delhi NCR"
        className="h-10 w-auto"
      />
      <div>
        <h3 className="font-extrabold uppercase">Top in Delhi NCR</h3>
        <p>Investment Firms</p>
      </div>
    </div>
  );
};

export default Badge;
