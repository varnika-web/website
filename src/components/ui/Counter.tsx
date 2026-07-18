"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
  duration?: number;
  suffix?: string;
  start?: boolean;
  className?: string;
};

export default function Counter({
  target,
  duration = 2000,
  suffix = "",
  start = false,
  className,
}: CounterProps) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    let rafId: number | null = null;
    const t0 = performance.now();

    const step = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      const v = Math.floor(t * target);
      setValue(v);
      if (t < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [start, target, duration]);

  return (
    <span className={className}>
      {value}
      {suffix}
    </span>
  );
}
