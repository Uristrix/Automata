import Input from '../../Input/Input';
import { Dispatch, useEffect } from 'react';

interface Inputs {
  [keys: string]: Array<{
    [keys: string]: string | null;
  }>;
}

export const Task2_2 = ({
  inputs,
  setInputs,
  segment,
  header,
}: {
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
  segment: string;
  header?: string;
}) => {
  const table = ['x1', 'x2', 'x3', 'x4', segment, 'СДНФ', 'СКНФ'];

  useEffect(() => {
    inputs['add_table'] = [];
  }, []);

  return (
    <div className="">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">Доопределите функцию и представьте её в СДНФ и СКНФ.</p>
      <div className="relative w-full">
        <div className="grid grid-cols-7 w-full">
          {table.map((el, i) => (
            <div className="w-full text-center font-semibold" key={`table${i}`}>
              {el}
            </div>
          ))}
          {Array.from(Array(16).keys()).map((el, i) => (
            <>
              {table.map((el2, i2) => (
                <Input
                  classes={{ root: '!rounded-none !min-w-[20px]', input: '!rounded-none' }}
                  key={`Input${i2}`}
                  value={inputs['add_table']?.[i]?.[table[i2]] || ''}
                  onChange={(e) => {
                    inputs['add_table'][i] = { ...inputs?.['add_table']?.[i], [table[i2]]: e.target.value };
                    setInputs({ ...inputs, ['add_table']: inputs['add_table'] });
                  }}
                />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
