// Importa o ícone ArrowDown da biblioteca lucide-react
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/hooks/use-language.jsx";
import { translations } from "@/lib/translations";

// Componente principal da seção Hero (destaque)
export const HeroSection = () => {
    const { language } = useLanguage();
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:6-xl font-bold tracking-tight ">
                        <span className="opacity-0 animate-fade-in">{translations[language].hero_hi}</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> {translations[language].hero_name}</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{translations[language].hero_lastname}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
                        {translations[language].hero_desc}
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <button className="cosmic-button">
                            <a href="#projects">
                                {translations[language].hero_btn}
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground font-bold">{translations[language].hero_scroll}</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}