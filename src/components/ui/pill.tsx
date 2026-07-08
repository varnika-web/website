import React from "react";

type PillProps = {
  label: string;
  className?: string;
};

export default function Pill({ label, className = "" }: PillProps) {
  return (
    <div
      className={
        "font-regular mr-4 mb-4 inline-flex items-center rounded-full bg-[#2b2740] px-4 py-2 text-xs text-white shadow-sm" +
        className
      }
    >
      {label}
    </div>
  );
}

export { Pill };
