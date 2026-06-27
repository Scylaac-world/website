"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  id: number;
  createdAt: number;
  size: number;
  isStar: boolean;
}

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 12, stiffness: 120, mass: 0.15 });
  const springY = useSpring(cursorY, { damping: 12, stiffness: 120, mass: 0.15 });
  const [isPointer, setIsPointer] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);
  const particleIdRef = useRef(0);
  const lastMoveTime = useRef(performance.now());

  // Tip offset: precise wand tip, then shifted toward the handle so the circle sits below the tip
  const tipOffset = useMemo(() => {
    const angle = -75; // wand rotation in degrees
    const rad = (angle * Math.PI) / 180;
    // Vector from cursor point to tip (star center) in SVG coordinates
    const dx = 28 - 10.8;   // 17.2
    const dy = 8 - 10.8;    // -2.8
    // Rotate by wand angle
    const tx = dx * Math.cos(rad) - dy * Math.sin(rad);
    const ty = dx * Math.sin(rad) + dy * Math.cos(rad);
    // Direction from tip to base (down the rod) in SVG coords: (6-28, 30-8) = (-22, 22)
    const bdx = 6 - 28;
    const bdy = 30 - 8;
    // Rotate this base direction by the wand angle
    const bx = bdx * Math.cos(rad) - bdy * Math.sin(rad);
    const by = bdx * Math.sin(rad) + bdy * Math.cos(rad);
    // Normalize and scale (6px toward base)
    const len = Math.sqrt(bx * bx + by * by);
    const nx = bx / len;
    const ny = by / len;
    const shift = 6; // pixels toward the handle
    return {
      x: tx + nx * shift,
      y: ty + ny * shift,
    };
  }, []);

  // Track mouse and detect clickable elements
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      lastMoveTime.current = performance.now();

      const target = e.target as HTMLElement | null;
      if (!target) {
        setIsPointer(false);
        return;
      }
      const clickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        (target as HTMLElement).tabIndex >= 0;
      setIsPointer(!!clickable);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  // Canvas trail – unchanged
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = document.createElement("canvas");
    canvas.style.cssText = `
      position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9998;
      width: 100vw; height: 100vh;
    `;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const MAX_PARTICLES = isPointer ? 80 : 50;
    const PARTICLE_LIFETIME = 500;
    const SPAWN_RATE = isPointer ? 3 : 1;
    const STAR_CHANCE = 0.12;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();

      const sx = springX.get() + tipOffset.x;
      const sy = springY.get() + tipOffset.y;
      const timeSinceMove = now - lastMoveTime.current;

      if (sx > 0 && sy > 0 && timeSinceMove < 300) {
        for (let i = 0; i < SPAWN_RATE; i++) {
          const isStar = Math.random() < STAR_CHANCE;
          particlesRef.current.push({
            x: sx + (Math.random() - 0.5) * 8,
            y: sy + (Math.random() - 0.5) * 8,
            id: particleIdRef.current++,
            createdAt: now,
            size: isStar ? 2.5 + Math.random() * 2 : 1 + Math.random() * 1.5,
            isStar,
          });
        }
        while (particlesRef.current.length > MAX_PARTICLES) {
          particlesRef.current.shift();
        }
      }

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const age = now - p.createdAt;
        if (age > PARTICLE_LIFETIME) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        p.y -= 0.8;
        p.x += (Math.random() - 0.5) * 0.4;

        const progress = age / PARTICLE_LIFETIME;
        const alpha = 1 - progress;
        const size = p.size * (1 - progress * 0.6);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

        if (p.isStar) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
          ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.4})`;
          ctx.shadowBlur = 2;
        } else {
          ctx.fillStyle = `rgba(30, 144, 200, ${alpha * 0.6})`;
          ctx.shadowColor = `rgba(30, 144, 200, ${alpha * 0.2})`;
          ctx.shadowBlur = 1;
        }
        ctx.fill();
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      canvas.remove();
    };
  }, [isPointer, springX, springY, tipOffset]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10001]"
      style={{ left: springX, top: springY }}
    >
      {/* Spell circle (behind wand) – now shifted below the tip */}
      <motion.div
        className="absolute"
        style={{
          left: `${tipOffset.x}px`,
          top: `${tipOffset.y}px`,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: -1,
        }}
        animate={{
          scale: isPointer ? 1 : 0,
          opacity: isPointer ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative w-7 h-7">
          <div
            className="absolute inset-0 rounded-full border-2 border-[#1E90C8]/60 bg-[#F0F4F8]/80 backdrop-blur-sm"
            style={{
              boxShadow: "0 0 15px rgba(30,144,200,0.6), 0 0 30px rgba(30,144,200,0.3)",
            }}
          />
          <div className="absolute inset-1 rounded-full border border-[#C0C4C8]/40 animate-ping" />
        </div>
      </motion.div>

      {/* Wand (always on top) – 2× larger */}
      <motion.div
        className="absolute"
        style={{
          translateX: "-30%",
          translateY: "-30%",
          filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.3))",
        }}
        animate={{
          scale: 1,
          rotate: -75,
        }}
        transition={{ duration: 0.2 }}
      >
        <svg
          width="72"
          height="72"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="6"
            y1="30"
            x2="28"
            y2="8"
            stroke="url(#rodGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <polygon
            points="28,8 30,14 26,12 24,18 24,8"
            fill="url(#starGradient)"
            stroke="white"
            strokeWidth="0.5"
            style={{
              filter: isPointer
                ? "drop-shadow(0 0 6px rgba(30,144,200,0.8))"
                : "drop-shadow(0 0 3px rgba(30,144,200,0.4))",
            }}
          />
          <defs>
            <linearGradient id="rodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#1E90C8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}