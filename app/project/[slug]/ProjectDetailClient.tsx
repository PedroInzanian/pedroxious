"use client";

import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";

interface Project {
    id: string;
    slug: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    thumbnailUrl: string;
    videoUrl: string;
    category: string;
    createdAt: string;
}

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    return (
        <>
            {/* Video Hero */}
            <section className="relative w-full aspect-video max-h-[70vh]">
                <iframe
                    src={`https://www.youtube.com/embed/${project.videoUrl}?rel=0&modestbranding=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center gap-1 px-3 py-1 text-sm font-medium bg-[#00F0FF]/10 text-[#00F0FF] rounded-full">
                            <Tag size={14} />
                            {project.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-[#F0F0FF]/50">
                            <Calendar size={14} />
                            {new Date(project.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-[#F0F0FF]">{project.title}</h1>

                    {/* Description */}
                    <div className="mt-8 prose prose-invert prose-lg max-w-none">
                        <p className="text-[#F0F0FF]/80 leading-relaxed">{project.fullDesc}</p>
                    </div>
                </motion.div>

                {/* Comments Section Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-white/10"
                >
                    <h2 className="text-2xl font-bold text-[#F0F0FF] mb-6">Comments</h2>
                    <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center">
                        <p className="text-[#F0F0FF]/60">
                            Sign in to leave a comment
                        </p>
                        <a
                            href="/login"
                            className="mt-4 inline-flex items-center justify-center px-6 py-2 font-semibold text-[#0A0A0F] bg-[#00F0FF] rounded-lg hover:bg-[#00D4E6] transition-colors"
                        >
                            Sign In
                        </a>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
