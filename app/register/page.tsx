"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Supabase auth will be integrated here
        console.log("Register:", { name, email, password });
        setLoading(false);
    };

    const handleGoogleRegister = async () => {
        // Supabase Google OAuth will be integrated here
        console.log("Google register");
    };

    return (
        <>
            <ParticleBackground />
            <Header />
            <main className="min-h-screen flex items-center justify-center px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                        <h1 className="text-3xl font-bold text-[#F0F0FF] text-center mb-2">
                            Create Account
                        </h1>
                        <p className="text-[#F0F0FF]/60 text-center mb-8">
                            Join the community and interact with projects
                        </p>

                        {/* Google Register */}
                        <button
                            onClick={handleGoogleRegister}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Continue with Google
                        </button>

                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-white/10" />
                            <span className="text-[#F0F0FF]/40 text-sm">or</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        {/* Email/Password Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#F0F0FF]/80 mb-1">
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
                                <label htmlFor="email" className="block text-sm font-medium text-[#F0F0FF]/80 mb-1">
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
                                <label htmlFor="password" className="block text-sm font-medium text-[#F0F0FF]/80 mb-1">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F0F0FF] placeholder-[#F0F0FF]/30 focus:outline-none focus:border-[#00F0FF]/50 transition-colors"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-4 py-3 bg-[#00F0FF] text-[#0A0A0F] font-semibold rounded-lg hover:bg-[#00D4E6] disabled:opacity-50 transition-colors"
                            >
                                {loading ? "Creating account..." : "Create Account"}
                            </button>
                        </form>

                        <p className="mt-6 text-center text-[#F0F0FF]/60 text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="text-[#00F0FF] hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </main>
        </>
    );
}
