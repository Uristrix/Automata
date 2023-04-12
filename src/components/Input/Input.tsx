import { DetailedHTMLProps, InputHTMLAttributes, LegacyRef, ReactNode } from 'react';
import classNames from 'classnames';

const defaultInputClassname = (
  value: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>['value'],
  invalid?: boolean,
  variant?: string,
) => {
  const classes = ['border-2 border-solid', 'placeholder:text-pseudo-white placeholder:italic'];
  if (variant === 'classic') classes.push('rounded-2xl px-6 py-2 lg:py-4');
  else classes.push('border-black border-[1px]');
  if (invalid) {
    classes.push('border-red text-red');
  } else if (value) {
    classes.push('border-pseudo-black focus:border-green text-pseudo-black');
  } else {
    classes.push('border-gra focus:border-green');
  }
  return classes;
};

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: ReactNode;
  invalid?: boolean;
  classes?: { root?: string; label?: string; input?: string };
  variant?: 'control' | 'classic';
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
  variant = 'classic',
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div className={classNames('flex flex-col gap-1 border-g', classes.root)}>
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
        className={classNames(defaultInputClassname(value, invalid, variant), classes.input)}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value ?? ''}
        required={required}
        disabled={disabled}
        onChange={onchange}
        {...rest}
      />
    </div>
  );
};

export default Input;
