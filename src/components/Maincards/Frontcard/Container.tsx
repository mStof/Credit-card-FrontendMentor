import Image from 'next/image';
import React from 'react';
import bgFrontCard from '@/../public/bg-card-front.png';
// import { tv } from 'tailwind-variants';

interface CardContainerProps {
  children: React.ReactElement[];
}

// const cardContainer = tv({
//   base: ''
// });

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="w-72 min-h-max px-5 py-4 rounded-md absolute isolate overflow-hidden shadow-deafult z-10 top-full -translate-y-3/4 sm:relative sm:top-auto sm:translate-y-0 sm:px-8 sm:py-7 sm:w-11/12 sm:translate-x-1/4">
      <Image
        src={bgFrontCard}
        alt="Background front card"
        fill
        quality={100}
        style={{ objectFit: 'cover', zIndex: '-1' }}
      />
      {children}
    </div>
  );
}
