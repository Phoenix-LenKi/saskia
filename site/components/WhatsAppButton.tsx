"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { primaryCtaHref } from "@/lib/content";

export function WhatsAppButton() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
        >
            <a
                href={primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:scale-110 transition-transform duration-300 relative group"
                aria-label="Falar conosco pelo WhatsApp"
            >
                <FaWhatsapp size={32} />

                {/* Helper tooltip */}
                <span className="absolute right-full mr-4 bg-white text-[#1A1A1A] text-sm font-medium py-2 px-4 rounded-xl shadow-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
                    Agende sua avaliação
                </span>
            </a>
        </motion.div>
    );
}
