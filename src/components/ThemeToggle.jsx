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
                "flex items-center px-2 py-1",
                "focus:outline-none"
            )}
            aria-label="Alternar tema"
            style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
            }}
        >
            <div
                className={cn(
                    "flex items-center transition-all duration-300",
                    isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-400"
                )}
                style={{
                    borderRadius: '999px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    padding: '0.15rem 0.4rem',
                    minWidth: '70px',
                    height: '26px',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    position: 'relative',
                    justifyContent: 'center',
                }}
            >
                {isDarkMode ? (
                    <>
                        <div style={{
                            background: '#fff',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            left: '2px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                        }}>
                            <Moon className="w-4 h-4 text-gray-700" />
                        </div>
                        <span style={{ marginLeft: '24px', color: '#fff', letterSpacing: '1px' }}>DARK</span>
                    </>
                ) : (
                    <>
                        <span style={{ marginRight: '24px', color: '#bbb', letterSpacing: '1px' }}>LIGHT</span>
                        <div style={{
                            background: '#fff',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: '2px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                        }}>
                            <Sun className="w-4 h-4 text-gray-400" />
                        </div>
                    </>
                )}
            </div>
        </button>
    );
};
