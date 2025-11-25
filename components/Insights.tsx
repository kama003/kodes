import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
    {
        title: "The Future of Interface Design in 2025",
        date: "Oct 12, 2024",
        category: "Design"
    },
     {
        title: "Scaling React Applications: Best Practices",
        date: "Sep 28, 2024",
        category: "Engineering"
    },
     {
        title: "AI-Driven User Experiences",
        date: "Sep 15, 2024",
        category: "Strategy"
    }
];

export const Insights = () => {
    return (
        <section id="insights" className="py-32 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
             <div className="container mx-auto px-4 md:px-6">
                 <div className="mb-16">
                     <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">Latest Insights</h2>
                     <p className="text-neutral-500 dark:text-neutral-400 text-lg">Thinking about design, technology, and culture.</p>
                 </div>

                 <div className="space-y-4">
                     {articles.map((article, i) => (
                         <motion.a 
                            href="#"
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="block group p-6 md:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-950 hover:shadow-lg transition-all duration-300"
                         >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">{article.category}</span>
                                        <span className="text-xs text-neutral-400">•</span>
                                        <span className="text-xs text-neutral-500 dark:text-neutral-400">{article.date}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                                        {article.title}
                                    </h3>
                                </div>
                                <div className="flex items-center justify-end">
                                    <span className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </span>
                                </div>
                            </div>
                         </motion.a>
                     ))}
                 </div>
             </div>
        </section>
    );
};