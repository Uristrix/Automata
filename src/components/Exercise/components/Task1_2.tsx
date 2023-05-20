import React, { Dispatch, useEffect } from 'react';
import Input from '../../Input/Input';
import { InputsArr } from '../../../model/Inputs';

const task = 'numb_with_system';

export const Task1_2 = ({
  inputs,
  invalid,
  setInputs,
  p,
  header,
}: {
  inputs: InputsArr;
  invalid: object;
  setInputs: Dispatch<InputsArr>;
  p: string;
  header?: string;
}) => {
  useEffect(() => {
    inputs[task] = [
      { system_from: '10', system_to: '2' },
      { system_from: '10', system_to: p },
      { system_from: '2', system_to: '10' },
      { system_from: '2', system_to: p },
      { system_from: p, system_to: '2' },
      { system_from: p, system_to: '10' },
    ];
    setInputs({ ...inputs, [task]: inputs[task] });
  }, []);

  useEffect(() => {
    const temp = invalid['numb_with_system'];
    temp?.map((el) => {
      for (const i in inputs[task]) {
        if (el?.system_from === inputs[task][i].system_from && el?.system_to === inputs[task][i].system_to) {
          inputs[task][i] = { ...inputs?.[task]?.[i], invalid: el?.result.toString() };
          console.log(el?.result);
        }
      }
    });
    setInputs({ ...inputs, [task]: inputs[task] });
    console.log(inputs);
  }, [invalid]);

  return (
    <div className="w-full min-h-[340px]">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">Целую часть числа переведите в другие системы счисления.</p>

      <div className="lg:max-w-[400px] flex flex-col gap-2">
        {inputs[task]?.map((el, i) => (
          <i className="flex items-center w-full [&>sub]:pt-4" key={`key${i}`}>
            <Input
              type="number"
              value={inputs[task]?.[i]?.['numb'] || ''}
              classes={{ root: '!max-w-[120px]' }}
              onChange={(e) => {
                inputs[task][i] = { ...inputs?.[task]?.[i], numb: e.target.value };
                setInputs({ ...inputs, [task]: inputs[task] });
              }}
            />
            <sub>{el.system_from}</sub> ={' '}
            <Input
              value={inputs[task]?.[i]?.['result'] || ''}
              invalid={
                inputs?.[task]?.[i]?.invalid === 'true'
                  ? true
                  : inputs?.[task]?.[i]?.invalid === 'false'
                  ? false
                  : undefined
              }
              onChange={(e) => {
                inputs[task][i] = { ...inputs?.[task]?.[i], result: e.target.value, invalid: '' };
                setInputs({ ...inputs, [task]: inputs[task] });
              }}
            />
            <sub>{el.system_to}</sub>
          </i>
        ))}
      </div>
    </div>
  );
};
