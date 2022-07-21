import { ChangeEventHandler, FocusEventHandler } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import InputBase from './InputBase';
import ButtonIcon from '../Buttons/ButtonIcon';

const Input: React.FC<{
    type: 'text' | 'number';
    id: string;
    label: string;
    value: string | number;
    selectValue?: string;
    placeholder?: string;
    isClean?: boolean;
    isDropdown?: boolean;
    labelCss?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onSelect?: ChangeEventHandler<HTMLSelectElement>;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
    onClean?: () => void;
}> = ({
    type,
    id,
    label,
    value,
    selectValue,
    placeholder,
    isClean,
    isDropdown,
    labelCss,
    onChange,
    onSelect,
    onFocus,
    onBlur,
    onClean,
}) => {
    return (
        <div className='flex flex-col'>
            <label htmlFor={id} className={labelCss ? labelCss : ''}>
                {label}
            </label>
            {isClean && isDropdown ? (
                <div className='relative flex justify-start items-center'>
                    <div className='w-8 rigt-2 absolute inset-y-0 left-0 px-4 flex items-center pointer-events-none'>
                        <span className='!text-color-light text-lg font-medium'>
                            {' '}
                            {selectValue}{' '}
                        </span>
                    </div>
                    <InputBase
                        type={type}
                        id={id}
                        label={label}
                        value={value}
                        placeholder={placeholder}
                        inputCss='mr-[5rem] pl-6 rounded-l-lg'
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    <div className='absolute right-[5.5rem] mt-1'>
                        <ButtonIcon
                            type='button'
                            icon={faClose}
                            title='Clear input'
                            ariaLabel='Clear input'
                            iconCss='!w-3 text-color-light'
                            onClick={() => onClean!()}
                        />
                    </div>
                    <div className='absolute inset-y-0 right-0'>
                        <label htmlFor='currency' className='sr-only'>
                            Currency
                        </label>
                        <select
                            id='currency'
                            name='currency'
                            value={selectValue}
                            className='w-[5rem] h-full px-2 cursor-pointer border border-gray-200 rounded-r-lg outline-none'
                            onChange={onSelect}
                        >
                            <option value={'$'}>USD</option>
                            <option value={'€'}>EUR</option>
                        </select>
                    </div>
                </div>
            ) : isClean ? (
                <div className='relative flex items-center'>
                    <InputBase
                        type={type}
                        id={id}
                        label={label}
                        value={value}
                        placeholder={placeholder}
                        inputCss='rounded-lg'
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    <div className='absolute right-1 mt-1 mr-1'>
                        <ButtonIcon
                            type='button'
                            icon={faClose}
                            title='Clear input'
                            ariaLabel='Clear input'
                            iconCss='!w-3 text-color-light'
                            onClick={() => onClean!()}
                        />
                    </div>
                </div>
            ) : isDropdown ? (
                <div className='relative flex justify-start items-center'>
                    <div className='w-8 rigt-2 absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none'>
                        <span className='!text-color-light text-lg font-medium'>
                            {' '}
                            {selectValue}{' '}
                        </span>
                    </div>
                    <InputBase
                        type={type}
                        id={id}
                        label={label}
                        value={value}
                        placeholder={placeholder}
                        inputCss='mr-[5rem] pl-6 rounded-l-lg'
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    <div className='absolute inset-y-0 right-0'>
                        <label htmlFor='currency' className='sr-only'>
                            Currency
                        </label>
                        <select
                            id='currency'
                            name='currency'
                            value={selectValue}
                            className='w-[5rem] h-full px-2 cursor-pointer border border-gray-200 rounded-r-lg outline-none'
                            onChange={onSelect}
                        >
                            <option value={'$'}>USD</option>
                            <option value={'€'}>EUR</option>
                        </select>
                    </div>
                </div>
            ) : (
                <InputBase
                    type={type}
                    id={id}
                    label={label}
                    value={value}
                    placeholder={placeholder}
                    inputCss='rounded-lg'
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            )}
        </div>
    );
};

export default Input;
