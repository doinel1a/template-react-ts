import { Dispatch, SetStateAction } from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import Paragraph from './Text/Paragraph';
import ButtonIcon from './Buttons/ButtonIcon';

const Dropdown: React.FC<{
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
    return (
        <div className='relative inline-block text-left'>
            <div aria-expanded='true' aria-haspopup='true'>
                <ButtonIcon
                    type='button'
                    icon={faGear}
                    ariaLabel='Settings'
                    onClick={() => setIsOpen((prevState) => !prevState)}
                />
            </div>
            {isOpen && (
                <div
                    className='w-56 absolute right-0 mt-2 origin-top-right rounded-lg shadow-lg bg-white dark:bg-gray-500 fade-in'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='menu-button'
                    tabIndex={-1}
                >
                    <div className='flex flex-col gap-y-2 p-2' role='none'>
                        <div
                            role='menuitem'
                            tabIndex={-1}
                            className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'
                        >
                            <Paragraph text='Option 1' />
                        </div>
                        <div
                            role='menuitem'
                            tabIndex={-1}
                            className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'
                        >
                            <Paragraph text='Option 2' />
                        </div>
                        <div
                            role='menuitem'
                            tabIndex={-1}
                            className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'
                        >
                            <Paragraph text='Option 3' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
