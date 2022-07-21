import Heading from './components/Text/Heading';
import Paragraph from './components/Text/Paragraph';
import ButtonPrimary from './components/Buttons/ButtonPrimary';
import ButtonSecondary from './components/Buttons/ButtonSecondary';
import ButtonTertiary from './components/Buttons/ButtonTertiary';
import Form from './components/Form/Form';
import Modal, { ModalManager } from './components/Modal';
import Toast, { ToastManager } from './components/Toast';
import Loader, { LoaderManager } from './components/Loader';

const App: React.FC = () => {
    const openModal = () => {
        ModalManager.open(
            <Modal
                type='green'
                title='Deactivate account'
                content='Are you sure you want to deactivate
                your account? All of your data will
                be permanently removed. This action
                cannot be undone.'
                btnPrimaryContent='Deactivate'
                btnPrimaryCallback={() => alert('Callback')}
                btnSecondaryContent='Cancel'
            />
        );
    };

    const openToast = () => {
        ToastManager.open(
            <Toast
                title='Toast'
                content='Are you sure you want to deactivate
                your account? All of your data will
                be permanently removed. This action
                cannot be undone.'
            />
        );
    };

    const openLoader = () => {
        LoaderManager.open(<Loader />);

        setTimeout(() => {
            LoaderManager.close();
        }, 3000);
    };

    return (
        <main>
            <section className='w-full h-full flex lg:justify-center lg:items-center flex-wrap gap-x-6 lg:gap-x-20 gap-y-6 px-4 py-4'>
                <div className='flex flex-col gap-y-6'>
                    <Heading type='h1' text='Heading 1' />
                    <Heading type='h2' text='Heading 2' />
                    <Heading type='h3' text='Heading 3' />
                    <Heading type='h4' text='Heading 4' />
                    <Heading type='h5' text='Heading 5' />
                    <Heading type='h6' text='Heading 6' />
                </div>
                <div className='w-96'>
                    <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                </div>
                <div className='flex flex-col gap-y-6'>
                    <ButtonPrimary
                        type='button'
                        text='Modal'
                        spanCss='!text-white'
                        onClick={() => openModal()}
                    />
                    <ButtonSecondary
                        type='button'
                        text='Toast'
                        onClick={() => openToast()}
                    />
                    <ButtonTertiary
                        type='button'
                        text='Loader'
                        onClick={() => openLoader()}
                    />
                </div>
                <Form onSubmit={(e) => e.preventDefault()} />
            </section>
        </main>
    );
};

export default App;
