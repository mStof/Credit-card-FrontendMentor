const CardNumber: React.FC<{ cardNumber: string }> = ({ cardNumber }) => {
  if (!cardNumber) {
    return (
      <p className="text-bg text-white-100 leading-none -tracking-sm mb-4 mt-8 sm:tracking-xm sm:text-xb sm:mt-16 sm:mb-7">
        0000 0000 0000 0000
      </p>
    );
  }

  const cardNumberPlace = cardNumber && cardNumber.match(/\d{1,4}/g)?.join(' ');
  return (
    <p className="text-bg text-white-100 leading-none -tracking-tighter mb-4 mt-8 sm:tracking-xm sm:text-xb sm:mt-16 sm:mb-7">
      {cardNumber && cardNumber.length <= 16
        ? cardNumberPlace
        : '0000 0000 0000 0000'}
    </p>
  );
};

export default CardNumber;
