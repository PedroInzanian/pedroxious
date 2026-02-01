"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

interface Project {
    id: string;
    slug: string;
    title: string;
    shortDesc: string;
    thumbnailUrl: string;
    category: string;
    year: string;
}

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
    featured?: boolean;
}

export default function ProjectCard({ project, onClick, featured = false }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`group relative cursor-pointer overflow-hidden rounded-xl bg-[#0A0A0F] border border-white/5 hover:border-[#00F0FF]/50 transition-colors ${featured ? "aspect-video" : "aspect-[4/3]"
                }`}
            onClick={onClick}
        >
            {/* Thumbnail */}
            <Image
                src={project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-80" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 bg-[#00F0FF] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                >
                    <Play className="w-6 h-6 text-[#0A0A0F] ml-1" fill="#0A0A0F" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-medium bg-[#00F0FF]/20 text-[#00F0FF] rounded">
                        {project.category}
                    </span>
                    <span className="text-[#F0F0FF]/40 text-xs">{project.year}</span>
                </div>
                <h3 className={`font-bold text-[#F0F0FF] ${featured ? "text-xl" : "text-base"}`}>
                    {project.title}
                </h3>
                {featured && (
                    <p className="mt-1 text-sm text-[#F0F0FF]/60 line-clamp-2">{project.shortDesc}</p>
                )}
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                <div className="absolute inset-0 border-2 border-[#00F0FF]/40 rounded-xl" />
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,240,255,0.1)]" />
            </div>
        </motion.div>
    );
}
