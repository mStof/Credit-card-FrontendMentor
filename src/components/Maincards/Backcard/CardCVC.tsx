const CardCVC: React.FC<{ cardCvc: string }> = ({ cardCvc }) => {
  return (
    <p className="text-sm text-white-100 tracking-md -translate-y-px sm:text-xm sm:tracking-bg">
      {cardCvc && cardCvc.length <= 3 ? cardCvc : '000'}
    </p>
  );
};

export default CardCVC;
