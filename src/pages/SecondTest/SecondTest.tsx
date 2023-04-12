import Input from '../../components/Input/Input';
import { Dispatch, useEffect, useState } from 'react';

interface Inputs {
  [keys: string]: {
    straight?: string | null;
    back?: string | null;
    additional?: string | null;
  };
}
const Line = ({ name, inputs, setInputs }: { name: string; inputs: Inputs; setInputs: Dispatch<Inputs> }) => {
  return (
    <tr>
      <th className="pr-2">{name}</th>
      <td>
        <Input
          variant="control"
          value={inputs[name]?.straight || ''}
          onChange={(e) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setInputs((prev: Inputs) => ({
              ...prev,
              kek: e.target.value,
            }));
          }}
        />
      </td>
      <td>
        <Input variant="control" />
      </td>
      <td>
        <Input variant="control" />
      </td>
    </tr>
  );
};

const inputsParams = [
  { name: 'A', id: '' },
  { name: 'B', id: '' },
  { name: '-A', id: '' },
  { name: '-B', id: '' },
  { name: 'A*2^-2', id: '' },
  { name: 'A*2^-3', id: '' },
  { name: 'A*2^+3', id: '' },
  { name: 'A*2^+4', id: '' },
  { name: 'B*2^-2', id: '' },
  { name: 'B*2^-3', id: '' },
  { name: 'B*2^+3', id: '' },
  { name: 'B*2^+4', id: '' },
  { name: 'A+B', id: '' },
  { name: 'A-B', id: '' },
  { name: '-A+B', id: '' },
  { name: '-A-B', id: '' },
];

const SecondTest = () => {
  const [inputs, setInputs] = useState<Inputs>({});
  const [randomVal, setRandomVal] = useState<{ A: number; B: number }>({ A: 0, B: 0 });

  useEffect(() => {
    return setRandomVal({
      A: Math.floor(Math.random() * (64 - -64) + -64),
      B: Math.floor(Math.random() * (64 - -64) + -64),
    });
  }, []);

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  return (
    <div className="mx-3">
      <h2 className="text-2xl text-center font-bold">Контрольная работа № 2</h2>
      <h3 className="text-xl text-center font-bold">
        А = {randomVal.A}, В = {randomVal.B}
      </h3>
      <table className="mx-auto mt-10">
        <tr>
          <th></th>
          <th>Пр. код</th>
          <th>Об. код</th>
          <th>Доп. код</th>
        </tr>
        {inputsParams?.map((el, i) => (
          <Line key={`line${i}`} inputs={inputs} setInputs={setInputs} name={el.name} />
        ))}
      </table>
    </div>
  );
};

export default SecondTest;
