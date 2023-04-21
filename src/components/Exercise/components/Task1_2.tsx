import React, { Dispatch } from 'react';
import Input from '../../Input/Input';

interface Inputs {
  [keys: string]: {
    trn_2?: string | null;
    trn_8?: string | null;
    tr10_2?: string | null;
    tr10_n?: string | null;
    tr2_3?: string | null;
    tr2_n?: string | null;
  };
}
export const Task1_2 = ({
  inputs,
  setInputs,
  num,
  p,
  header,
}: {
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
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
            value={inputs['trans']?.trn_2 || ''}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], trn_2: e.target.value } });
            }}
          />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>{p}</sub> ={' '}
          <Input
            value={inputs['trans']?.trn_8 || ''}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], trn_8: e.target.value } });
            }}
          />
          <sub>3</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> ={' '}
          <Input
            value={inputs['trans']?.tr10_2 || ''}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], tr10_2: e.target.value } });
            }}
          />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> ={' '}
          <Input
            value={inputs['trans']?.tr10_n || ''}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], tr10_n: e.target.value } });
            }}
          />
          <sub>{p}</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>2</sub> ={' '}
          <Input
            value={inputs['trans']?.tr2_3 || ''}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], tr2_3: e.target.value } });
            }}
          />
          <sub>3</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>2</sub> ={' '}
          <Input
            value={inputs['trans']?.tr2_n || ''}
            onChange={(e) => {
              setInputs({ ...inputs, ['trans']: { ...inputs['trans'], tr2_n: e.target.value } });
            }}
          />
          <sub>{p}</sub>
        </i>
      </div>
    </div>
  );
};
