/* eslint-disable sonarjs/no-duplicate-string */
import Input from '../../components/Input/Input';
import { Dispatch, PropsWithChildren, useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button/Button';
import Timer from '../../components/Timer/Timer';
import { useTimer } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Inputs } from '../../model/Control2';

interface Line {
  id: string;
  name: string;
  style?: string;
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
}

const Line = ({ id, name, inputs, setInputs, style }: PropsWithChildren<Line>) => {
  return (
    <div className={classNames('flex gap-2 mb-2', style)}>
      <div className=" min-w-[40px] md:min-w-[58px] text-xs md:text-base flex items-center">{name}</div>
      <Input
        classes={{ input: '!rounded-none' }}
        value={inputs[id]?.straight || undefined}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], straight: e.target.value } });
        }}
      />
      <Input
        classes={{ input: '!rounded-none' }}
        value={inputs[id]?.back || undefined}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], back: e.target.value } });
        }}
      />
      <Input
        classes={{ input: '!rounded-none' }}
        value={inputs[id]?.additional || undefined}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], additional: e.target.value } });
        }}
      />
    </div>
  );
};

interface stepData {
  name: string;
  data: Array<{ name: string; id: string }>;
}
interface StepLine {
  arr: Array<stepData>;
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
}

const StepLines = ({ arr, inputs, setInputs }: PropsWithChildren<StepLine>) => {
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
                <Line id={el2.id} name={el2.name} inputs={inputs} setInputs={setInputs} />
                {i2 == 1 && <div className="w-full h-[2px] border-t-2 border-black border-solid mb-2" />}
              </>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const inputsParams1 = [
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
const inputsParams2 = [
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

const SecondTest = () => {
  //TODO: Заполнять автоматом инпуты из стора.
  const [inputs, setInputs] = useState<Inputs>({});
  const [randomVal, setRandomVal] = useState<{ A: number; B: number }>({ A: 0, B: 0 });
  //TODO: Заглушка пока нет серверного времени.
  const { seconds } = useTimer(new Date(Date.now() + 60 * 60 * 1000));
  const navigate = useNavigate();

  const SendResult = (e?: { preventDefault: () => void }) => {
    //TODO: Поправить, когда появится запрос
    // axios.post('postFirstLab', inputs);
    e?.preventDefault();
    console.log(inputs);
  };

  useEffect(() => {
    window.scroll(0, 0);
    return setRandomVal({
      A: Math.floor(Math.random() * (63 - -63) + -63),
      B: Math.floor(Math.random() * (63 - -63) + -63),
    });
  }, []);

  useEffect(() => {
    //console.log(seconds);
    if (seconds < 1) {
      SendResult();
      navigate('/');
    }
  }, [seconds]);
  return (
    <>
      <Timer seconds={seconds} />
      <h2 className="text-2xl text-center font-bold">Контрольная работа № 2</h2>
      <h3 className="text-xl text-center font-bold">
        А = {randomVal.A}, В = {randomVal.B}
      </h3>
      <form
        onSubmit={SendResult}
        className="flex flex-col mx-auto mt-5 md:mt-10 w-[330px] md:w-[700px] lg:w-[1000px] overflow-x-scroll md:overflow-hidden"
      >
        <div>
          <h2 className="text-center font-semibold text-lg mb-2">Переведите числа в данные коды</h2>
          <div className="flex w-full justify-between gap-2">
            <h3 className="!min-w-[40px] md:!min-w-[58px]"> </h3>
            <div className="flex w-full justify-around [&>h3]:font-semibold">
              <h3>Пр. код</h3>
              <h3>Об. код</h3>
              <h3>Доп. код</h3>
            </div>
          </div>

          {inputsParams1?.map((el, i) => (
            <Line key={`line${i}`} inputs={inputs} setInputs={setInputs} name={el.name} id={el.id} />
          ))}
        </div>
        <div className="flex-col mt-5">
          <h2 className="text-center font-semibold text-lg mb-2">Посчитайте в столбик</h2>
          <StepLines arr={inputsParams2} inputs={inputs} setInputs={setInputs} />
        </div>
        <Button type="submit" style="!ml-auto mt-10">
          Отправить ответ
        </Button>
      </form>
    </>
  );
};

export default SecondTest;
