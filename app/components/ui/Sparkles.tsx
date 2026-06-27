"use client";
import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  top: string;
  left: string;
  animationDelay: string;
  opacity: number;
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // generate random sparkles only on the client
    const generated = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      top: `${10 + Math.random() * 80}%`,
      left: `${10 + Math.random() * 80}%`,
      animationDelay: `${Math.random() * 3}s`,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setSparkles(generated);
  }, []);

  if (sparkles.length === 0) return null; // nothing rendered on server

  return (
    <>
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute w-1 h-1 bg-[#1E90C8] rounded-full animate-pulse pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.animationDelay,
            opacity: s.opacity,
          }}
        />
      ))}
    </>
  );
}