import React from 'react';

interface ButtonProps {
  text: string;
  classNames?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  classNames = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-[18px] py-2 font-poppins text-[15px] font-medium text-primary-100 camleCase ${classNames}`}
    >
      {text}
    </button>
  );
};
