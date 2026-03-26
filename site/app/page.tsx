import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicosSection } from "@/components/ServicosSection";
import { SobreSection } from "@/components/SobreSection";
import { DiferenciaisSection } from "@/components/DiferenciaisSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAF9F7] w-full overflow-x-hidden">
      <Header />
      <Hero />
      <ServicosSection />
      <SobreSection />
      <DiferenciaisSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
