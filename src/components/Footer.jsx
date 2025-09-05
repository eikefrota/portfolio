import { ArrowUp, Linkedin, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-4 px-6 bg-card border-t border-border mt-8 min-h-[68px]">
            <div className="grid grid-cols-3 w-full max-w-7xl mx-auto items-center">
                {/* Esquerda: Copyright */}
                <div className="flex items-center">
                    <p className="text-md font-semibold text-muted-foreground text-left">
                        &copy; {new Date().getFullYear()} <span className="text-primary font-bold">EikeFrota</span>. All rights reserved.
                    </p>
                </div>
                {/* Centro: Seta */}
                <div className="flex justify-center">
                    <a
                        href="#hero"
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-md border border-primary/20 flex items-center justify-center"
                        aria-label="Voltar ao topo"
                        style={{ minWidth: 48, minHeight: 48 }}
                    >
                        <ArrowUp size={26} />
                    </a>
                </div>
                {/* Direita: Redes */}
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
