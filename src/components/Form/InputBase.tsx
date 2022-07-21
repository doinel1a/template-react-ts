import { ChangeEventHandler, FocusEventHandler } from 'react';

interface IInputBaseProps {
    type: 'text' | 'number';
    id: string;
    label: string;
    value: string | number;
    placeholder?: string;
    clean?: boolean;
    labelCss?: string;
    inputCss?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
}

const InputBase: React.FC<IInputBaseProps> = ({
    type,
    id,
    label,
    value,
    placeholder,
    inputCss,
    onChange,
    onFocus,
    onBlur,
}) => {
    if (type === 'text') {
        return (
            <input
                id={id}
                name={id}
                type='text'
                value={value}
                placeholder={
                    placeholder ? placeholder : `Insert ${label.toLowerCase()}`
                }
                className={inputCss ? inputCss : ''}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        );
    } else {
        return (
            <input
                id={id}
                name={id}
                type='text'
                value={value}
                inputMode='numeric'
                step='0.0001'
                placeholder={
                    placeholder ? placeholder : `Insert ${label.toLowerCase()}`
                }
                className={inputCss ? inputCss : ''}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        );
    }
};

export default InputBase;
