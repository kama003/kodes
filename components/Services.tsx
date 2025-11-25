import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Globe } from "lucide-react";

const services = [
  {
    title: "Digital Design",
    description: "Crafting intuitive and aesthetically pleasing interfaces that drive user engagement and brand loyalty.",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    title: "Engineering",
    description: "Building robust, scalable, and high-performance applications using cutting-edge technologies.",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "Strategy",
    description: "Data-driven insights to position your brand effectively in the competitive digital landscape.",
    icon: <Globe className="w-8 h-8" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
        {/* Subtle background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white"
          >
            We build digital products that define the future.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            Our expertise spans across the entire digital product lifecycle, from initial concept to final deployment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm hover:shadow-lg"
            >
              <div className="mb-6 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 w-fit text-neutral-900 dark:text-white group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};