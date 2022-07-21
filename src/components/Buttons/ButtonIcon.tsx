import { MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonIcon: React.FC<{
    type: 'button' | 'submit';
    icon: IconProp;
    title?: string;
    ariaLabel: string;
    disabled?: boolean;
    iconCss?: string;
    stateCss?: string;
    onClick?: MouseEventHandler;
}> = ({
    type,
    icon,
    title,
    ariaLabel,
    disabled,
    stateCss,
    iconCss,
    onClick,
}) => {
    return (
        <button
            type={type}
            title={title}
            aria-label={ariaLabel}
            disabled={disabled}
            className={stateCss ? stateCss : 'btn-icon'}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} className={iconCss ? iconCss : ''} />
        </button>
    );
};

export default ButtonIcon;
