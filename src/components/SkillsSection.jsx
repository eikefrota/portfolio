// Importa o hook useState do React para gerenciar o estado local
import { useState } from "react";
// Importa a função utilitária cn para manipulação de classes CSS
import { cn } from "@/lib/utils";

// Lista de habilidades, cada uma com nome, nível de proficiência e categoria
const skills = [
    // Frontend
    { name: "HTML5", level: 90, category: "frontend" },
    { name: "CSS3", level: 85, category: "frontend" },
    { name: "TailwindCSS", level: 85, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "ReactJS", level: 80, category: "frontend" },
    { name: "React Native", level: 75, category: "frontend" },
    { name: "Vite", level: 70, category: "frontend" },

    // Backend
    { name: "Python", level: 75, category: "backend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Django", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 75, category: "backend" },
    { name: "MySQL", level: 70, category: "backend" },
    { name: "MongoDB", level: 65, category: "backend" },

    // Ferramentas
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Expo", level: 70, category: "tools" },
    { name: "Swagger", level: 65, category: "tools" },
    { name: "Figma", level: 80, category: "tools" },
    { name: "Canva", level: 75, category: "tools" },
];

// Categorias disponíveis para filtragem
const categories = ["all", "frontend", "backend", "tools"];

// Componente principal da seção de habilidades
export const SkillsSection = () => {
    // Estado para controlar a categoria ativa
    const [activeCategory, setActiveCategory] = useState("all");

    // Filtra as habilidades de acordo com a categoria selecionada
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/* Título da seção */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                {/* Botões de filtro de categoria */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid de habilidades */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            {/* Nome da habilidade */}
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            {/* Barra de progresso */}
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            {/* Porcentagem da habilidade */}
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
