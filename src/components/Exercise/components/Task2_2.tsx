import Input from '../../Input/Input';
import { Dispatch, useEffect } from 'react';
import { InputsArr } from '../../../model/Inputs';

const task = 'table';

export const Task2_2 = ({
  inputs,
  setInputs,
  segment,
  header,
}: {
  inputs: InputsArr;
  setInputs: Dispatch<InputsArr>;
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
                  value={inputs[task]?.[i]?.[table[i2]] || ''}
                  onChange={(e) => {
                    inputs[task][i] = { ...inputs?.[task]?.[i], [table[i2]]: e.target.value };
                    setInputs({ ...inputs, [task]: inputs[task] });
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
