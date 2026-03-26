"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/content";
import { motionConfig } from "@/lib/brand";

export function ServicosSection() {
    return (
        <section id="servicos" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F2EFEC] -skew-x-12 translate-x-32 hidden lg:block" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={motionConfig.fadeUp}
                    className="max-w-3xl mb-16"
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                        Especialidades
                    </span>
                    <h2 className="text-secondary text-balance">
                        Tratamentos focados em resultados estéticos e funcionais.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Card className="h-full border-[#E8E4E0] shadow-sm hover:shadow-md transition-shadow group bg-white">
                                <CardContent className="p-8 sm:p-12 flex flex-col h-full">
                                    <div className="mb-6 flex flex-col justify-start items-start gap-4">
                                        {service.imagePath && (
                                            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm relative shrink-0">
                                                <img src={service.imagePath} alt={service.name} className="object-cover w-full h-full" />
                                            </div>
                                        )}
                                        <h3 className="text-2xl font-heading font-medium text-secondary">
                                            {service.name}
                                        </h3>
                                    </div>

                                    <p className="text-muted-foreground flex-grow mb-10 text-lg leading-relaxed">
                                        {service.description}
                                    </p>

                                    <Button
                                        variant="ghost"
                                        className="w-fit p-0 h-auto font-medium text-secondary hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
                                        asChild
                                    >
                                        <a href={service.url}>
                                            Saber mais <ArrowRight className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
