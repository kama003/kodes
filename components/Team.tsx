import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";

const team = [
    {
        name: "Kamal",
        role: "Co-Founder & Lead Engineer",
        image: "../img/kamal.png",
        bio: "Architecting scalable systems and turning complex problems into elegant code. Kamal leads the technical vision at Kodes.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    },
    {
        name: "Himanshi",
        role: "Co-Founder & Creative Director",
        image: "../img/himanshi.png",
        bio: "Designing intuitive experiences and defining the visual language of digital products. Himanshi brings brands to life.",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#",
            instagram: "#"
        }
    }
];

export const Team = () => {
    return (
        <section id="team" className="py-32 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white">
                        Meet the minds behind Kodes.
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        We are a dedicated team of creators, builders, and strategists passionate about digital excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-2 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <div className="flex gap-4">
                                            <a href={member.social.instagram} className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors">
                                                <Instagram size={18} />
                                            </a>
                                            <a href={member.social.linkedin} className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors">
                                                <Linkedin size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">{member.name}</h3>
                                    <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">{member.role}</p>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};