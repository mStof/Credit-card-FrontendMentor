const CardName: React.FC<{ cardName: string | null }> = ({ cardName }) => {
  return (
    <p className="text-sm text-white-100 tracking-md uppercase sm:tracking-bg sm:text-xm">
      {cardName && cardName.length <= 45 ? cardName : 'Jane Appleseed'}
    </p>
  );
};

export default CardName;
