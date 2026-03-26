import Image from "next/image";
import { companyName, heroTitle, heroSubtitle, slogan, primaryCtaLabel, primaryCtaHref } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { motionConfig } from "@/lib/brand";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-[#FAF9F7]">
            {/* BACKGROUND GRADIENTS - Premium light theme */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-radial from-[#F2EFEC] to-transparent opacity-80 blur-3xl transform translate-x-1/3 -translate-y-1/3 rounded-full" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-radial from-[#B08D8D]/10 to-transparent opacity-60 blur-3xl transform -translate-x-1/2 translate-y-1/2 rounded-full" />

                {/* Subtle soft noise/texture overlay if needed, here just keeping it clean */}
                <div className="absolute inset-0 bg-[#FAF9F7]/40 backdrop-blur-[1px]" />
            </div>

            <div className="container px-4 md:px-8 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-4 md:gap-12 lg:gap-8 items-center pt-16 lg:pt-24 pb-8 md:pb-16 lg:pb-24">

                    {/* TEXTO */}
                    <div className="max-w-2xl md:pt-12">
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out fill-mode-both">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-heading font-medium leading-[1.05] tracking-tight mb-4">
                                <span className="bg-gradient-to-r from-[#B08D8D] via-[#C29F95] to-[#8A6A6A] bg-clip-text text-transparent drop-shadow-sm">
                                    {heroTitle}
                                </span>
                            </h1>

                            <p className="text-[#1A1A1A] text-2xl md:text-3xl font-light mb-4">
                                {heroSubtitle}
                            </p>

                            <p className="text-[#6B6560] font-mono text-sm tracking-widest uppercase mb-10">
                                CRO - SC 8251
                            </p>

                            <p className="text-[#8A6A6A] mb-12 text-balance text-lg sm:text-xl font-light leading-relaxed max-w-[85%] border-l-4 border-[#B08D8D]/30 pl-4 py-1 italic">
                                "{slogan}"
                            </p>

                            <div className="flex flex-wrap items-center gap-5">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-full bg-[#B08D8D] hover:bg-[#8A6A6A] text-white px-8 h-14 text-base font-medium transition-all shadow-[0_8px_20px_-4px_rgba(176,141,141,0.4)] hover:shadow-[0_12px_24px_-6px_rgba(176,141,141,0.6)] hover:-translate-y-0.5"
                                >
                                    <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer">
                                        Agendar avaliação
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full border-[#E8E4E0] hover:bg-[#F2EFEC] text-[#6B6560] px-8 h-14 text-base font-medium transition-all"
                                >
                                    <a href="#sobre">
                                        Nossa Experiência
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* IMAGE CONTENT - Stylized Transparent PNG */}
                    <div
                        className="relative lg:h-[700px] md:h-[550px] h-[400px] w-full flex justify-center items-end overflow-visible mt-2 sm:mt-8 lg:mt-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
                    >
                        {/* Decorative glow behind the image */}
                        <div className="absolute bottom-10 inset-x-0 mx-auto w-3/4 h-3/4 bg-white/60 blur-[100px] rounded-full z-0 pointer-events-none" />

                        <Image
                            src="/lead-assets/dra-saskia-home.png"
                            alt="Dra. Saskia Barouki"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(26,26,26,0.1)] z-10"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
