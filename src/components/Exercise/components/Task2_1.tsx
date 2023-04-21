import segments from '../../../assets/segments.jpg';
import Input from '../../Input/Input';
import { Dispatch, useEffect } from 'react';

interface Inputs {
  [keys: string]: Array<{
    [keys: string]: string | null;
  }>;
}

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
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
}) => {
  const table: Array<string> = ['x1', 'x2', 'x3', 'x4', segment];

  useEffect(() => {
    inputs['true_table'] = [];
  }, []);

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
          {table.map((el, i) => (
            <div className="w-full text-center font-semibold" key={`table${i}`}>
              {el}
            </div>
          ))}
          {Array.from(Array(16).keys()).map((el, i) => (
            <>
              {table.map((el2, i2) => (
                <Input
                  classes={{ root: '!rounded-none !min-w-[40px]', input: '!rounded-none' }}
                  key={`Input${i2}`}
                  value={inputs['true_table']?.[i]?.[table[i2]] || ''}
                  onChange={(e) => {
                    inputs['true_table'][i] = { ...inputs?.['true_table']?.[i], [table[i2]]: e.target.value };
                    setInputs({ ...inputs, ['true_table']: inputs['true_table'] });
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
