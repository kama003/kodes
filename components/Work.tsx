import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Orbital",
    category: "Fintech Dashboard",
    image: "bg-neutral-100 dark:bg-neutral-900", 
  },
  {
    id: 2,
    title: "Vantage",
    category: "Health & Wellness",
     image: "bg-neutral-200 dark:bg-neutral-800",
  },
  {
    id: 3,
    title: "Nexus",
    category: "AI Platform",
     image: "bg-neutral-100 dark:bg-neutral-900",
  },
  {
    id: 4,
    title: "Flux",
    category: "E-Commerce",
     image: "bg-neutral-200 dark:bg-neutral-800",
  }
];

export const Work = () => {
    return (
        <section id="work" className="py-32 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.a 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="#" 
                        className="hidden md:flex items-center gap-2 text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        View all projects <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className={`aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 relative ${project.image} border border-neutral-100 dark:border-neutral-800`}>
                                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 dark:group-hover:bg-white/5 transition-colors duration-500" />
                                {/* Decorative elements for placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-neutral-300 dark:text-neutral-700 font-bold text-4xl tracking-tighter opacity-50 group-hover:scale-110 transition-transform duration-500">
                                        {project.title.substring(0,2).toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">{project.title}</h3>
                                    <p className="text-neutral-500 dark:text-neutral-400 text-lg">{project.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-12 md:hidden flex justify-center">
                    <a href="#" className="flex items-center gap-2 text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                        View all projects <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};