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
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> ТДНФ = </span>
        <Input
          variant="textarea"
          value={inputs[task]?.sdnf4 || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], sdnf4: e.target.value } });
          }}
        />
      </div>
      <p className="mb-2">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> Ответ = </span>
        <Input
          value={inputs[task]?.sdnf4_answer || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], sdnf4_answer: e.target.value } });
          }}
        />
      </div>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> ТКНФ = </span>
        <Input
          variant="textarea"
          value={inputs[task]?.sknf4 || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], sknf4: e.target.value } });
          }}
        />
      </div>
      <p className="mb-2">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> Ответ = </span>
        <Input
          value={inputs[task]?.sknf4_answer || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], sknf4_answer: e.target.value } });
          }}
        />
      </div>
    </div>
  );
};
