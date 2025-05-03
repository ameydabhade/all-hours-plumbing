import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Yulee Resident",
    text: "All Hours Plumbing saved us from a major water damage disaster. Their emergency service was quick and professional. The team arrived within 30 minutes and fixed our burst pipe efficiently.",
    image: "/person1.jpg"
  },
  {
    name: "Sarah Williams",
    role: "Homeowner",
    text: "I&apos;ve been using All Hours Plumbing for years, and they never disappoint. Their technicians are knowledgeable, courteous, and always leave my home clean. Highly recommend their services!",
    image: "/person2.jpg"
  },
  {
    name: "David Thompson",
    role: "Local Business Owner",
    text: "As a small business owner in Yulee, I rely on All Hours Plumbing for all our plumbing needs. They&apos;re reliable, affordable, and always provide excellent service. A true local gem!",
    image: "/person3.jpg"
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-white section-animate">
    <div className="container mx-auto max-w-5xl px-6">
      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-green-900 mb-12 text-center">Yulee's Trusted Plumber</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[var(--primary-light)] bg-opacity-20 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative">
            <div className="text-[var(--accent)] text-5xl absolute top-4 left-4 opacity-20">"</div>
            <div className="flex items-center mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-green-900">
                <Image 
                  src={t.image} 
                  alt={t.name} 
                  fill
                  sizes="(max-width: 64px) 100vw, 64px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
              <div>
                <div className="font-serif text-lg font-semibold text-green-900">{t.name}</div>
                <div className="text-[var(--text-secondary)] text-sm">{t.role}</div>
              </div>
            </div>
            <div className="text-[var(--text-primary)] italic relative z-10">{t.text}</div>
            <div className="text-[var(--accent)] text-5xl absolute bottom-4 right-4 opacity-20">"</div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-full border-2 border-green-900 text-green-900 font-medium hover:bg-green-900 hover:text-white transition-colors duration-300">
          Read More Reviews
        </button>
      </div>
    </div>
  </section>
);

export default Testimonials; 
