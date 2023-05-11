import cn from 'classnames';
import { PropsWithChildren, useRef } from 'react';
import { ReactComponent as Del } from './assets/close.svg';
import { ReactComponent as MagnifierIcon } from './assets/lens.svg';

interface ISearchProps {
  placeholder?: string;
  required?: boolean;
  classes?: { root?: string; input?: string };
  value?: string;
  onChange: (value: string) => void;
}

function Search({ placeholder, required, classes, value, onChange }: PropsWithChildren<ISearchProps>) {
  const form = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={form}
      className={cn(
        'flex items-center gap-1 border-2 border-solid rounded-xl h-10 text-pseudo-black',
        value ? 'border-black' : '!border-pseudo-white',
        classes?.root,
      )}
    >
      <span className="ml-4 mr-2">
        <MagnifierIcon />
      </span>

      <input
        onChange={(e) => {
          const { value: newValue } = e.target;
          e.preventDefault();
          onChange?.(newValue);
        }}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            e.preventDefault();
            return false;
          }
          return undefined;
        }}
        onFocus={() => {
          if (form?.current) {
            form.current.style.border = '2px solid #006a8d';
          }
        }}
        onBlur={() => {
          if (form?.current) {
            form.current.style.border = value ? '2px solid #000000' : '2px solid #bebebe';
          }
        }}
        className={cn(
          'h-full w-full placeholder:text-gray-8 placeholder:italic outline-0 rounded-2xl outline-none',
          classes?.input,
        )}
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
      />

      <span className="ml-2 mr-4 cursor-pointer">
        <Del
          onClick={() => {
            onChange?.('');
          }}
          className="hover:stroke-brown-2"
        />
      </span>
    </form>
  );
}

export default Search;
