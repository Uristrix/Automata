import Input from '../../Input/Input';
import { Dispatch, useEffect } from 'react';
import { Inputs } from '../../../model/Inputs';

const task = 'kvain';

export const Task2_3 = ({
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
    inputs[task] = { sdnf: '', sdnf_answer: '', sknf: '', sknf_answer: '' };
    setInputs({ ...inputs });
  }, []);
  return (
    <div className="lg:max-w-[700px]">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">Выполните минимизацию функции из п. 4 методом Квайна, Квайна-мак-Класки.</p>
      <p className=" mb-2 text-sm text-gray-500">*Пример: (x1 & x2 & nx3) v (x3 & nx4 & nx2) </p>
      <div className="flex flex-nowrap items-center mb-2">
        <span className="min-w-[150px]"> ДНФ Квайна = </span>
        <Input
          variant="textarea"
          value={inputs[task]?.sdnf || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], sdnf: e.target.value } });
          }}
          invalid={invalid['Quine_DNF']}
        />
      </div>
      <div className="flex items-center mb-2">
        <span className="min-w-[150px]"> ДНФ Квайна-МК = </span>
        <Input
          value={inputs[task]?.sdnf_answer || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], sdnf_answer: e.target.value } });
          }}
          invalid={invalid['Quine_MC_DNF']}
        />
      </div>
      <p className="mb-2 text-sm text-gray-500">*Пример: (x1 v x2 v nx3) & (x3 v nx4 v nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[150px]"> КНФ Квайна = </span>
        <Input
          variant="textarea"
          value={inputs[task]?.sknf || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], sknf: e.target.value } });
          }}
          invalid={invalid['Quine_KNF']}
        />
      </div>
      <div className="flex items-center">
        <span className="min-w-[150px]"> КНФ Квайна-МК = </span>
        <Input
          value={inputs[task]?.sknf_answer || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], sknf_answer: e.target.value } });
          }}
          invalid={invalid['Quine_MC_KNF']}
        />
      </div>
    </div>
  );
};
