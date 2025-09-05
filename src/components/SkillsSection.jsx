// Importa o hook useState do React para gerenciar o estado local
import { useState } from "react";
import { useLanguage } from "@/hooks/use-language.jsx";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";
// Ícones das skills
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiDjango, SiPostgresql, SiMysql, SiMongodb, SiExpo, SiSwagger, SiCanva } from "react-icons/si";

// Lista de habilidades com ícones
const skills = [
    // Frontend
    { name: "HTML5", icon: FaHtml5, category: "frontend" },
    { name: "CSS3", icon: FaCss3Alt, category: "frontend" },
    { name: "TailwindCSS", icon: SiTailwindcss, category: "frontend" },
    { name: "JavaScript", icon: FaJs, category: "frontend" },
    { name: "ReactJS", icon: FaReact, category: "frontend" },
    { name: "React Native", icon: FaReact, category: "frontend" },
    { name: "Vite", icon: SiVite, category: "frontend" },

    // Backend
    { name: "Python", icon: FaPython, category: "backend" },
    { name: "Node.js", icon: FaNodeJs, category: "backend" },
    { name: "Django", icon: SiDjango, category: "backend" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "backend" },
    { name: "MySQL", icon: SiMysql, category: "backend" },
    { name: "MongoDB", icon: SiMongodb, category: "backend" },

    // Ferramentas
    { name: "Git/GitHub", icon: FaGitAlt, category: "tools" },
    { name: "Docker", icon: FaDocker, category: "tools" },
    { name: "Expo", icon: SiExpo, category: "tools" },
    { name: "Swagger", icon: SiSwagger, category: "tools" },
    { name: "Figma", icon: FaFigma, category: "tools" },
    { name: "Canva", icon: SiCanva, category: "tools" },
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                    {filteredSkills.map((skill, key) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={key}
                                className="group bg-background/80 border border-primary/10 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:bg-primary/10 cursor-pointer relative overflow-hidden w-32 h-36 md:w-36 md:h-40"
                                title={skill.name}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-primary/30 to-secondary/30 pointer-events-none" />
                                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                                    <Icon className="w-full h-full text-primary drop-shadow-lg transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110" />
                                </div>
                                <span className="text-base text-center mt-1 font-semibold text-foreground drop-shadow-sm group-hover:text-primary">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
