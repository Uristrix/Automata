import React, { Dispatch } from 'react';
import Input from '../../Input/Input';

interface Input {
  [keys: string]: {
    tn_2?: string | null;
    tn_8?: string | null;
    t10_2?: string | null;
    t10_n?: string | null;
    t2_3?: string | null;
    t2_n?: string | null;
  };
}
export const Task1_2 = ({
  inputs,
  setInputs,
  num,
  p,
  header,
}: {
  inputs: Input;
  setInputs: Dispatch<Input>;
  num: number;
  p: number;
  header?: string;
}) => {
  return (
    <div className="w-full">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">Целую часть числа переведите в другие системы счисления.</p>

      <div className="lg:max-w-[400px] flex flex-col gap-2">
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>{p}</sub> ={' '}
          <Input
            value={inputs['trans']?.tn_2 || ' '}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], tn_2: e.target.value } });
            }}
          />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>{p}</sub> ={' '}
          <Input
            value={inputs['trans']?.tn_8 || ' '}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], tn_8: e.target.value } });
            }}
          />
          <sub>3</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> ={' '}
          <Input
            value={inputs['trans']?.t10_2 || ' '}
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
            value={inputs['trans']?.t10_n || ' '}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], t10_n: e.target.value } });
            }}
          />
          <sub>{p}</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>2</sub> ={' '}
          <Input
            value={inputs['trans']?.t2_3 || ' '}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], t2_3: e.target.value } });
            }}
          />
          <sub>3</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>2</sub> ={' '}
          <Input
            value={inputs['trans']?.t2_n || ' '}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], t2_n: e.target.value } });
            }}
          />
          <sub>{p}</sub>
        </i>
      </div>
    </div>
  );
};
