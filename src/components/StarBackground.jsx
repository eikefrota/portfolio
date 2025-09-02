import { useEffect, useState } from "react";

// Componente que renderiza o fundo animado de estrelas e meteoros
export const StarBackground = () => {
    // Estado para armazenar as estrelas
    const [stars, setStars] = useState([]);
    // Estado para armazenar os meteoros
    const [meteors, setMeteors] = useState([]);

    // Efeito para gerar estrelas e meteoros ao montar o componente
    useEffect(() => {
        generateStars();
        generateMeteors();

        // Atualiza as estrelas ao redimensionar a janela
        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        // Limpa o event listener ao desmontar
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Função para gerar estrelas aleatórias
    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    // Função para gerar meteoros aleatórios
    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newMeteors);
    };

    // Renderiza as estrelas e meteoros na tela
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Renderiza cada estrela */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {/* Renderiza cada meteoro */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};
