// Importa o hook useState do React para gerenciar o estado local
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language.jsx";
import { translations } from "@/lib/translations";
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
const categories = ["skills_all", "skills_frontend", "skills_backend", "skills_tools"];

// Componente principal da seção de habilidades
export const SkillsSection = () => {
    const { language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("skills_all");
    const filteredSkills = skills.filter(
        (skill) =>
            activeCategory === "skills_all" ||
            skill.category === activeCategory.replace("skills_", "")
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {translations[language].skills_title}
                </h2>
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
                            {translations[language][category]}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
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
