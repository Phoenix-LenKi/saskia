// =============================================================================
// content.ts
// Centralização de textos, contatos e assets (Single Source of Truth).
// =============================================================================

export const companyName = "Dra. Saskia Barouki";
export const slogan = "A vida passa muito rápido para você não vivê-la com seu melhor sorriso.";

// ---------------------------------------------------------------------------
// 2) Título e Hero
// ---------------------------------------------------------------------------
export const heroTitle = "Dra. Saskia Barouki";
export const heroSubtitle = "Especialista em Ortodontia e Dentística Estética.";
export const primaryCtaLabel = "Agendar Avaliação";
export const primaryCtaHref = "https://wa.me/5548998437356";
export const secondaryCtaLabel = "Nossa Experiência";
export const secondaryCtaHref = "#experiencia";

// ---------------------------------------------------------------------------
// 3) Sobre
// ---------------------------------------------------------------------------
export const about = {
    name: "Dra. Saskia Barouki",
    title: "Especialista em Ortodontia e Dentística Estética",
    bio: "CRO - SC 8251. Com anos de experiência e um olhar refinado, a Dra. Saskia foca em devolver não só a função mastigatória, mas a autoestima e a segurança de sorrir, sempre com uma abordagem estética avançada e conservadora.",
    imagePath: "/lead-assets/dra-saskia-2.png",
};

// ---------------------------------------------------------------------------
// 4) Serviços
// ---------------------------------------------------------------------------
export interface Service {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    url: string;
}

export const services: Service[] = [
    {
        id: "invisalign",
        name: "Invisalign®",
        description: "O sistema de alinhadores transparentes mais avançado do mundo. Feitos sob medida, oferecem conforto e previsibilidade tecnológica com o material SmartTrack®.",
        imagePath: "/lead-assets/alinhadores-invisalign.png",
        url: "/invisalign"
    },
    {
        id: "lentes",
        name: "Lentes de Porcelana",
        description: "Finas camadas personalizadas para corrigir imperfeições e criar um sorriso radiante e natural. Duradouras e esteticamente incríveis.",
        imagePath: "/lead-assets/lente-de-contato-dental.jpg",
        url: "/tratamentos#lentes"
    },
    {
        id: "clareamento",
        name: "Clareamento Dental",
        description: "Sorria com confiança. Remova manchas e recupere o brilho dos seus dentes. Resultados visíveis e duradouros.",
        imagePath: "/lead-assets/sorriso.jpg",
        url: "/tratamentos#clareamento"
    },
    {
        id: "limpeza",
        name: "Limpeza Dental",
        description: "A limpeza dental possibilita remover placas bacterianas, avaliar risco de cárie e obter polimento nos dentes e desinflamar o tecido gengival.",
        imagePath: "/lead-assets/lentes.png",
        url: "/tratamentos#limpeza"
    }
];

// ---------------------------------------------------------------------------
// 5) Diferenciais (Experiência WOW)
// ---------------------------------------------------------------------------
export const differentials = [
    {
        id: "escaneamento",
        title: "Escaneamento Digital",
        description: "Tecnologia que permite identificar cáries não visíveis no raio-X, além de criar um modelo digital 3D preciso dos seus dentes."
    },
    {
        id: "experiencia-wow",
        title: "Experiência WOW",
        description: "Aqui você não fará uma simples avaliação, você terá uma verdadeira experiência diferenciada focada em excelência."
    },
    {
        id: "premiacoes",
        title: "Premiações na Jornada",
        description: "Nossos troféus são uma prova tangível da excelência em atendimento e representam a satisfação e confiança dos pacientes."
    },
    {
        id: "planejamento",
        title: "Planejamento 3D",
        description: "Previsibilidade total. Você consegue visualizar o resultado do tratamento estético ou ortodôntico antes mesmo dele começar."
    }
];

// ---------------------------------------------------------------------------
// 6) Endereços
// ---------------------------------------------------------------------------
export const addresses = [
    {
        street: "Av. Mauro Ramos, 1861. Sala 904.",
        city: "Florianópolis",
        state: "SC",
        zipCode: "88020-300",
        instruction: "Centro (ao lado do shopping Beiramar).",
    },
];

// ---------------------------------------------------------------------------
// 7) Telefones / WhatsApp / Email
// ---------------------------------------------------------------------------
export const phones = ["(48) 99843-7356"];
export const email = "doutorasaskia@hotmail.com";

// ---------------------------------------------------------------------------
// 8) Redes Sociais
// ---------------------------------------------------------------------------
export const socials = {
    instagram: "https://instagram.com/dra_saskia",
    facebook: "",
    whatsapp: "https://wa.me/5548998437356",
};

// ---------------------------------------------------------------------------
// 9) Metadados CEO / SEO globais
// ---------------------------------------------------------------------------
export const seoTitle = "Dra. Saskia Barouki | Especialista em Ortodontia";
export const seoDescription =
    "A vida passa muito rápido para você não vivê-la com seu melhor sorriso. Especialista em Ortodontia e Dentística Estética. Florianópolis/SC.";

// ---------------------------------------------------------------------------
// 10) Horários de Funcionamento
// ---------------------------------------------------------------------------
export const businessHours = "Seg a Sexta das 08hs - 20hs";

// ---------------------------------------------------------------------------
// 11) Assinatura de Desenvolvimento
// ---------------------------------------------------------------------------
export const developer = {
    name: "LenKi",
    url: "https://lenki.com.br"
};
