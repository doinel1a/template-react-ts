import { useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

import useStateContext from '../context/ContextProvider';

import Logo from './Logo';
import ButtonIcon from './Buttons/ButtonIcon';
import Dropdown from './Dropdown';

const Header: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useStateContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className='header'>
            <div className='h-full container flex items-center'>
                <nav className='mr-auto'>
                    <Logo
                        text='<D1A />'
                        title='Homepage'
                        ariaLabel='Homepage'
                    />
                </nav>
                <div className='w-28 flex justify-between'>
                    <ButtonIcon
                        type='button'
                        icon={isDarkMode ? faSun : faMoon}
                        title='Set theme'
                        ariaLabel={
                            isDarkMode
                                ? 'Set website in light mode'
                                : 'Set website in dark mode'
                        }
                        iconCss={`${
                            isDarkMode ? 'text-amber-200' : 'text-amber-500'
                        }`}
                        onClick={toggleDarkMode}
                    />
                    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </header>
    );
};

export default Header;
