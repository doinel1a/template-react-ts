import { ReactNode, createContext, useContext, useState } from 'react';

import useIsMobile from '../hooks/useIsMobile';
import useDarkMode from '../hooks/useDarkMode';

interface IForm {
    name: string;
    surname: string;
    salary: string;
    currency: string;
}
interface IContextProviderProps {
    isMobile: boolean;
    isDarkMode: boolean;
    toggleDarkMode: any;
    form: IForm;
    setForm: any;
}

const defaultProps: IContextProviderProps = {
    isMobile: false,
    isDarkMode: true,
    toggleDarkMode: null,
    form: {
        name: '',
        surname: '',
        salary: '',
        currency: '',
    },
    setForm: null,
};

const StateContext: React.Context<IContextProviderProps> =
    createContext<IContextProviderProps>(defaultProps);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const { isMobile } = useIsMobile();
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [form, setForm] = useState<IForm>({
        name: 'Doinel',
        surname: 'Atanasiu',
        salary: '2500',
        currency: '€',
    });

    return (
        <StateContext.Provider
            value={{
                isMobile,
                isDarkMode,
                toggleDarkMode,
                form,
                setForm,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

const useStateContext = () => useContext(StateContext);
export default useStateContext;
