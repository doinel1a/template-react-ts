import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from './Buttons/ButtonIcon';
import Paragraph from './Text/Paragraph';

interface IToastProps {
    title: string;
    content: string;
    intervalTick?: number;
}

const Toast: React.FC<IToastProps> = ({
    title,
    content,
    intervalTick = 100,
}) => {
    useEffect(() => {
        let percentage = 100;

        const timer = setInterval(() => {
            percentage--;
            if (percentage === 0) ToastManager.close();
            document.documentElement.style.setProperty(
                '--progress-perc',
                `${percentage}%`
            );
        }, intervalTick);

        return () => {
            document.documentElement.style.setProperty(
                '--progress-perc',
                '100%'
            );
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className='absolute z-10'>
            <div className='fixed bottom-12 left-4 right-4 sm:left-auto sm:right-4 slide-in-rhs transition-all'>
                <div className='w-full sm:w-96 h-44 sm:h-40 md:h-48 lg:h-52 progress rounded-lg bg-neutral-300 dark:bg-neutral-500 before:bg-neutral-400 before:dark:bg-neutral-600 transition-colors'></div>
                <div className='absolute top-0 p-4'>
                    <header className='flex justify-between items-center'>
                        <Paragraph
                            text={title}
                            customCss='text-lg md:text-xl lg:text-2xl font-medium'
                        />
                        <ButtonIcon
                            type='button'
                            icon={faClose}
                            title='Close toast'
                            ariaLabel='Close toast'
                            iconCss='!w-3'
                            onClick={() => ToastManager.close()}
                        />
                    </header>
                    <section className='mt-4'>
                        <Paragraph text={content} />
                    </section>
                </div>
            </div>
        </div>
    );
};

var node: any;
var toasts: any[] = [];

const renderToast = () => {
    if (toasts.length == 0) return;

    const component = toasts.shift();

    if (!node) {
        node = document.createElement('div');
        node.id = 'toast';

        document.body.appendChild(node);
    }

    ReactDOM.render(component, node);
};

export const ToastManager = {
    open(component: any) {
        toasts.push(component);

        if (toasts.length == 1) renderToast();
    },
    close() {
        ReactDOM.unmountComponentAtNode(node);
        renderToast();
    },
};

export default Toast;
