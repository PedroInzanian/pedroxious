import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroWithVideo from "@/components/HeroWithVideo";
import Marquee from "@/components/Marquee";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Header />
      <main>
        <HeroWithVideo
          videoId="wkvlNP8ynJc"
          title="PEDROXIOUS"
          subtitle="3D ANIMATION STUDIO"
          description="Blending cinematic 3D animation with your unique vision. Expert in character animation, environments, VFX and motion design."
          ctaText="VIEW PORTFOLIO →"
          ctaLink="/portfolio"
        />
        <Marquee />

        {/* Services Section */}
        <section className="py-24 bg-[#0A0A0F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F0F0FF] text-center mb-16">
              Our <span className="text-[#00F0FF]">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Character Animation",
                  desc: "Bringing characters to life with fluid, expressive motion.",
                  icon: "🎭",
                },
                {
                  title: "Environment Design",
                  desc: "Creating immersive worlds with stunning detail.",
                  icon: "🌍",
                },
                {
                  title: "VFX & Motion",
                  desc: "Eye-catching visual effects and dynamic motion graphics.",
                  icon: "✨",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F0FF]/30 transition-colors group"
                >
                  <span className="text-4xl">{service.icon}</span>
                  <h3 className="mt-4 text-xl font-semibold text-[#F0F0FF] group-hover:text-[#00F0FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[#F0F0FF]/60">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
