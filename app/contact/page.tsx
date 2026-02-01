"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Form submission logic here
        console.log("Contact:", { name, email, message });
        setLoading(false);
        alert("Message sent! We'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
    };

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
                        Get in <span className="text-[#00F0FF]">Touch</span>
                    </motion.h1>
                </section>

                {/* Content */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-[#F0F0FF] mb-6">
                                Let&apos;s Create Something Amazing
                            </h2>
                            <p className="text-[#F0F0FF]/70 mb-8">
                                Ready to bring your vision to life? Whether you&apos;re looking for a cinematic trailer,
                                character animations, or stunning VFX, we&apos;re here to help. Reach out and let&apos;s
                                discuss your project.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#00F0FF]/10 rounded-lg">
                                        <Mail className="w-6 h-6 text-[#00F0FF]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#F0F0FF]">Email</h3>
                                        <p className="text-[#F0F0FF]/60">contact@pedroxious.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#00F0FF]/10 rounded-lg">
                                        <Phone className="w-6 h-6 text-[#00F0FF]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#F0F0FF]">Phone</h3>
                                        <p className="text-[#F0F0FF]/60">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#00F0FF]/10 rounded-lg">
                                        <MapPin className="w-6 h-6 text-[#00F0FF]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#F0F0FF]">Location</h3>
                                        <p className="text-[#F0F0FF]/60">Los Angeles, California</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-[#F0F0FF]/80 mb-2">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F0F0FF] placeholder-[#F0F0FF]/30 focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[#F0F0FF]/80 mb-2">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F0F0FF] placeholder-[#F0F0FF]/30 focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[#F0F0FF]/80 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F0F0FF] placeholder-[#F0F0FF]/30 focus:outline-none focus:border-[#00F0FF]/50 transition-colors resize-none"
                                            placeholder="Tell us about your project..."
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full px-6 py-4 bg-[#00F0FF] text-[#0A0A0F] font-semibold rounded-lg hover:bg-[#00D4E6] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] disabled:opacity-50 transition-all"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
