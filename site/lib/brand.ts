// =============================================================================
// brand.ts — Saskia Barouki | Sistema Visual da Marca
// Source: CSS vars extraídas do site Wix original + direção editorial
// Skill dependency: @[skills/theme-factory] + @[skills/frontend-design]
// =============================================================================

export const logoPath = "/lead-assets/logo.png";

// ─── Typography ───────────────────────────────────────────────────────────────
// Original site used: Poppins (headings) + DIN Next W01 Light (body)
// DIN Next not available on Google Fonts → substitute: DM Sans (clean, precise)
// Poppins preserved for headings — matches original identity
export const fontHeading = "Poppins"; // Google Fonts
export const fontBody = "DM Sans";   // Google Fonts — clean-tech alternative to DIN Next

// ─── Tone & Direction ─────────────────────────────────────────────────────────
// Subnicho: Ortodontia / Invisalign
// Direction: clean-tech + editorial + refinado
// Reference: Linear, Arbor Dental NYC, Nova Dental Care
export const tone = "premium" as const;
export const nicheDirection = "orthodontics-invisalign" as const;

// ─── Colors ───────────────────────────────────────────────────────────────────
// Extracted from Wix CSS variables (color_11 = white, color_15 = dark)
// Brand signature: offwhite backgrounds + deep charcoal + warm rose accent
export const brandColors = {
    primary: "#B08D8D",       // Warm rose — from Wix monogram/brand palette
    secondary: "#1A1A1A",     // Deep charcoal — texto principal
    background: "#FAF9F7",    // Offwhite warm — superfície principal
    surface: "#FFFFFF",       // Branco puro — cards, modais
    surfaceAlt: "#F2EFEC",    // Offwhite alternado — seções alternadas
    text: "#1A1A1A",          // Charcoal escuro — legibilidade máxima
    muted: "#6B6560",         // Warm gray — subtítulos, labels
    border: "#E8E4E0",        // Border sutil
    accent: "#B08D8D",        // Mesmo que primary — botão, destaque
    accentDark: "#8A6A6A",    // Hover do accent
    white: "#FFFFFF",
};

export const originalContrast = "light";

// ─── Radius ───────────────────────────────────────────────────────────────────
export const radius = {
    sm: "4px",
    md: "8px",
    lg: "16px",
    pill: "9999px",
    full: "50%",
};

// ─── Shadows ──────────────────────────────────────────────────────────────────
export const shadowStyle = {
    sm: "0 1px 3px rgba(0,0,0,0.06)",
    md: "0 4px 16px rgba(0,0,0,0.08)",
    lg: "0 12px 40px rgba(0,0,0,0.10)",
    card: "0 2px 12px rgba(176,141,141,0.10)",
};

// ─── Button Style ─────────────────────────────────────────────────────────────
export const buttonStyle = {
    primary: {
        bg: brandColors.accent,
        text: "#FFFFFF",
        hoverBg: brandColors.accentDark,
        radius: radius.pill,
        padding: "14px 32px",
        fontWeight: "500",
        letterSpacing: "0.02em",
    },
    outline: {
        bg: "transparent",
        text: brandColors.secondary,
        border: `1.5px solid ${brandColors.secondary}`,
        hoverBg: brandColors.secondary,
        hoverText: "#FFFFFF",
    },
};

// ─── Card Style ───────────────────────────────────────────────────────────────
export const cardStyle = {
    bg: brandColors.surface,
    border: `1px solid ${brandColors.border}`,
    shadow: shadowStyle.card,
    radius: radius.md,
};

// ─── Hero Style ───────────────────────────────────────────────────────────────
export const heroStyle = {
    layout: "split" as const, // Imagem à direita, texto à esquerda
    bgColor: brandColors.background,
    overlayColor: "rgba(26, 26, 26, 0.45)",
    textColor: brandColors.surface,
};

// ─── Section Density ──────────────────────────────────────────────────────────
export const sectionDensity = "comfortable" as const; // Generoso espaçamento

// ─── Motion Config (Framer Motion) ────────────────────────────────────────────
// Skill: @[skills/frontend-design] → "Use Motion library for React"
// Direction: refinado, preciso, clean-tech — sem exagero
export const motionLevel = "refined" as const;

export const motionSources = ["framer-motion"];

// Transições e animações premium — conforme requisito do usuário
export const motionConfig: any = {
    // Fade-up: usado em seções ao entrar no viewport
    fadeUp: {
        hidden: { opacity: 0, y: 32 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
    },
    // Fade-in: elementos secundários
    fadeIn: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    },
    // Stagger container para listas
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.10,
                delayChildren: 0.1,
            },
        },
    },
    // Slide-in horizontal (hero text)
    slideInLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    },
    // Scale-in para cards
    scaleIn: {
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
    },
    // Duração base de transições de hover
    hoverTransition: { duration: 0.25, ease: "easeOut" },
};
