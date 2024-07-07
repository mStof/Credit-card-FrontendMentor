import Image from 'next/image';
import bgBackCard from '@/../public/bg-card-back.png';

type CardContainerProps = {
  children: React.ReactElement[] | React.ReactElement;
};

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="w-72 h-36 rounded-md overflow-hidden shadow-deafult flex justify-end items-center pr-9 z-10 absolute self-end sm:relative sm:self-start sm:order-1 sm:w-11/12 sm:pr-15 sm:h-61 sm:left-full sm:-translate-x-1/2">
      <Image
        src={bgBackCard}
        alt="Background front card"
        fill
        quality={100}
        style={{ objectFit: 'cover', zIndex: '-1' }}
      />
      {children}
    </div>
  );
}
