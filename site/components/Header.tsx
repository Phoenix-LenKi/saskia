"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyName, primaryCtaLabel, primaryCtaHref } from "@/lib/content";
import { logoPath } from "@/lib/brand";

const links = [
    { name: "Home", href: "/" },
    { name: "Invisalign®", href: "/invisalign" },
    { name: "Tratamentos", href: "/tratamentos" },
    { name: "Sobre a Dra.", href: "/sobre" },
    { name: "Contato", href: "/contato" },
];

export function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* LOGO COMPLETO */}
                <Link href="/" className="flex items-center z-50 relative py-2">
                    <img
                        src={logoPath}
                        alt={companyName}
                        className="h-16 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transition-all duration-300"
                    />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-secondary"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button asChild className="rounded-full px-6 bg-primary hover:bg-[#8A6A6A] text-white">
                        <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer">
                            {primaryCtaLabel}
                        </a>
                    </Button>
                </nav>

                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden z-50 relative p-2 text-secondary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* MOBILE OVERLAY MENU */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 top-0 pt-24 bg-white z-40 flex flex-col px-6"
                        >
                            <ul className="flex flex-col gap-6 mt-8">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`text-2xl font-heading font-light ${pathname === link.href ? "text-primary" : "text-secondary"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-12">
                                <Button
                                    asChild
                                    className="w-full rounded-full py-6 text-lg bg-primary hover:bg-[#8A6A6A] text-white"
                                >
                                    <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer">
                                        {primaryCtaLabel}
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
