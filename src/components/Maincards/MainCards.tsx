'use client';
import * as FrontCard from '@/components/Maincards/Frontcard';
import * as BackCard from '@/components/Maincards/Backcard';
import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { ContextProps } from '@/@Types/formContextProps';

export default function MainCards() {
  const { watch } = useContext(FormContext) as ContextProps;
  const { cardCvc, cardDate, cardName, cardNumber } = watch();

  return (
    <main className="w-full h-60 px-4 pt-8 flex flex-col relative bg-[url('../../public/bg-main-mobile.png')] bg-no-repeat bg-cover sm:w-1/3 sm:h-full sm:bg-[url('../../public/bg-main-desktop.png')] sm:items-end sm:justify-center sm:gap-9 sm:p-0">
      <BackCard.Container>
        <BackCard.CVC cardCvc={cardCvc} />
      </BackCard.Container>

      <FrontCard.Container>
        <FrontCard.Logo />
        <FrontCard.Number cardNumber={cardNumber} />
        <div className="flex justify-between">
          <FrontCard.Name cardName={cardName} />
          <FrontCard.Date cardDate={cardDate} />
        </div>
      </FrontCard.Container>
    </main>
  );
}
