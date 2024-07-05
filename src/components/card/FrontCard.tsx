import Image from 'next/image';
import CardLogo from '@/../public/card-logo.svg';

export const FrontCard = () => {
  return (
    <div>
      <Image src={CardLogo} alt="Card logo"></Image>
      <pre>0000 0000 0000 0000</pre>
      <div>
        <pre>Jane Appleseed</pre>
        <p>00/00</p>
      </div>
    </div>
  );
};
