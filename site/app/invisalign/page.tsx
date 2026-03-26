import { seoTitle, seoDescription, primaryCtaHref } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: `Invisalign® | ${seoTitle}`,
    description: seoDescription,
};

export default function InvisalignPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#FAF9F7] w-full overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative">
                {/* Background light gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F2EFEC] to-[#FAF9F7] opacity-80" />

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                        {/* Image Content - PNG Stylized */}
                        <div className="order-2 lg:order-1 relative flex justify-center items-center h-[500px] lg:h-[650px]">
                            {/* Floating shadow effect matching the shape of the PNG */}
                            <img
                                src="/lead-assets/dra.invisalign.png"
                                alt="Dra. Saskia com Invisalign"
                                className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(176,141,141,0.3)] hover:scale-105 transition-transform duration-[1.5s] ease-out z-10"
                            />
                            {/* Decorative glow behind the image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#B08D8D]/20 to-[#F2EFEC]/50 blur-3xl rounded-full z-0 pointer-events-none scale-90" />
                        </div>

                        {/* Text Content */}
                        <div className="order-1 lg:order-2 space-y-8 bg-white/40 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-[#E8E4E0] backdrop-blur-md">
                            <div className="inline-block px-5 py-2 rounded-full bg-[#B08D8D]/15 text-[#8A6A6A] text-sm font-medium tracking-wide mb-2">
                                Orto Excellence
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-medium text-[#1A1A1A] text-balance leading-[1.1] tracking-tight">
                                Invisalign®: <br />O alinhador mais <span className="text-[#B08D8D] italic font-light">avançado</span> do mundo.
                            </h1>
                            <div className="space-y-6 text-[#6B6560] text-lg lg:text-xl font-light leading-relaxed">
                                <p>
                                    Esqueça os bráquetes e os fios metálicos. O tratamento com Invisalign® utiliza alinhadores
                                    transparentes, feitos sob medida com o exclusivo material SmartTrack®.
                                </p>
                                <p>
                                    Eles são projetados para alinhar seus dentes com previsibilidade clínica absoluta,
                                    movendo cada dente na direção certa e no momento exato prescrito no nosso escaneamento 3D.
                                </p>
                            </div>

                            <div className="pt-8">
                                <Button asChild size="lg" className="rounded-full bg-[#B08D8D] hover:bg-[#8A6A6A] text-white text-lg px-8 h-14 shadow-[0_8px_20px_-4px_rgba(176,141,141,0.3)] transition-all">
                                    <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer">
                                        Agendar meu Escaneamento
                                    </a>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Section - Light Premium */}
            <section className="py-24 bg-white border-y border-[#E8E4E0]">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-medium text-[#1A1A1A] mb-6 tracking-tight">Por que escolher Invisalign® conosco?</h2>
                        <p className="text-[#6B6560] text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Nossa clínica utiliza o protocolo digital completo, desde o escaneamento inicial até o mapeamento absoluto da contenção.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-[#FAF9F7] p-10 rounded-[2rem] border border-[#E8E4E0] shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-medium mb-4 text-[#B08D8D]">Discreto & Confortável</h3>
                            <p className="text-[#6B6560] font-light leading-relaxed">
                                Cortados sob medida para a linha da sua gengiva, garantindo um encaixe perfeito e invisível. Ninguém notará que você está usando.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-[#FAF9F7] p-10 rounded-[2rem] border border-[#E8E4E0] shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-medium mb-4 text-[#B08D8D]">Previsibilidade 3D</h3>
                            <p className="text-[#6B6560] font-light leading-relaxed">
                                Com o escaneamento intraoral, você visualiza o resultado final do seu novo sorriso antes mesmo de colocar o primeiro alinhador.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[#FAF9F7] p-10 rounded-[2rem] border border-[#E8E4E0] shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-medium mb-4 text-[#B08D8D]">Rotina Livre</h3>
                            <p className="text-[#6B6560] font-light leading-relaxed">
                                Removíveis, permitem que você se alimente sem restrições e higienize os dentes normalmente, mantendo a saúde intacta.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section from Official Invisalign */}
            <section className="py-24 bg-[#FAF9F7]">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-[#B08D8D] font-medium tracking-wider uppercase text-sm block mb-4">Dúvidas Frequentes</span>
                        <h2 className="text-4xl font-heading font-medium text-[#1A1A1A] tracking-tight">Tudo sobre o Tratamento</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-[#E8E4E0] shadow-sm">
                            <h3 className="text-lg font-medium text-[#1A1A1A] mb-3">O que é Invisalign?</h3>
                            <p className="text-[#6B6560] font-light leading-relaxed">
                                É a marca de alinhadores transparentes nº 1 em recomendação dos dentistas, com
                                a tecnologia exclusiva SmartTrack que permite um tratamento ortodôntico de altíssima precisão.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-[#E8E4E0] shadow-sm">
                            <h3 className="text-lg font-medium text-[#1A1A1A] mb-3">Quanto tempo demora o tratamento?</h3>
                            <p className="text-[#6B6560] font-light leading-relaxed">
                                Resultados perceptíveis podem iniciar rapidamente. Dependendo da complexidade do seu caso, o tratamento pode ser finalizado em até 6 meses.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-[#E8E4E0] shadow-sm">
                            <h3 className="text-lg font-medium text-[#1A1A1A] mb-3">Quem pode usar Invisalign?</h3>
                            <p className="text-[#6B6560] font-light leading-relaxed">
                                Crianças, adolescentes e adultos. Nossa avaliação detalhada confirmará como a tecnologia se adapta perfeitamente ao seu sorriso.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
