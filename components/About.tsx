import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-neutral-950">
             <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-neutral-900 dark:text-white"
                        >
                            We are creative partners for ambitious brands.
                        </motion.h2>
                    </div>
                    <div>
                        <motion.p 
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.2 }}
                             viewport={{ once: true }}
                             className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed"
                        >
                            Kodes is a digital product agency driven by design and technology. We believe that great products are built at the intersection of strategy, design, and engineering.
                        </motion.p>
                        <motion.p 
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.3 }}
                             viewport={{ once: true }}
                             className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed"
                        >
                            Since 2020, we have partnered with startups and Fortune 500 companies to deliver digital experiences that transform businesses. Our team is a collective of thinkers, makers, and problem solvers.
                        </motion.p>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Years Experience", value: "10+" },
                        { label: "Projects Shipped", value: "150+" },
                        { label: "Awards Won", value: "24" },
                        { label: "Team Members", value: "40+" }
                    ].map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 border-l border-neutral-200 dark:border-neutral-800"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
             </div>
        </section>
    );
};