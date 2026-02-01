"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
    { name: "Disney", src: "/logos/disney.svg" },
    { name: "EA", src: "/logos/ea.svg" },
    { name: "Epic Games", src: "/logos/epic.svg" },
    { name: "Bandai", src: "/logos/bandai.svg" },
    { name: "Ubisoft", src: "/logos/ubisoft.svg" },
    { name: "Riot", src: "/logos/riot.svg" },
    { name: "WB Games", src: "/logos/wb.svg" },
    { name: "Sony", src: "/logos/sony.svg" },
];

export default function Marquee() {
    // Double the logos for seamless loop
    const allLogos = [...logos, ...logos];

    return (
        <section className="relative bg-[#0A0A0F] py-8 overflow-hidden border-y border-white/5">
            <div className="flex">
                <motion.div
                    className="flex items-center gap-16 whitespace-nowrap"
                    animate={{ x: [0, -50 * logos.length * 2] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ animationPlayState: "paused" }}
                >
                    {allLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex-shrink-0 w-24 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        >
                            {/* Placeholder for logo - replace with actual SVGs */}
                            <span className="text-[#F0F0FF]/60 text-sm font-medium tracking-wider">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
