import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Emergency Plumbing",
    img: "/Assessment.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    desc: "24/7 emergency plumbing services for urgent issues like burst pipes, water heater failures, and severe leaks. We're always ready to help when you need us most.",
  },
  {
    title: "Residential Plumbing",
    img: "/repair.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    desc: "Complete residential plumbing services including fixture installation, pipe repairs, and bathroom remodeling. We handle all your home plumbing needs with expertise.",
  },
  {
    title: "Water Heater Services",
    img: "/Maintenance.jpg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.97 5.97 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    desc: "Professional water heater installation, repair, and maintenance. We work with all types of water heaters to ensure you have reliable hot water when you need it.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-[var(--primary-light)] section-animate">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-green-900 mb-6">Our Plumbing Services</h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Available 24/7 for all your plumbing needs in Yulee. We provide reliable, efficient service you can trust.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="relative h-64">
              <Image 
                src={s.img} 
                alt={s.title} 
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md">
                <div className="text-green-900">
                  {s.icon}
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-green-900 mb-4">{s.title}</h3>
              <p className="text-[var(--text-secondary)] mb-6">{s.desc}</p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-green-900 font-medium hover:text-[var(--accent)] transition-colors"
              >
                Schedule Service
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4 ml-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="#contact" 
          className="inline-block px-8 py-3 rounded-full bg-green-900 text-white font-medium hover:bg-green-800 transition-colors duration-300 shadow-md"
        >
          View All Services
        </a>
      </div>
    </div>
  </section>
);

export default Services; 