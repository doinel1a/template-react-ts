import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import Paragraph from './Text/Paragraph';

const Loader: React.FC = () => {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div className='relative z-10'>
            <section className='fixed inset-0 flex flex-col justify-center items-center gap-y-5 lg:gap-y-7 bg-slate-200 dark:bg-slate-800 fade-in transition-all'>
                <span className='w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 loader border-[0.4rem] md:border-[0.5rem] lg:border-[0.6rem] border-blue-600'></span>
                <Paragraph
                    text='LOADING . . .'
                    customCss='text-lg md:text-xl lg:text-2xl font-medium'
                />
            </section>
        </div>
    );
};

var node: any;
var loaders: any[] = [];

const renderLoader = () => {
    if (loaders.length == 0) return;

    const component = loaders.shift();

    if (!node) {
        node = document.createElement('div');
        node.id = 'loader';

        document.body.appendChild(node);
    }

    ReactDOM.render(component, node);
};

export const LoaderManager = {
    open(component: any) {
        loaders.push(component);

        if (loaders.length == 1) renderLoader();
    },
    close() {
        ReactDOM.unmountComponentAtNode(node);
        renderLoader();
    },
};

export default Loader;
