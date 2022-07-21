import { MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Span from '../Text/Span';

const ButtonTertiary: React.FC<{
    type: 'button' | 'submit';
    text: string;
    icon?: IconProp;
    disabled?: boolean;
    spanCss?: string;
    iconCss?: string;
    stateCss?: string;
    onClick?: MouseEventHandler;
}> = ({ type, text, icon, disabled, spanCss, iconCss, stateCss, onClick }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`btn-base ${stateCss ? stateCss : 'btn-tertiary'}`}
            onClick={onClick}
        >
            {icon ? (
                <FontAwesomeIcon
                    icon={icon}
                    className={iconCss ? iconCss : ''}
                />
            ) : (
                <></>
            )}
            <Span
                text={text}
                customCss={`
                    ${spanCss ? spanCss : ''}
                `}
            />
        </button>
    );
};

export default ButtonTertiary;
