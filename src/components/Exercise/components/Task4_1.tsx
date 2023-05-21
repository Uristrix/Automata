import { Dispatch, PropsWithChildren, useEffect } from 'react';
import Line from './Line';
import { InputsCode } from '../../../model/Inputs';

const inputsParams = [
  {
    name: 'A+B',
    data: [
      { name: 'A`', id: 'A+B_A' },
      { name: 'B`', id: 'A+B_B' },
      { name: 'A+B', id: 'A+B' },
    ],
  },
  {
    name: 'A-B',
    data: [
      { name: 'A`', id: 'A-B_A' },
      { name: 'B`', id: 'A-B_B' },
      { name: 'A-B', id: 'A-B' },
    ],
  },
  {
    name: '-A+B',
    data: [
      { name: 'A`', id: '-A+B_A' },
      { name: 'B`', id: '-A+B_B' },
      { name: '-A+B', id: '-A+B' },
    ],
  },
  {
    name: '-A-B',
    data: [
      { name: 'A`', id: '-A-B_A' },
      { name: 'B`', id: '-A-B_B' },
      { name: '-A-B', id: '-A-B' },
    ],
  },
];

interface stepData {
  name: string;
  data: Array<{ name: string; id: string }>;
}
interface StepLine {
  arr: Array<stepData>;
  inputs: InputsCode;
  invalid: object;
  setInputs: Dispatch<InputsCode>;
}

const StepLines = ({ arr, inputs, setInputs, invalid }: PropsWithChildren<StepLine>) => {
  return (
    <>
      {arr?.map((el, i) => (
        <div className="relative" key={`operation${i}`}>
          <div className="w-full">
            <div className="flex w-full justify-around [&>h3]:font-semibold">
              <div className="flex w-full justify-between gap-2">
                <h3 className="!min-w-[40px] md:!min-w-[58px]"> </h3>
                <div className="flex w-full justify-around [&>h3]:font-semibold">
                  <h3>Пр. код</h3>
                  <h3>Об. код</h3>
                  <h3>Доп. код</h3>
                </div>
              </div>
            </div>
            {el.data?.map((el2, i2) => (
              <>
                <Line id={el2.id} name={el2.name} inputs={inputs} setInputs={setInputs} invalid={invalid} />
                {i2 == 1 && <div className="w-full h-[2px] border-t-2 border-black border-solid mb-2" />}
              </>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const Task4_1 = ({
  header,
  inputs,
  setInputs,
  invalid,
}: {
  header?: string;
  inputs: InputsCode;
  setInputs: Dispatch<InputsCode>;
  invalid: object;
}) => {
  useEffect(() => {
    inputsParams.map((el) => {
      el.data.map((el2) => {
        inputs[el2.name] = { str: '', rev: '', dop: '' };
      });
    });
    setInputs({ ...inputs });
  }, []);
  return (
    <div className="flex-col mt-5">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <StepLines arr={inputsParams} inputs={inputs} setInputs={setInputs} invalid={invalid} />
    </div>
  );
};
