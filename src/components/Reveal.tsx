"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  // "pending" renders with no reveal class at all, so content is visible by
  // default (no JS, crawlers, screenshot tools). JS only hides elements that
  // are confirmed off-screen at mount, then animates them in on intersect.
  const [state, setState] = useState<"pending" | "hidden" | "visible">(
    "pending",
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) {
      setState("visible");
      return;
    }

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealClass =
    state === "hidden" ? "reveal" : state === "visible" ? "reveal is-visible" : "";

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`${revealClass} ${className}`}
      style={{ animationDelay: state === "visible" ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
