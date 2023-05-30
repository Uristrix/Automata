import segments from '../../../assets/segments.jpg';
import Input from '../../Input/Input';
import { Dispatch } from 'react';
import { InputsDict } from '../../../model/Inputs';

const task = 'table';

export const Task2_1 = ({
  inputs,
  setInputs,
  bias,
  segment,
  D,
  header,
}: {
  bias: number;
  segment: string;
  D: number;
  header?: string;
  inputs: InputsDict;
  setInputs: Dispatch<InputsDict>;
}) => {
  const table1: Array<string> = ['x1', 'x2', 'x3', 'x4', segment];
  const table2: Array<string> = ['x1', 'x2', 'x3', 'x4', 'var_seg'];

  return (
    <div className="">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">
        Составьте таблицу истинности для одной из функций a,b,c…i, управляющих работой соответствующего сегмента
        индикатора десятичной цифры, представленной в коде{' '}
        <span className="font-semibold">{D === 0 ? 'Д1' : 'Д2'}</span>
      </p>
      <p className="font-semibold mb-2">
        Смещение: {bias}, сегмент: {segment}
      </p>

      <img className="my-4" src={segments} alt="CegmentSmesh" />
      <div className="relative w-full">
        <div className="grid grid-cols-5">
          {table1.map((el, i) => (
            <div className="w-full text-center font-semibold" key={`table${i}`}>
              {el}
            </div>
          ))}
          {Array.from(Array(16).keys()).map((el, i) => (
            <>
              {table2.map((el2, i2) => (
                <Input
                  classes={{ root: '!rounded-none !min-w-[40px]', input: '!rounded-none' }}
                  key={`Input${i2}`}
                  value={inputs[task]?.[table2[i2]]?.[i] || ''}
                  onChange={(e) => {
                    inputs[task][table2[i2]][i] = e.target.value;
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
