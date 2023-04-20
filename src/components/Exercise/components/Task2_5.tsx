import Input from '../../Input/Input';
import { Dispatch } from 'react';

interface Inputs {
  [keys: string]: {
    t?: string | null;
  };
}
export const Task2_5 = ({
  inputs,
  setInputs,
  header,
}: {
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
  header?: string;
}) => {
  return (
    <div className="lg:max-w-[400px]">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">Выполните синтез функции в базисах: основном, Шеффера, Пирса.</p>
      <div className="flex items-center">
        <span className="min-w-[85px]">Решение = </span>
        <Input variant="textarea" value={inputs['t']?.t || ' '} onChange={() => setInputs({ task2_5: {} })} />
      </div>
    </div>
  );
};
