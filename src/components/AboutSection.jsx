// Importa ícones da biblioteca lucide-react
import { Briefcase, Code, User } from "lucide-react";
import { useLanguage } from "@/hooks/use-language.jsx";
import { translations } from "@/lib/translations";

// Componente principal da seção Sobre (About)
export const AboutSection = () => {
    const { language } = useLanguage();
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {translations[language].about_title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            {translations[language].about_subtitle}
                        </h3>
                        <p className="text-muted-foreground text-justify">
                            {translations[language].about_exp}
                        </p>
                        <p className="text-muted-foreground text-justify">
                            {translations[language].about_passion}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {translations[language].about_btn_contact}
                            </a>
                            <a
                                href=""
                                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                {translations[language].about_btn_cv}
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{translations[language].about_card_web}</h4>
                                    <p className="text-muted-foreground">
                                        {translations[language].about_card_web_desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{translations[language].about_card_ui}</h4>
                                    <p className="text-muted-foreground">
                                        {translations[language].about_card_ui_desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{translations[language].about_card_pm}</h4>
                                    <p className="text-muted-foreground">
                                        {translations[language].about_card_pm_desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
