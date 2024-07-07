/* eslint-disable react/no-unescaped-entities */
import completeIcon from '@/../public/icon-complete.svg';
import Image from 'next/image';

export default function Success() {
  return (
    <div className="flex flex-col mb-20 items-center px-6 h-fit justify-start sm:mr-56">
      <Image src={completeIcon} alt="Complete icon" />
      <h2 className="mb-4 mt-8 text-[1.75rem] uppercase tracking-[0.12em] leading-none">
        Thanks you
      </h2>
      <p className="text-[1.125rem] tracking-[0.005em] text-white-300 mb-12 leading-none">
        We've added your card details
      </p>
      <button className="bg-violet py-3 w-full text-white-100 rounded-lg sm:w-96">
        Continue
      </button>
    </div>
  );
}
