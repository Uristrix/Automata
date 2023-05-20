import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  onClick?: () => void;
  style?: string;
}

const Button = ({ type = 'button', disabled, onClick, style, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        ' bg-ocean transition hover:bg-green border-0 rounded-xl text-base text-white text-center h-10 w-36',
        style,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
