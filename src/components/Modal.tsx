import { SyntheticEvent, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faWarning } from '@fortawesome/free-solid-svg-icons';

import ButtonPrimary from './Buttons/ButtonPrimary';
import ButtonSecondary from './Buttons/ButtonSecondary';
import Paragraph from './Text/Paragraph';

interface IModalProps {
    type: 'green' | 'red';
    title: string;
    content: string;
    btnPrimaryContent: string;
    btnPrimaryCallback?: () => void;
    btnSecondaryContent: string;
    btnSecondaryCallback?: () => void;
}

interface FocusEvent<T = Element> extends SyntheticEvent<T> {
    relatedTarget: Node | null;
    target: EventTarget & T;
}

const stopPropagation = (e: any) => e.stopPropagation();

const Modal: React.FC<IModalProps> = ({
    type,
    title,
    content,
    btnPrimaryContent,
    btnPrimaryCallback,
    btnSecondaryContent,
    btnSecondaryCallback,
}) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    const handleFocus = (e: FocusEvent<HTMLDivElement>) => {
        modalRef.current?.setAttribute('tabindex', '0');

        if (!modalRef.current?.contains(e.relatedTarget))
            modalRef.current?.focus();
    };

    return (
        <div
            role='dialog'
            aria-labelledby='modal-title'
            aria-modal='true'
            className='relative z-10'
            onClick={() => ModalManager.close()}
        >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-50 fade-in transition-all' />

            <div
                ref={modalRef}
                className='fixed z-10 inset-0'
                onBlur={handleFocus}
            >
                <div
                    ref={modalRef}
                    className='min-h-full flex justify-center items-end sm:items-center p-4 sm:p-0'
                >
                    <div
                        className='sm:max-w-lg sm:w-full relative sm:my-8 rounded-lg overflow-hidden bg-primary-light dark:bg-primary-dark scale-up transition-all'
                        onClick={stopPropagation}
                    >
                        <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-secondary-light dark:bg-secondary-dark'>
                            <div className='sm:flex sm:items-start'>
                                {type === 'green' ? (
                                    <div className='w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 mx-auto flex-shrink-0 flex items-center justify-center rounded-full bg-green-200 sm:mx-0'>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className='w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-9 text-green-600'
                                        />
                                    </div>
                                ) : (
                                    <div className='w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 mx-auto flex-shrink-0 flex items-center justify-center rounded-full bg-red-100 sm:mx-0'>
                                        <FontAwesomeIcon
                                            icon={faWarning}
                                            className='w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-9 text-red-600'
                                        />
                                    </div>
                                )}

                                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                                    <header id='modal-title'>
                                        <Paragraph
                                            text={title}
                                            customCss='text-lg md:text-xl lg:text-2xl font-medium'
                                        />
                                    </header>
                                    <section className='mt-4'>
                                        <Paragraph
                                            text={content}
                                            customCss='text-color-light dark:text-color-dark'
                                        />
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row-reverse border-2 gap-x-4 gap-y-2 px-4 py-3 sm:px-5 bg-stone-200'>
                            <ButtonPrimary
                                type='button'
                                text={btnPrimaryContent}
                                spanCss='!text-white'
                                stateCss={`w-full sm:w-auto ${
                                    type === 'green'
                                        ? 'bg-green-500 hover:bg-green-700 focus:bg-green-700'
                                        : 'bg-red-500 hover:bg-red-700 focus:bg-red-700'
                                }`}
                                onClick={() => {
                                    ModalManager.close();
                                    btnPrimaryCallback
                                        ? btnPrimaryCallback()
                                        : null;
                                }}
                            />
                            <ButtonSecondary
                                type='button'
                                text={btnSecondaryContent}
                                spanCss='!text-color-light'
                                stateCss='w-full sm:w-auto border border-black bg-white hover:bg-gray-100 focus:bg-gray-100'
                                onClick={() => {
                                    ModalManager.close();
                                    btnSecondaryCallback
                                        ? btnSecondaryCallback()
                                        : null;
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

var node: any;
var modals: any[] = [];

const renderModal = () => {
    if (modals.length == 0) return;

    const component = modals.shift();

    if (!node) {
        node = document.createElement('div');
        node.id = 'modal';

        document.body.appendChild(node);
    }

    ReactDOM.render(component, node);
};

export const ModalManager = {
    open(component: any) {
        modals.push(component);

        if (modals.length == 1) renderModal();
    },
    close() {
        ReactDOM.unmountComponentAtNode(node);
        renderModal();
    },
};

export default Modal;
