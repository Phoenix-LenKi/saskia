"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { primaryCtaHref, primaryCtaLabel } from "@/lib/content";

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Abstract geometric background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/gradient">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl mx-auto bg-[#F2EFEC] rounded-[2rem] p-10 md:p-16 border border-[#E8E4E0] shadow-sm"
                >
                    <h2 className="text-secondary mb-6 font-medium text-balance">
                        Pronto para transformar seu sorriso?
                    </h2>
                    <p className="text-muted-foreground mb-10 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Cada problema requer uma avaliação individualizada e exclusiva, a fim de que se proponha as
                        melhores técnicas e tecnologias para sua solução. Entre em contato agora e agende uma avaliação.
                    </p>

                    <Button asChild size="lg" className="rounded-full bg-primary hover:bg-[#8A6A6A] text-white text-lg px-10 h-14">
                        <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer">
                            {primaryCtaLabel}
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
