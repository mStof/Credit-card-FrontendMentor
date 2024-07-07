type cardDateProps = {
  mounth: string;
  year: string;
};

const CardDate: React.FC<{ cardDate: cardDateProps }> = ({ cardDate }) => {
  const { mounth, year } = cardDate;
  return (
    <p className="text-sm text-white-100 tracking-md sm:tracking-bg sm:text-xm">
      {mounth && mounth.length <= 2 ? mounth : '00'}/
      {year && year.length <= 2 ? year : '00'}
    </p>
  );
};

export default CardDate;
