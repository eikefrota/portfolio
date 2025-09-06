import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Estilo igual ao LanguageToggle
const buttonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    minWidth: 70,
    height: 26,
    padding: 0,
    marginLeft: 0,
    display: 'flex',
    alignItems: 'center',
};
const innerStyle = (isDarkMode) => ({
    borderRadius: '999px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
    padding: '0.15rem 0.4rem',
    minWidth: 70,
    height: 26,
    fontSize: '0.7rem',
    fontWeight: 'bold',
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    background: 'var(--tw-bg-opacity,1) #f3f4f6', // bg-gray-100
    color: isDarkMode ? '#fff' : '#374151',
});

// Componente para alternar entre tema claro e escuro
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else if (storedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            // Primeira visita: padrão dark
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

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

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'focus:outline-none',
                'transition-all duration-300',
                'rounded-full shadow-sm',
                'bg-gray-100 dark:bg-gray-700',
                'ml-0'
            )}
            aria-label="Alternar tema"
            style={buttonStyle}
        >
            <div
                className={cn(
                    'flex items-center transition-all duration-300 relative justify-center w-full h-full',
                    isDarkMode ? 'text-gray-700 dark:text-white' : 'text-gray-400'
                )}
                style={innerStyle(isDarkMode)}
            >
                {isDarkMode ? (
                    <>
                        <div style={{ position: 'absolute', left: 2, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                            <Moon className="w-4 h-4" style={{ color: '#fff' }} />
                        </div>
                        <span style={{ marginLeft: 24, letterSpacing: 1 }}>DARK</span>
                    </>
                ) : (
                    <>
                        <span style={{ marginRight: 24, letterSpacing: 1 }}>LIGHT</span>
                        <div style={{ position: 'absolute', right: 2, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                            <Sun className="w-4 h-4" style={{ color: '#374151' }} />
                        </div>
                    </>
                )}
            </div>
        </button>
    );
};
