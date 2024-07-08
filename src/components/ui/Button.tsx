import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  classNames = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-[18px] py-2 font-poppins text-[15px] font-medium text-primary-100 camleCase ${classNames}`}
    >
      {children}
    </button>
  );
};
