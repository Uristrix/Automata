import Input from '../../Input/Input';
import { Dispatch, useEffect } from 'react';
import { Inputs } from '../../../model/Inputs';
import Button from '../../Button/Button';

const task = 'sintez';

export const Task2_5 = ({
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
    inputs[task] = { base: '', sheffer: '', pirs: '' };
    setInputs({ ...inputs });
  }, []);
  return (
    <div className="lg:max-w-[700px]">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <p className="mb-2">Выполните синтез функции в базисах: основном, Шеффера, Пирса.</p>
      <div className="flex gap-2 flex-col">
        <div className="flex items-center gap-1">
          <span className="min-w-[150px]">Основной базиc = </span>
          <Input
            placeholder="(x1 & nx2) v (nx3 & x4) ИЛИ (nx1 v x2) & (x3 v nx4)"
            variant="textarea"
            value={inputs[task]?.base || ''}
            onChange={(e) => setInputs({ ...inputs, [task]: { ...inputs[task], base: e.target.value } })}
            invalid={invalid['Base']}
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="min-w-[150px]">Базис Шеффера = </span>
          <Input
            placeholder="(x1 / (x2 / x2)) / ((x3 / x3) / x4)"
            variant="textarea"
            value={inputs[task]?.sheffer || ''}
            onChange={(e) => setInputs({ ...inputs, [task]: { ...inputs[task], sheffer: e.target.value } })}
            invalid={invalid['Sheffer']}
          />
        </div>
        <div className="flex items-center gap-1">
          <div className="min-w-[150px] flex flex-col">
            <span>Базис Пирса = </span>
            <Button
              style="!w-[65%]"
              onClick={() => setInputs({ ...inputs, [task]: { ...inputs[task], pirs: inputs[task].pirs + '↓' } })}
            >
              ↓
            </Button>
          </div>
          <Input
            placeholder="(x1 ↓ (x2 ↓ x2)) ↓ ((x3 ↓ x3) ↓ x4)"
            variant="textarea"
            value={inputs[task]?.pirs || ''}
            onChange={(e) => setInputs({ ...inputs, [task]: { ...inputs[task], pirs: e.target.value } })}
            invalid={invalid['Pirs']}
          />
        </div>
      </div>
    </div>
  );
};
