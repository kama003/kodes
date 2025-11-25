import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-32 bg-white dark:bg-neutral-950 relative overflow-hidden flex items-center justify-center">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-100/50 via-transparent to-transparent dark:from-neutral-800/20" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 text-neutral-900 dark:text-white">
            Ready to scale your vision?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
            Let's collaborate to build something extraordinary. Our team is ready to bring your ideas to life.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity">
            Get in touch
            </Button>
        </motion.div>
      </div>
    </section>
  );
};