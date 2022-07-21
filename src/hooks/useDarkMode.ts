import { useState, useEffect } from 'react';

interface IUseDarkModeOutput {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const THEME_KEY = 'USE_DARK_MODE_?';

const useDarkMode = (): IUseDarkModeOutput => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    useEffect(() => {
        if (!localStorage.getItem(THEME_KEY)) {
            const theme = themePreference();

            setIsDarkMode(theme);
            localStorage.setItem(THEME_KEY, JSON.stringify(theme));

            return;
        }

        if (localStorage.getItem(THEME_KEY) === 'true') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);

            return;
        } else if (localStorage.getItem(THEME_KEY) === 'false') {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);

            return;
        }

        setIsDarkMode(true);
    }, []);

    useEffect(() => {
        isDarkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
        localStorage.setItem(THEME_KEY, JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return {
        isDarkMode,
        toggleDarkMode: () => setIsDarkMode((prevState) => !prevState),
    };
};

function themePreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default useDarkMode;
