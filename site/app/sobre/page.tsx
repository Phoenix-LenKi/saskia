import { about, addresses, seoTitle, seoDescription } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTASection } from "@/components/CTASection";

export const metadata = {
    title: `Sobre | ${seoTitle}`,
    description: seoDescription,
};

export default function SobrePage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#FAF9F7] w-full overflow-x-hidden">
            <Header />

            <section className="pt-40 pb-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-secondary mb-12 text-center text-balance">
                            Conheça a {about.name}
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/lead-assets/dra-sobre-nova.png"
                                    alt={about.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="space-y-6 text-muted-foreground text-xl font-light leading-relaxed">
                                <p className="text-2xl font-medium text-primary mb-4">
                                    {about.title}
                                </p>
                                <p className="leading-snug border-l-4 border-[#B08D8D]/30 pl-6 py-2 mb-8 hidden md:block">
                                    "Eu sou a <span className="text-[#B08D8D] font-medium">Dra. Saskia Barouki</span>,<br />
                                    mas pode me chamar de Sá!<br />
                                    Sou especialista em Ortodontia, Dentística<br />
                                    (estética) e minha maior paixão é trabalhar<br />
                                    com os alinhadores.<br />
                                    Já transformei dezenas de sorrisos utilizando os<br />
                                    meus queridinhos <span className="text-[#B08D8D] font-medium">os alinhadores invisíveis.</span>"
                                </p>
                                {/* Mobile version without strict br breaks to prevent weird wrapping */}
                                <p className="leading-relaxed border-l-4 border-[#B08D8D]/30 pl-4 py-1 mb-8 md:hidden">
                                    "Eu sou a <span className="text-[#B08D8D] font-medium">Dra. Saskia Barouki</span>, mas pode me chamar de Sá! Sou especialista em Ortodontia, Dentística (estética) e minha maior paixão é trabalhar com os alinhadores. Já transformei dezenas de sorrisos utilizando os meus queridinhos <span className="text-[#B08D8D] font-medium">os alinhadores invisíveis.</span>"
                                </p>
                                <p>
                                    Acredito em uma odontologia focada no paciente. Cada tratamento é desenhado
                                    individualmente com foco em resultados estéticos duradouros e previsíveis.
                                </p>
                                <p>
                                    Minha abordagem une tecnologia de ponta, como o escaneamento digital e o
                                    plano 3D, a um atendimento humanizado, no coração de {addresses[0].city}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
