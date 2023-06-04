import Input from '../../Input/Input';
import { Dispatch, useEffect } from 'react';
import { Inputs, InputsDict } from '../../../model/Inputs';
import classNames from 'classnames';

const task = 'table';

export const Task2_2 = ({
  inputs,
  setInputs,
  segment,
  header,
  invalid,
}: {
  inputs: InputsDict;
  setInputs: Dispatch<InputsDict>;
  segment: string;
  header?: string;
  invalid: object;
}) => {
  const table1 = ['x1', 'x2', 'x3', 'x4', segment, 'СДНФ', 'СКНФ'];
  const table2 = ['x1', 'x2', 'x3', 'x4', 'var_seg', 'СДНФ', 'СКНФ'];

  useEffect(() => {
    inputs[task] = {};
    table2.map((el) => {
      inputs[task][el] = Array.from(Array(16).keys()).map(() => '');
    });
    for (let i = 1; i < 5; i++) {
      inputs[task][`x${i}`] = Array.from(Array(16).keys()).map((el, j) =>
        Number(Math.floor(j / Math.pow(2, 4 - i)) % 2 !== 0).toString(),
      );
    }
  }, []);

  useEffect(() => {
    const sdnf = getFun('СДНФ', 'v');
    const sknf = getFun('СКНФ', '&');
    setInputs({
      ...inputs,
      [task]: { ...inputs?.[task], ['sdnf']: [sdnf], ['sknf']: [sknf] },
    });
  }, [inputs]);

  const getFun = (tag: string, sep: string) => {
    let res = '';
    inputs?.[task]?.[tag]?.map((el) => {
      if (el !== '') {
        res += `( ${el} ) `;
      }
    });
    return res.split(') (').join(`) ${sep} (`);
  };

  return (
    <div className="">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">Доопределите функцию и представьте её в СДНФ и СКНФ.</p>
      <p className="mb-2 text-sm text-gray-500">*Формат СДНФ/СКНФ - nx1 & x2 & x3 & nx4 ИЛИ nx1 v x2 v x3 v nx4</p>
      <div className="relative w-full">
        <div className="grid grid-cols-7 w-full">
          {table1.map((el, i) => (
            <div className="w-full text-center font-semibold" key={`table${i}`}>
              {el}
            </div>
          ))}
          {Array.from(Array(16).keys()).map((el, i) => (
            <>
              {table2.map((el2, i2) => (
                <Input
                  classes={{
                    root: '!rounded-none !min-w-[20px]',
                    input: classNames('!rounded-none', el2 === 'СДНФ' || el2 === 'СКНФ' ? 'text-[12px]' : ''),
                  }}
                  invalid={el2 === 'СДНФ' ? invalid['Fsdnf'] : el2 === 'СКНФ' ? invalid['Fsknf'] : undefined}
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
      <div className="lg:max-w-[700px] flex flex-col mt-5">
        <div className="flex flex-nowrap items-center mb-2">
          <span className="min-w-[60px]"> СДНФ = </span>
          <Input
            variant="textarea"
            invalid={invalid['Fsdnf']}
            value={inputs[task]?.['sdnf']?.[0] || ''}
            classes={{ input: 'min-h-[100px]' }}
            disabled={true}
          />
        </div>
        <div className="flex flex-nowrap items-center mb-2">
          <span className="min-w-[60px]"> СКНФ = </span>
          <Input
            variant="textarea"
            invalid={invalid['Fsknf']}
            value={inputs[task]?.['sknf']?.[0] || ''}
            classes={{ input: 'min-h-[100px]' }}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};
