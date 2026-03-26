import Link from "next/link";
import { companyName, phones, addresses, socials } from "@/lib/content";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1A1A1A] text-[#FAF9F7] pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* BRAND */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="block font-heading font-medium text-xl leading-none tracking-tight text-white mb-1">
                                Dra. Saskia Barouki
                            </span>
                            <span className="block text-xs text-[#B08D8D] uppercase tracking-widest">
                                Ortodontia e Alinhadores Invisíveis
                            </span>
                        </Link>
                        <p className="text-[#E8E4E0]/60 text-sm leading-relaxed max-w-xs font-light">
                            Transformando sorrisos em Florianópolis com tecnologia, estética
                            e um atendimento focado na sua saúde e bem-estar.
                        </p>
                    </div>

                    {/* EXPLORE */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-heading font-semibold mb-6 tracking-wide text-sm uppercase">Navegação</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-[#E8E4E0]/70 hover:text-white transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre" className="text-[#E8E4E0]/70 hover:text-white transition-colors text-sm">
                                    Sobre a Dra.
                                </Link>
                            </li>
                            <li>
                                <Link href="/invisalign" className="text-[#E8E4E0]/70 hover:text-white transition-colors text-sm">
                                    Invisalign®
                                </Link>
                            </li>
                            <li>
                                <Link href="/limpeza" className="text-[#E8E4E0]/70 hover:text-white transition-colors text-sm">
                                    Limpeza e Profilaxia
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato" className="text-[#E8E4E0]/70 hover:text-white transition-colors text-sm">
                                    Contato e Localização
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-heading font-semibold mb-6 tracking-wide text-sm uppercase">Contato</h4>
                        <ul className="space-y-4 text-sm text-[#E8E4E0]/70">
                            <li>{phones[0]} (WhatsApp)</li>
                            <li>{addresses[0].city} - {addresses[0].state}</li>
                        </ul>
                    </div>

                    {/* SOCIALS */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-heading font-semibold mb-6 tracking-wide text-sm uppercase">Redes Sociais</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#E8E4E0]/70 hover:text-[#B08D8D] transition-colors text-sm inline-flex items-center gap-2"
                                >
                                    Instagram Oficial
                                </a>
                            </li>
                            <li>
                                <a
                                    href={socials.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#E8E4E0]/70 hover:text-[#B08D8D] transition-colors text-sm"
                                >
                                    WhatsApp de Agendamento
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
                    <p>
                        © {new Date().getFullYear()} {companyName}. Todos os
                        direitos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="/politica-de-privacidade"
                            className="hover:text-primary transition-colors"
                        >
                            Política de Privacidade
                        </a>
                        <span className="hidden md:inline">|</span>
                        <a
                            href="https://lenki.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            Desenvolvido por LenKi
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
