"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [navbarTheme, setNavbarTheme] = useState<"dark" | "light">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dynamic theme detection based on the section in view
  const updateTheme = useCallback(() => {
    const sections = document.querySelectorAll("section[data-theme]");
    const navbarHeight = 80;
    let currentTheme: "dark" | "light" = "dark";
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distance = rect.top - navbarHeight;
      if (distance <= 0 && Math.abs(distance) < minDistance) {
        minDistance = Math.abs(distance);
        const theme = section.getAttribute("data-theme") as "dark" | "light";
        currentTheme = theme === "light" ? "light" : "dark";
      }
    });

    if (minDistance === Infinity) currentTheme = "dark";
    setNavbarTheme(currentTheme);
  }, []);

  useEffect(() => {
    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);
    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, [updateTheme]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-10 transition-colors duration-300 ${
        navbarTheme === "light"
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 text-gray-900"
          : "glass-card border-b border-white/5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src={ "/assets/logo.png" }
            alt="SCYLAAAC"
            width={200}
            height={60}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="#hero"
            className={`hover:text-[#1E90C8] transition link-underline ${
              navbarTheme === "light" ? "text-gray-700" : "text-slate-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="#services"
            className={`hover:text-[#1E90C8] transition link-underline ${
              navbarTheme === "light" ? "text-gray-700" : "text-slate-300"
            }`}
          >
            Services
          </Link>
          <Link
            href="#process"
            className={`hover:text-[#1E90C8] transition link-underline ${
              navbarTheme === "light" ? "text-gray-700" : "text-slate-300"
            }`}
          >
            Process
          </Link>
          <Link
            href="#why-choose"
            className={`hover:text-[#1E90C8] transition link-underline ${
              navbarTheme === "light" ? "text-gray-700" : "text-slate-300"
            }`}
          >
            Why Us
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition shadow-xl ${
              navbarTheme === "light"
                ? "bg-[#1E90C8] text-white hover:bg-[#1873A3] shadow-[#1E90C8]/20"
                : "bg-white text-black hover:bg-gray-100 shadow-white/10"
            }`}
          >
            Let's talk
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden mt-4 rounded-2xl p-4 border ${
              navbarTheme === "light"
                ? "bg-white border-gray-200"
                : "bg-[#1A232E] border-[#3E5062]"
            }`}
          >
            <div className="space-y-2">
              <Link
                href="#hero"
                onClick={() => setMobileOpen(false)}
                className="block py-2 font-medium"
              >
                Home
              </Link>
              <Link
                href="#services"
                onClick={() => setMobileOpen(false)}
                className="block py-2 font-medium"
              >
                Services
              </Link>
              <Link
                href="#process"
                onClick={() => setMobileOpen(false)}
                className="block py-2 font-medium"
              >
                Process
              </Link>
              <Link
                href="#why-choose"
                onClick={() => setMobileOpen(false)}
                className="block py-2 font-medium"
              >
                Why Us
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-4 bg-[#1E90C8] text-white py-3 rounded-xl font-semibold"
              >
                Let's talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}