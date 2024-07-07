import Image from 'next/image';
import cardLogo from '@/../public/card-logo.svg';

export default function CardLogo() {
  return (
    <Image
      src={cardLogo}
      alt="credit card logo"
      className="h-8 w-14 object-contain sm:h-auto sm:w-auto"
    />
  );
}
