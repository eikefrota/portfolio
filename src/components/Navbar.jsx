// (Removido: importação desnecessária de href do react-router-dom)
// Importa função utilitária para manipulação de classes CSS
import { cn } from "@/lib/utils"
// Importa hooks do React
import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/use-language.jsx";
import { translations } from "../lib/translations";
// Importa ícones do menu
import { X, Menu } from "lucide-react";
// Importa componente de alternância de tema
import { ThemeToggle } from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const navItems = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" }
];

// Componente principal da barra de navegação
export const Navbar = () => {
    const { language } = useLanguage();
    // Estado para controlar se a página foi rolada
    const [isScrolled, setIsScrolled] = useState(false);
    // Estado para controlar se o menu mobile está aberto
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Função para atualizar o estado ao rolar a página
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>

            <div className="container flex items-center justify-between">
                {/* Logo e link para o topo */}
                <div className="flex-1 flex items-center justify-start">
                    <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">EikeFrota</span> Portfolio
                        </span>
                    </a>
                </div>
                {/* Menu centralizado */}
                <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="relative text-foreground/80 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                            {translations[language][item.key]}
                        </a>
                    ))}
                </div>
                {/* Botões à direita */}
                <div className="hidden md:flex flex-1 justify-end items-center space-x-2">
                    <ThemeToggle />
                    <LanguageToggle />
                </div>
                {/* Botão do menu mobile */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {" "}
                </button>
                {/* Menu mobile sobreposto */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-500 md:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto translate-y-0"
                        : "opacity-0 pointer-events-none -translate-y-8"
                )}>
                    <div className="flex flex-col space-y-8 text-xl items-center transition-all duration-500">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                {translations[language][item.key]}
                            </a>
                        ))}
                        <ThemeToggle />
                        <LanguageToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};