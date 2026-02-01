import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ProjectDetailClient from "./ProjectDetailClient";

// Mock data - replace with Supabase fetch
const projects: Record<string, {
    id: string;
    slug: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    thumbnailUrl: string;
    videoUrl: string;
    category: string;
    createdAt: string;
}> = {
    "cinematic-trailer": {
        id: "1",
        slug: "cinematic-trailer",
        title: "Cinematic Game Trailer",
        shortDesc: "An epic cinematic trailer for an AAA action RPG.",
        fullDesc: "This project showcases our ability to create immersive, high-quality cinematics for the gaming industry. Working closely with the game development team, we crafted a narrative-driven trailer that captures the essence of the game's world and characters. The project involved extensive motion capture, detailed environment design, and cutting-edge visual effects.",
        thumbnailUrl: "https://img.youtube.com/vi/wkvlNP8ynJc/maxresdefault.jpg",
        videoUrl: "wkvlNP8ynJc",
        category: "Game Cinematics",
        createdAt: "2024-01-15",
    },
    "character-showcase": {
        id: "2",
        slug: "character-showcase",
        title: "Character Animation Reel",
        shortDesc: "Showcase of various character animations.",
        fullDesc: "A comprehensive reel demonstrating our character animation expertise across various styles and genres. From realistic human movement to stylized cartoon action, this reel showcases the range of our animation capabilities.",
        thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoUrl: "dQw4w9WgXcQ",
        category: "Character Animation",
        createdAt: "2024-02-20",
    },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects[slug];

    if (!project) {
        return { title: "Project Not Found | PedroXious" };
    }

    return {
        title: `${project.title} | PedroXious`,
        description: project.shortDesc,
        openGraph: {
            title: project.title,
            description: project.shortDesc,
            images: [project.thumbnailUrl],
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects[slug];

    if (!project) {
        return (
            <>
                <ParticleBackground />
                <Header />
                <main className="min-h-screen flex items-center justify-center">
                    <h1 className="text-3xl text-[#F0F0FF]">Project not found</h1>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <ParticleBackground />
            <Header />
            <main className="min-h-screen bg-[#0A0A0F]">
                <ProjectDetailClient project={project} />
            </main>
            <Footer />
        </>
    );
}
