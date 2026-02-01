"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function AboutPage() {
    return (
        <>
            <ParticleBackground />
            <Header />
            <main className="min-h-screen bg-[#0A0A0F]">
                {/* Hero */}
                <section className="relative h-[40vh] flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-[#F0F0FF] tracking-tighter"
                    >
                        About <span className="text-[#00F0FF]">Us</span>
                    </motion.h1>
                </section>

                {/* Content */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-xl text-[#F0F0FF]/80 leading-relaxed">
                                <span className="text-[#00F0FF] font-semibold">PedroXious</span> is a premier 3D animation
                                studio dedicated to creating breathtaking cinematics, character animations, and visual effects
                                for the entertainment industry.
                            </p>
                            <p className="text-[#F0F0FF]/70">
                                Founded by passionate artists and technologists, we blend cutting-edge technology with
                                artistic excellence to bring visions to life. Our team consists of industry veterans who have
                                worked on AAA game titles, feature films, and high-profile commercial projects.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-white/10">
                            {[
                                { value: "50+", label: "Projects" },
                                { value: "10+", label: "Years Experience" },
                                { value: "30+", label: "Team Members" },
                                { value: "15+", label: "Awards" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-[#00F0FF]">{stat.value}</div>
                                    <div className="mt-2 text-[#F0F0FF]/60">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#F0F0FF]">Our Expertise</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Character Animation",
                                    "Environment Design",
                                    "Visual Effects (VFX)",
                                    "Motion Capture",
                                    "Real-time Cinematics",
                                    "Motion Graphics",
                                    "Concept Art",
                                    "3D Modeling",
                                ].map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                                    >
                                        <div className="w-2 h-2 bg-[#00F0FF] rounded-full" />
                                        <span className="text-[#F0F0FF]">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
