import { DetailedHTMLProps, InputHTMLAttributes, LegacyRef, ReactNode } from 'react';
import classNames from 'classnames';

const defaultInputClassname = (
  value: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>['value'],
  invalid?: boolean,
) => {
  const classes = [
    'border border-solid rounded-2xl px-6 py-2 lg:py-4 outline-none',
    'placeholder:text-pseudo-white placeholder:italic',
  ];
  if (invalid) {
    classes.push('border-red text-red');
  } else if (value) {
    classes.push('border-pseudo-black focus:border-green text-pseudo-black');
  } else {
    classes.push('border-gray-8 focus:border-green');
  }
  return classes;
};

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: ReactNode;
  invalid?: boolean;
  classes?: { root?: string; label?: string; input?: string };
  ref?: LegacyRef<HTMLInputElement>;
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
  ...rest
}: InputProps) => {
  return (
    <div className={classNames('flex flex-col gap-1', classes.root)}>
      {label && (
        <label
          htmlFor={id}
          className={classNames('text-xs', invalid ? 'text-error' : 'text-pseudo-black', classes.label)}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={classNames(defaultInputClassname(value, invalid), classes.input)}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value ?? ''}
        required={required}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};

export default Input;
