"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/content";

export function SobreSection() {
    return (
        <section className="py-24 bg-[#FAF9F7] relative border-t border-[#E8E4E0]">
            {/* Elegant light gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F2EFEC]/50" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-3xl relative shadow-xl ring-1 ring-[#E8E4E0] bg-white">
                            <img
                                src="/lead-assets/dra2.png"
                                alt={about.name}
                                className="absolute inset-0 w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-[2s] ease-out"
                            />
                        </div>
                        {/* Minimalist accent block for light mode */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#B08D8D] rounded-full blur-3xl opacity-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="lg:col-span-7 lg:pl-10"
                    >
                        <h2 className="mb-4 text-4xl lg:text-5xl font-medium text-[#1A1A1A] tracking-tight">Conheça a {about.name}</h2>
                        <p className="text-xl font-medium text-[#B08D8D] mb-8">
                            {about.title}
                        </p>
                        <div className="space-y-6 text-[#6B6560] text-xl font-light leading-relaxed mb-10 max-w-2xl">
                            <p className="leading-snug">
                                "Eu sou a <span className="text-[#B08D8D] font-medium">Dra. Saskia Barouki</span>,<br />
                                mas pode me chamar de Sá!<br />
                                Sou especialista em Ortodontia, Dentística<br />
                                (estética) e minha maior paixão é trabalhar<br />
                                com os alinhadores.<br />
                                Já transformei dezenas de sorrisos utilizando os<br />
                                meus queridinhos <span className="text-[#B08D8D] font-medium">os alinhadores invisíveis.</span>"
                            </p>
                        </div>

                        <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors h-14">
                            <a href="/sobre">Ver perfil completo</a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
