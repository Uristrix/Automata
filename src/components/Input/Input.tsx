import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

const defaultInputClassname = (
  value: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>['value'],
  invalid?: boolean,
) => {
  const classes = [
    'border-[2px] border-solid focus:outline-0 focus:!border-ocean',
    'placeholder:text-pseudo-white placeholder:italic',
    'rounded-xs md:rounded-xl px-1 md:px-2 lg:py-1 h-full',
  ];
  if (invalid) {
    classes.push('border-red text-red');
  } else if (value) {
    classes.push('!border-black !text-pseudo-black');
  } else {
    classes.push('!border-pseudo-white !text-pseudo-black');
  }
  return classes;
};

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: ReactNode;
  invalid?: boolean;
  classes?: { root?: string; label?: string; input?: string };
  variant?: 'input' | 'textarea';
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const Input = ({
  id,
  label,
  name,
  placeholder,
  value,
  type = 'text',
  required,
  invalid,
  classes = {},
  disabled = false,
  ref = null,
  variant = 'input',
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div className={classNames('flex flex-col gap-1 border-g min-w-[85px] w-full', classes.root)}>
      {label && (
        <label
          htmlFor={id}
          className={classNames('text-xs', invalid ? 'text-error' : 'text-pseudo-black', classes.label)}
        >
          {label}
        </label>
      )}
      {variant === 'input' && (
        <input
          ref={ref}
          className={classNames(defaultInputClassname(value, invalid), classes.input)}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
          {...rest}
        />
      )}
      {variant === 'textarea' && (
        <textarea
          className={classNames(defaultInputClassname(value, invalid), classes.input)}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          disabled={disabled}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Input;
