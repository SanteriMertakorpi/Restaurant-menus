import React, { createContext, ReactNode, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
type Theme = 'light' | 'dark';
type Language = 'fi' | 'en';
type ThemContextType = {
    theme: Theme;
    toggleTheme: () => void;
    language: Language;
    changeLanguage: (value:Language) => void;
};

const ThemeContext = createContext<ThemContextType | undefined>(undefined);

export const ThemeProvider = ({children} : { children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(useColorScheme() === 'dark' ? 'dark' : 'light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    const [language, setLanguage] = useState<Language>('fi');

    const changeLanguage = (value:Language) => {
        setLanguage(value);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, language, changeLanguage}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}