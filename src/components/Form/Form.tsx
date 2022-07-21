import { FormEventHandler, useEffect } from 'react';

import useStateContext from '../../context/ContextProvider';

import Input from './Input';
import ButtonPrimary from '../Buttons/ButtonPrimary';

const Form: React.FC<{ onSubmit: FormEventHandler }> = ({ onSubmit }) => {
    const { form, setForm } = useStateContext();

    useEffect(() => {
        console.log(form.name, form.surname, form.salary, form.currency);
    }, [form]);

    return (
        <form
            autoComplete='off'
            className='w-96 h-auto'
            onSubmit={(e) => onSubmit(e)}
        >
            <div className='flex flex-col gap-y-4'>
                <Input
                    type='text'
                    id='name'
                    label='Name'
                    value={form.name}
                    isClean={true}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onClean={() => setForm({ ...form, name: '' })}
                />
                <Input
                    type='text'
                    id='surname'
                    label='Surname'
                    value={form.surname}
                    isClean={true}
                    onChange={(e) =>
                        setForm({ ...form, surname: e.target.value })
                    }
                    onClean={() => setForm({ ...form, surname: '' })}
                />
                <Input
                    type='number'
                    id='salary'
                    label='Salary'
                    selectValue={form.currency}
                    value={form.salary}
                    isClean={true}
                    isDropdown={true}
                    onChange={(e) =>
                        setForm({ ...form, salary: e.target.value })
                    }
                    onSelect={(e) => {
                        setForm({ ...form, currency: e.target.value });
                    }}
                    onClean={() => setForm({ ...form, salary: '' })}
                />
            </div>
            <div className='flex justify-end mt-8'>
                <ButtonPrimary
                    type='submit'
                    text='Submit'
                    spanCss='!text-white'
                />
            </div>
        </form>
    );
};

export default Form;
