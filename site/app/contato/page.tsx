import { companyName, addresses, phones, email, socials, seoTitle, seoDescription } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
    title: `Contato | ${seoTitle}`,
    description: seoDescription,
};

export default function ContatoPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#FAF9F7] w-full overflow-x-hidden">
            <Header />

            <section className="pt-40 pb-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#B08D8D]/10 text-[#B08D8D] text-sm font-medium tracking-wide mb-4">
                            Fale Conosco
                        </div>
                        <h1 className="text-4xl md:text-5xl font-heading font-medium text-secondary">
                            Estamos prontos para atender você
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Infos */}
                        <div className="space-y-8 bg-[#F2EFEC] p-10 rounded-3xl shadow-sm border border-[#E8E4E0]">
                            <h2 className="text-2xl font-heading font-medium text-secondary mb-8">Informações de Contato</h2>

                            <div className="flex gap-4 items-start pb-6 border-b border-black/5">
                                <div className="p-3 bg-white rounded-xl shadow-sm">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-secondary font-medium mb-1">Nosso Endereço</h3>
                                    <p className="text-muted-foreground font-light leading-relaxed">
                                        {addresses[0]?.street}<br />
                                        {addresses[0]?.city} - {addresses[0]?.state}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start pb-6 border-b border-black/5">
                                <div className="p-3 bg-white rounded-xl shadow-sm">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-secondary font-medium mb-1">WhatsApp & Telefone</h3>
                                    <a href={socials?.whatsapp} target="_blank" rel="noreferrer" className="text-muted-foreground font-light hover:text-primary transition-colors block">
                                        {phones[0]}
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2007/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-secondary font-medium mb-1">Instagram</h3>
                                    <a href="https://instagram.com/dra_saskia" target="_blank" rel="noreferrer" className="text-muted-foreground font-light hover:text-primary transition-colors block">
                                        @dra_saskia
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl bg-white h-[450px] lg:h-full min-h-[450px] relative border border-[#E8E4E0] filter grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://maps.google.com/maps?q=Saskia%20Barouki%20%7C%20Dentista%20Florian%C3%B3polis&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
