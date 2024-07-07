'use client';
import { useContext } from 'react';
import Input from './Input';
import { FormProps } from '@/@Types/formType';
import { FormContext } from '@/context/FormContext';
import { ContextProps } from '@/@Types/formContextProps';
import Success from '../Success/Success';

export default function Form() {
  const { register, handleSubmit, formState } = useContext(
    FormContext
  ) as ContextProps;

  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: FormProps) => {
    console.log(data);
  };

  return isSubmitSuccessful ? (
    <Success />
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 pb-11 flex flex-col gap-5 sm:mr-56 sm:p-0 sm:w-96"
    >
      <Input
        {...register('cardName')}
        placeholder="e.g. Jane Appleseed"
        label="Cardholder name"
        id="cardName"
        errorStyle={errors.cardName !== undefined}
        error={errors.cardName?.message}
      />
      <Input
        {...register('cardNumber')}
        placeholder="e.g. 1234 5678 9123 0000"
        label="Card Number"
        id="cardNumber"
        type="number"
        errorStyle={errors.cardNumber !== undefined}
        error={errors.cardNumber?.message}
      />
      <div className="flex justify-between gap-3 items-end">
        <div className="flex gap-2 items-end">
          <Input
            {...register('cardDate.mounth')}
            placeholder="MM"
            label="exp. date "
            id="cardDateMounth"
            type="number"
            sizeStyle="sm"
            errorStyle={errors.cardDate?.mounth !== undefined}
            error={errors.cardDate?.mounth?.message}
          />
          <Input
            {...register('cardDate.year')}
            placeholder="YY"
            label="(MM/YY)"
            id="cardDateYear"
            type="number"
            sizeStyle="sm"
            errorStyle={errors.cardDate?.year !== undefined}
            error={errors.cardDate?.year?.message}
          />
        </div>
        <Input
          {...register('cardCvc')}
          placeholder="e.g. 123"
          label="Cvc"
          id="cardCvc"
          type="number"
          errorStyle={errors.cardCvc !== undefined}
          error={errors.cardCvc?.message}
        />
      </div>
      <input
        className="bg-violet py-3 mt-2 w-full text-white-100 rounded-lg sm:w-96"
        type="submit"
        value="Confirm"
      />
    </form>
  );
}
