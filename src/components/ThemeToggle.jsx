import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Componente para alternar entre tema claro e escuro
export const ThemeToggle = () => {
    // Estado para controlar se está no modo escuro
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Efeito para verificar o tema salvo no localStorage ao montar
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    // Função para alternar o tema
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    // Renderiza o botão de alternância de tema
    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outlin-hidden"
            )}
        >
            {/* Ícone muda conforme o tema */}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};
