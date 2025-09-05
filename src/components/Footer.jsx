import { ArrowUp, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language.jsx";
import { translations } from "@/lib/translations";

export const Footer = () => {
    const { language } = useLanguage();
    return (
        <footer className="py-4 px-6 bg-card border-t border-border mt-8 min-h-[68px]">
            <div className="grid grid-cols-3 w-full max-w-7xl mx-auto items-center">
                <div className="flex items-center">
                    <p className="text-md font-semibold text-muted-foreground text-left">
                        &copy; {new Date().getFullYear()} <span className="text-primary font-bold">EikeFrota</span>. {translations[language].footer_rights}
                    </p>
                </div>
                <div className="flex justify-center">
                    <a
                        href="#hero"
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-md border border-primary/20 flex items-center justify-center"
                        aria-label={translations[language].footer_top}
                        style={{ minWidth: 48, minHeight: 48 }}
                    >
                        <ArrowUp size={26} />
                    </a>
                </div>
                <div className="flex justify-end items-center gap-3">
                    <a href="https://linkedin.com/in/eikefrota" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                        <Linkedin size={26} />
                    </a>
                    <a href="mailto:eikefrota@gmail.com" aria-label="Email" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                        <Mail size={26} />
                    </a>
                    <a href="https://linkedin.com/in/eikefrota" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                        <MessageCircle size={26} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
