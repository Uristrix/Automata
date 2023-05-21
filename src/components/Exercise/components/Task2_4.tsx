import React, { Dispatch } from 'react';
import { MapCarno } from '../../mapCarno/mapCarno';
import Input from '../../Input/Input';
import { Inputs } from '../../../model/Inputs';

const task = 'Carno';

export const Task2_4 = ({
  inputs,
  setInputs,
  header,
}: {
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
  header?: string;
}) => {
  return (
    <div className="lg:max-w-[400px]">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">
        Минимизируйте функцию из п. 3 методом Карно. Найдите тупиковую ДНФ, тупиковую КНФ. Рекомендуется использовать
        следующую разметку карты Карно.
      </p>
      <MapCarno inputs={inputs} setInputs={setInputs} name={task} />
      <p className="mb-2">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> ТДНФ = </span>
        <Input
          variant="textarea"
          value={inputs[task]?.tdnf4 || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], tdnf4: e.target.value } });
          }}
        />
      </div>
      <p className="mb-2">Пример: (x1 | x2 | nx3) & (x3 | nx4 | nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> ТКНФ = </span>
        <Input
          variant="textarea"
          value={inputs[task]?.tknf4 || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], tknf4: e.target.value } });
          }}
        />
      </div>
    </div>
  );
};
