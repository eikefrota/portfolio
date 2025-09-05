// Importa o ícone ArrowDown da biblioteca lucide-react
import { ArrowDown } from "lucide-react";

// Componente principal da seção Hero (destaque)
export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            {/* Container centralizado com o conteúdo principal */}
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    {/* Título animado com nome */}
                    <h1 className="text-4xl md:6-xl font-bold tracking-tight ">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Eike</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Frota</span>
                    </h1>

                    {/* Descrição do desenvolvedor */}
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
                        I create stellar web experiences with modern technologies.
                        Specializing in front-end development, I build interfaces that are
                        both beautiful and functional.
                    </p>

                    {/* Botão para visualizar projetos */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Ícone e texto de rolagem animados na parte inferior */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground font-bold">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}