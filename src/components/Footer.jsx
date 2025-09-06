import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdArrowUpward } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/hooks/use-language.jsx";
import { translations } from "@/lib/translations";

export const Footer = () => {
    const { language } = useLanguage();
    return (
        <footer className="py-4 px-6 bg-card border-t border-border mt-8 min-h-[68px]">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto items-center gap-4 md:gap-0">
                <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                    <p className="text-md font-semibold text-muted-foreground text-center md:text-left">
                        &copy; {new Date().getFullYear()} <span className="text-primary font-bold">EikeFrota</span>. {translations[language].footer_rights}
                    </p>
                </div>
                <div className="flex justify-center mb-2 md:mb-0">
                    <a
                        href="#hero"
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-md border border-primary/20 flex items-center justify-center"
                        aria-label={translations[language].footer_top}
                        style={{ minWidth: 48, minHeight: 48 }}
                    >
                        <MdArrowUpward size={26} />
                    </a>
                </div>
                <div className="flex justify-center md:justify-end items-center gap-3">
                    <a href="https://linkedin.com/in/eikefrota" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                        <FaLinkedin size={26} />
                    </a>
                    <a href="mailto:eikefrota@gmail.com" aria-label="Email" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                        <MdEmail size={26} />
                    </a>
                    <a href="https://wa.me/5585999062339" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                        <FaWhatsapp size={26} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
