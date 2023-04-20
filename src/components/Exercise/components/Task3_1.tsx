import { Dispatch } from 'react';
import Line from './Line';

const inputsParams = [
  { name: 'A', id: 'A' },
  { name: 'B', id: 'B' },
  { name: '-A', id: '-A' },
  { name: '-B', id: '-B' },
  { name: 'A*2^-2', id: 'A*2^-2' },
  { name: 'A*2^-3', id: 'A*2^-3' },
  { name: 'A*2^+3', id: 'A*2^+3' },
  { name: 'A*2^+4', id: 'A*2^+4' },
  { name: 'B*2^-2', id: 'B*2^-2' },
  { name: 'B*2^-3', id: 'B*2^-3' },
  { name: 'B*2^+3', id: 'B*2^+3' },
  { name: 'B*2^+4', id: 'B*2^+4' },
];

interface Inputs {
  [keys: string]: {
    straight?: string | null;
    back?: string | null;
    additional?: string | null;
  };
}

export const Task3_1 = ({
  header,
  inputs,
  setInputs,
}: {
  header?: string;
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
}) => {
  return (
    <div>
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      <div className="flex w-full justify-between gap-2">
        <div className="!min-w-[40px] md:!min-w-[58px]"> </div>
        <div className="flex w-full justify-around [&>h3]:font-semibold">
          <h3>Пр. код</h3>
          <h3>Об. код</h3>
          <h3>Доп. код</h3>
        </div>
      </div>

      {inputsParams?.map((el, i) => (
        <Line key={`line${i}`} inputs={inputs} setInputs={setInputs} name={el.name} id={el.id} />
      ))}
    </div>
  );
};
