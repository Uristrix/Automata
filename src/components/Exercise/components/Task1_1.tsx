import React, { Dispatch } from 'react';
import Input from '../../Input/Input';

interface Inputs {
  [keys: string]: {
    t10_2?: string | null;
    t10_8?: string | null;
    t10_16?: string | null;
  };
}
export const Task1_1 = ({
  inputs,
  setInputs,
  num,
  header,
}: {
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
  num: number;
  header?: string;
}) => {
  return (
    <div className="w-full">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">
        Выполните перевод заданного числа из десятичной системы счисления в двоичную, восьмеричную и шестнадцатеричную
        систему счисления с заданной точностью. Исходное число содержит три разряда в целой части и три разряда в
        дробной части.
      </p>
      <div className="lg:max-w-[400px] flex flex-col gap-2">
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> ={' '}
          <Input
            value={inputs['trans']?.t10_2 || ''}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], t10_2: e.target.value } });
            }}
          />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> ={' '}
          <Input
            value={inputs['trans']?.t10_8 || ''}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], t10_8: e.target.value } });
            }}
          />
          <sub>8</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> ={' '}
          <Input
            value={inputs['trans']?.t10_16 || ''}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], t10_16: e.target.value } });
            }}
          />
          <sub>16</sub>
        </i>
      </div>
    </div>
  );
};
