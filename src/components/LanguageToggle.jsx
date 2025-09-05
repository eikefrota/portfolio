import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language.jsx';
import { cn } from '@/lib/utils';
import ReactCountryFlag from 'react-country-flag';

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
                            <ReactCountryFlag
                                countryCode="BR"
                                svg
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '100%',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.10)'
                                }}
                                title="Português"
                            />
                        </div>
                        <span style={{ marginLeft: 24, letterSpacing: 1 }}>PT</span>
                    </>
                ) : (
                    <>
                        <span style={{ marginRight: 24, letterSpacing: 1 }}>EN</span>
                        <div style={{ position: 'absolute', right: 2, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
                            <ReactCountryFlag
                                countryCode="US"
                                svg
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '100%',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.10)'
                                }}
                                title="English"
                            />
                        </div>
                    </>
                )}
            </div>
        </button>
    );
}
