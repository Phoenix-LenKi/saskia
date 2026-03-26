"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { differentials } from "@/lib/content";

export function DiferenciaisSection() {
    return (
        <section className="py-24 bg-[#FAF9F7]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-secondary mb-6 text-balance"
                    >
                        Por que escolher a Dra. Saskia Barouki?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground"
                    >
                        Experiência, tecnologia e foco no paciente para oferecer um sorriso
                        alinhado e saudável com o máximo de conforto.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentials.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl border border-[#E8E4E0] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                        >
                            <div className="w-12 h-12 bg-[#B08D8D]/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-xl font-heading font-medium text-secondary mb-3">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground text-[15px] leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
