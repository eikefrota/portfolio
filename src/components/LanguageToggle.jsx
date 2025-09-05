import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language.jsx';
import { cn } from '@/lib/utils';

// SVGs inline para as bandeiras
const FlagBR = () => (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#09B14A" />
        <polygon points="16,6 28,16 16,26 4,16" fill="#FFDF00" />
        <circle cx="16" cy="16" r="5" fill="#3E4095" />
        <path d="M12.5 16c2.5-2 7-2 9 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
);

const FlagUS = () => (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#fff" />
        <rect y="4" width="32" height="3" fill="#B22234" />
        <rect y="10" width="32" height="3" fill="#B22234" />
        <rect y="16" width="32" height="3" fill="#B22234" />
        <rect y="22" width="32" height="3" fill="#B22234" />
        <rect y="28" width="32" height="3" fill="#B22234" />
        <rect width="13" height="13" fill="#3C3B6E" />
        <g fill="#fff">
            <circle cx="2" cy="2" r="1" />
            <circle cx="6" cy="2" r="1" />
            <circle cx="10" cy="2" r="1" />
            <circle cx="4" cy="4" r="1" />
            <circle cx="8" cy="4" r="1" />
            <circle cx="2" cy="6" r="1" />
            <circle cx="6" cy="6" r="1" />
            <circle cx="10" cy="6" r="1" />
            <circle cx="4" cy="8" r="1" />
            <circle cx="8" cy="8" r="1" />
            <circle cx="2" cy="10" r="1" />
            <circle cx="6" cy="10" r="1" />
            <circle cx="10" cy="10" r="1" />
        </g>
    </svg>
);

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();
    const isPT = language === 'pt';
    // Detecta tema escuro/claro
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const checkDark = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };
        checkDark();
        window.addEventListener('storage', checkDark);
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => {
            window.removeEventListener('storage', checkDark);
            observer.disconnect();
        };
    }, []);
    // Mesmas dimensões e padding do ThemeToggle
    const buttonStyle = {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        minWidth: 70,
        height: 26,
        padding: 0,
        marginLeft: 8,
        display: 'flex',
        alignItems: 'center',
    };
    const innerStyle = {
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
    };
    return (
        <button
            onClick={toggleLanguage}
            aria-label="Trocar idioma"
            style={buttonStyle}
            className={cn(
                'focus:outline-none',
                'transition-all duration-300',
                'rounded-full shadow-sm',
                'bg-gray-100 dark:bg-gray-700',
                'ml-2'
            )}
        >
            <div
                className={cn(
                    'flex items-center transition-all duration-300 relative justify-center w-full h-full',
                    isPT ? 'text-gray-700 dark:text-white' : 'text-gray-400'
                )}
                style={innerStyle}
            >
                {isPT ? (
                    <>
                        <div style={{ position: 'absolute', left: 2, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                            <FlagBR />
                        </div>
                        <span style={{ marginLeft: 24, letterSpacing: 1 }}>PT</span>
                    </>
                ) : (
                    <>
                        <span style={{ marginRight: 24, letterSpacing: 1 }}>EN</span>
                        <div style={{ position: 'absolute', right: 2, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                            <FlagUS />
                        </div>
                    </>
                )}
            </div>
        </button>
    );
}
