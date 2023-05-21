import React, { Dispatch, useEffect } from 'react';
import Input from '../../Input/Input';
import { Inputs } from '../../../model/Inputs';

const task = 'trans';

export const Task1_1 = ({
  inputs,
  setInputs,
  invalid,
  num,
  precision,
  header,
}: {
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
  invalid: object;
  num: number;
  precision: number;
  header?: string;
}) => {
  useEffect(() => {
    inputs[task] = { A_dvoich: '', A_oct: '', A_hex: '' };
    setInputs({ ...inputs });
  }, []);
  return (
    <div className="w-full">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">
        Выполните перевод заданного числа из десятичной системы счисления в двоичную, восьмеричную и шестнадцатеричную
        систему счисления с <span className="font-bold"> точностью {precision} </span>. Исходное число содержит три
        разряда в целой части и три разряда в дробной части.
      </p>
      <div className="lg:max-w-[400px] flex flex-col gap-2">
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> ={' '}
          <Input
            invalid={invalid['A_dvoich']}
            value={inputs[task]?.A_dvoich || ''}
            placeholder={'XXX,XXX'}
            onChange={(e) => {
              setInputs({ ...inputs, [task]: { ...inputs[task], A_dvoich: e.target.value } });
            }}
          />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> ={' '}
          <Input
            invalid={invalid['A_oct']}
            value={inputs[task]?.A_oct || ''}
            placeholder={'XXX,XXX'}
            onChange={(e) => {
              setInputs({ ...inputs, [task]: { ...inputs[task], A_oct: e.target.value } });
            }}
          />
          <sub>8</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> ={' '}
          <Input
            invalid={invalid['A_hex']}
            value={inputs[task]?.A_hex || ''}
            placeholder={'XXX,XXX'}
            onChange={(e) => {
              setInputs({ ...inputs, [task]: { ...inputs[task], A_hex: e.target.value } });
            }}
          />
          <sub>16</sub>
        </i>
      </div>
    </div>
  );
};
