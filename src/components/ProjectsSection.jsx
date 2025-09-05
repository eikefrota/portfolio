import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/hooks/use-language.jsx";
import { translations } from "@/lib/translations";

const projects = [
    {
        id: 1,
        title: "QuizDev",
        description: "Aplicativo de quiz interativo com o objetivo de unir diversão e aprendizado, por meio de quizzes sobre diversos temas.",
        image: "/projects/quizdev.png",
        tags: ["React Native", "JavaScript", "Node.js", "PostgreSQL", "Express", "Expo"],
        demoUrl: "#",
        githubUrl: "https://github.com/eikefrota/quiz-dev",
    },
    {
        id: 2,
        title: "Frota's Gourmet",
        description:
            "Um cardápio web responsivo que facilita pedidos online, oferecendo uma experiência intuitiva e ágil para o usuário.",
        image: "/projects/frotasgourmet.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/eikefrota/frota-gourmet",
    },
    {
        id: 3,
        title: "Portfolio",
        description:
            "Meu portfólio pessoal, desenvolvido para apresentar meus projetos, habilidades e experiências de forma clara e interativa, com navegação intuitiva e design responsivo.",
        image: "/projects/portfolio.png",
        tags: ["React", "Vite", "JavaScript", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "#",
    }
];

export const ProjectsSection = () => {
    const { language } = useLanguage();
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {translations[language].projects_title}
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {translations[language].projects_desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/eikefrota"
                    >
                        {translations[language].projects_btn} <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
