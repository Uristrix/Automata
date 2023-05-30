import React, { Dispatch, useEffect } from 'react';
import { MapCarno } from '../../mapCarno/mapCarno';
import Input from '../../Input/Input';
import { Inputs } from '../../../model/Inputs';

const task = 'Carno';

export const Task2_4 = ({
  inputs,
  setInputs,
  header,
  invalid,
}: {
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
  header?: string;
  invalid: object;
}) => {
  useEffect(() => {
    inputs[task] = { tdnf: '', tknf: '' };
    Array.from(Array(16).keys()).map((el) => {
      inputs[task] = { ...inputs[task], [`carno_${el}`]: '' };
    });
    setInputs({ ...inputs });
  }, []);
  return (
    <div className="lg:max-w-[400px]">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">
        Минимизируйте функцию из п. 3 методом Карно. Найдите тупиковую ДНФ, тупиковую КНФ. Рекомендуется использовать
        следующую разметку карты Карно.
      </p>
      <MapCarno inputs={inputs} setInputs={setInputs} name={task} invalid={invalid} />
      <p className="mb-2">Пример: (x1 & x2 & nx3) v (x3 & nx4 & nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> ТДНФ = </span>
        <Input
          variant="textarea"
          value={inputs[task]?.tdnf || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], tdnf: e.target.value } });
          }}
          invalid={invalid['carno_tdnf']}
        />
      </div>
      <p className="mb-2">Пример: (x1 v x2 v nx3) & (x3 v nx4 v nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> ТКНФ = </span>
        <Input
          variant="textarea"
          value={inputs[task]?.tknf || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], tknf: e.target.value } });
          }}
          invalid={invalid['carno_tknf']}
        />
      </div>
    </div>
  );
};
