"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroWithVideo from "@/components/HeroWithVideo";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ParticleBackground from "@/components/ParticleBackground";

// Mock data - replace with Supabase fetch
const projects = [
    {
        id: "1",
        slug: "cinematic-trailer",
        title: "Cinematic Game Trailer",
        shortDesc: "An epic cinematic trailer for an AAA action RPG, featuring dynamic camera work and stunning visual effects.",
        thumbnailUrl: "https://img.youtube.com/vi/wkvlNP8ynJc/maxresdefault.jpg",
        videoUrl: "wkvlNP8ynJc",
        category: "Game Cinematics",
        year: "2024",
    },
    {
        id: "2",
        slug: "character-showcase",
        title: "Character Animation Reel",
        shortDesc: "Showcase of various character animations including combat, dialogue, and locomotion.",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "dQw4w9WgXcQ",
        category: "Character Animation",
        year: "2024",
    },
    {
        id: "3",
        slug: "environment-flythrough",
        title: "Fantasy Environment",
        shortDesc: "A breathtaking flythrough of a fantasy world environment.",
        thumbnailUrl: "https://img.youtube.com/vi/wkvlNP8ynJc/maxresdefault.jpg",
        videoUrl: "wkvlNP8ynJc",
        category: "Environments",
        year: "2023",
    },
    {
        id: "4",
        slug: "vfx-breakdown",
        title: "VFX Breakdown",
        shortDesc: "Behind the scenes look at our visual effects pipeline.",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "dQw4w9WgXcQ",
        category: "VFX",
        year: "2023",
    },
];

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (project: (typeof projects)[0]) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <ParticleBackground />
            <Header />
            <main className="min-h-screen bg-[#0A0A0F]">
                {/* Hero */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0F]" />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative text-5xl md:text-7xl font-bold text-[#F0F0FF] tracking-tighter"
                    >
                        Featured <span className="text-[#00F0FF]">Projects</span>
                    </motion.h1>
                </section>

                {/* Projects Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Featured Project */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8"
                    >
                        <ProjectCard project={projects[0]} onClick={() => openModal(projects[0])} featured />
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.slice(1).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                <ProjectCard project={project} onClick={() => openModal(project)} />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />

            <ProjectModal project={selectedProject} isOpen={modalOpen} onClose={closeModal} />
        </>
    );
}
