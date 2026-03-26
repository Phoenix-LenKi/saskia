import { seoTitle, seoDescription, primaryCtaHref, services } from "@/lib/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: `Tratamentos | ${seoTitle}`,
    description: seoDescription,
};

export default function TratamentosPage() {
    // Excluir invisalign desta listagem, pois tem página própria
    const generalServices = services.filter(s => s.id !== "invisalign");

    return (
        <main className="flex min-h-screen flex-col bg-[#FAF9F7] w-full overflow-x-hidden">
            <Header />

            <section className="pt-40 pb-20 relative">
                {/* Premium soft background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F2EFEC] to-[#FAF9F7] opacity-80" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B08D8D]/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                            Nossas Especialidades
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-medium text-[#1A1A1A] leading-[1.1]">
                            Tratamentos de Excelência
                        </h1>
                        <p className="mt-6 text-[#6B6560] text-xl font-light max-w-2xl mx-auto">
                            Odontologia focada na sua saúde, função e estética. Conheça nossos principais procedimentos para transformar o seu sorriso.
                        </p>
                    </div>

                    <div className="space-y-20 max-w-6xl mx-auto">
                        {generalServices.map((service, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={service.id}
                                    id={service.id}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center bg-white/40 p-6 md:p-12 rounded-[2.5rem] shadow-sm border border-[#E8E4E0] backdrop-blur-md relative scroll-mt-32`}
                                >
                                    {/* Text Content */}
                                    <div className="flex-1 space-y-6">
                                        <h2 className="text-3xl md:text-4xl font-heading font-medium text-secondary">
                                            {service.name}
                                        </h2>
                                        <div className="w-12 h-1 bg-[#B08D8D] rounded-full" />
                                        <p className="text-[#6B6560] text-lg md:text-xl font-light leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="pt-4">
                                            <Button asChild size="lg" className="rounded-full bg-[#B08D8D] hover:bg-[#8A6A6A] text-white text-lg px-8 h-14 shadow-[0_8px_20px_-4px_rgba(176,141,141,0.3)] transition-all transform hover:-translate-y-1">
                                                <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer">
                                                    Agendar Avaliação
                                                </a>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Image Content */}
                                    <div className="flex-1 relative w-full h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-[#E8E4E0]">
                                        <img
                                            src={service.imagePath}
                                            alt={service.name}
                                            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-[1.5s] ease-out"
                                        />
                                        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] rounded-[2rem] pointer-events-none" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
