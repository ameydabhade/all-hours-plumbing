import React from "react";
import Image from "next/image";

const Hero = () => (
  <section className="relative h-[90vh] bg-[#f8f8f3] overflow-hidden section-animate">
    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,61,47,0.1)] to-transparent z-10"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="flex flex-col justify-center items-start p-12 lg:p-16 z-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-green-900 tracking-tight">
          <span className="block mb-2 animate-[fadeIn_0.6s_ease-in-out_0.2s_both]">24/7</span>
          <span className="block mb-2 animate-[fadeIn_0.6s_ease-in-out_0.4s_both]">Plumbing</span>
          <span className="block animate-[fadeIn_0.6s_ease-in-out_0.6s_both]">Services</span>
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mt-4 font-light tracking-wider animate-[fadeIn_0.6s_ease-in-out_0.8s_both]">Available around the clock for all your plumbing needs in Yulee</p>
        <button className="mt-8 px-10 py-4 rounded-full bg-green-900 text-white font-medium btn-animate animate-[fadeIn_0.6s_ease-in-out_1s_both] shadow-md">
          Call Now
          <span className="ml-2">→</span>
        </button>
      </div>
      <div className="relative hidden md:block">
        <Image
          src="/plumbing-hero.jpg"
          alt="Professional plumber working"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  </section>
);

export default Hero; 