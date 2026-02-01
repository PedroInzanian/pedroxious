import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0F] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-[#00F0FF]">PedroXious</h3>
                        <p className="mt-4 text-[#F0F0FF]/60 max-w-md">
                            Cinematic 3D animation studio specialized in character animation,
                            environments, VFX, and motion design for games and film.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-semibold text-[#F0F0FF] uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="mt-4 space-y-2">
                            {["Home", "Portfolio", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-[#F0F0FF]/60 hover:text-[#00F0FF] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-[#F0F0FF] uppercase tracking-wider">
                            Connect
                        </h4>
                        <ul className="mt-4 space-y-2">
                            {["ArtStation", "YouTube", "LinkedIn", "Instagram"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[#F0F0FF]/60 hover:text-[#00F0FF] transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[#F0F0FF]/40 text-sm">
                        © {new Date().getFullYear()} PedroXious. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-[#F0F0FF]/40 hover:text-[#00F0FF] text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-[#F0F0FF]/40 hover:text-[#00F0FF] text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
