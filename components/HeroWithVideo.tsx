"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroWithVideoProps {
    videoId?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
}

export default function HeroWithVideo({
    videoId = "wkvlNP8ynJc",
    title = "PEDROXIOUS",
    subtitle = "3D ANIMATION STUDIO",
    description = "Expert in character animation, environments, VFX and motion design",
    ctaText = "VIEW PORTFOLIO →",
    ctaLink = "/portfolio",
}: HeroWithVideoProps) {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* YouTube Video Background */}
            <div className="absolute inset-0 z-0">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                    className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ border: "none" }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Background Video"
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/70 to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/50" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold text-[#F0F0FF] uppercase tracking-tighter leading-none"
                    style={{ textShadow: "0 0 40px rgba(0, 240, 255, 0.3)" }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-4 text-xl sm:text-2xl md:text-3xl font-light text-[#00F0FF] tracking-widest"
                >
                    {subtitle}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 text-base sm:text-lg max-w-xl text-[#F0F0FF]/70"
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link
                        href={ctaLink}
                        className="mt-8 inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-[#0A0A0F] bg-[#00F0FF] rounded-lg hover:bg-[#00D4E6] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300"
                    >
                        {ctaText}
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-[#00F0FF]/50 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-[#00F0FF] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
