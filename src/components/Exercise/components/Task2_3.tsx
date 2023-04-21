import Input from '../../Input/Input';
import { Dispatch } from 'react';

interface Inputs {
  [keys: string]: {
    [keys: string]: string | null;
  };
}

export const Task2_3 = ({
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
      <p className="mb-2">Выполните минимизацию функции из п. 4 методом Квайна, Квайна-мак-Класки.</p>
      <div className="flex flex-nowrap items-center mb-2">
        <span className="min-w-[60px]"> СДНФ = </span>
        <Input
          variant="textarea"
          value={inputs['trans']?.sdnf3 || ''}
          onChange={(e) => {
            setInputs({ ...inputs, ['trans']: { ...inputs['trans'], sdnf3: e.target.value } });
          }}
        />
      </div>
      <p className="mb-2">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> Ответ = </span>
        <Input
          value={inputs['trans']?.sdnf3_answer || ''}
          onChange={(e) => {
            setInputs({ ...inputs, ['trans']: { ...inputs['trans'], sdnf3_answer: e.target.value } });
          }}
        />
      </div>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> СКНФ = </span>
        <Input
          variant="textarea"
          value={inputs['trans']?.sknf3 || ''}
          onChange={(e) => {
            setInputs({ ...inputs, ['trans']: { ...inputs['trans'], sknf3: e.target.value } });
          }}
        />
      </div>
      <p className="mb-2">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center">
        <span className="min-w-[60px]"> Ответ = </span>
        <Input
          value={inputs['trans']?.sknf3_answer || ''}
          onChange={(e) => {
            setInputs({ ...inputs, ['trans']: { ...inputs['trans'], sknf3_answer: e.target.value } });
          }}
        />
      </div>
    </div>
  );
};
