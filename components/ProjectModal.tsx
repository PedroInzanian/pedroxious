"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import Image from "next/image";

interface Project {
    id: string;
    slug: string;
    title: string;
    shortDesc: string;
    thumbnailUrl: string;
    videoUrl?: string;
    category: string;
    year: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="relative w-full max-w-4xl bg-[#0A0A0F] rounded-xl overflow-hidden border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-[#00F0FF] hover:text-[#0A0A0F] transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Video/Image */}
                        <div className="relative aspect-video bg-black">
                            {project.videoUrl ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${project.videoUrl}?autoplay=0`}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <Image
                                    src={project.thumbnailUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 text-xs font-medium bg-[#00F0FF]/10 text-[#00F0FF] rounded-full">
                                    {project.category}
                                </span>
                                <span className="text-[#F0F0FF]/40 text-sm">{project.year}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#F0F0FF]">{project.title}</h2>
                            <p className="mt-3 text-[#F0F0FF]/70">{project.shortDesc}</p>
                            <a
                                href={`/project/${project.slug}`}
                                className="mt-6 inline-flex items-center justify-center px-6 py-3 font-semibold text-[#0A0A0F] bg-[#00F0FF] rounded-lg hover:bg-[#00D4E6] transition-colors"
                            >
                                View Full Project
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
