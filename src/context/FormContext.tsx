/* eslint-disable no-empty-function */
'use client';
import { schema } from '@/schema';
import { FormProps } from '@/@Types/formType';
import { zodResolver } from '@hookform/resolvers/zod';
import { createContext } from 'react';
import { useForm } from 'react-hook-form';
import { ContextProps } from '@/@Types/formContextProps';

export const FormContext = createContext<ContextProps | null>(null);

const FormContextProvider: React.FC<{
  children: React.ReactElement[] | React.ReactElement;
}> = ({ children }) => {
  const { handleSubmit, register, formState, watch } = useForm<FormProps>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {
      cardNumber: '',
      cardDate: {
        mounth: '',
        year: ''
      },
      cardCvc: '',
      cardName: ''
    }
  });
  // console.log('renderizou Contextr');

  return (
    <FormContext.Provider
      value={{
        watch,
        formState,
        handleSubmit,
        register
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
