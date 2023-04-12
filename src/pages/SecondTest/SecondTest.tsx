import Input from '../../components/Input/Input';
import { Dispatch, useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button/Button';
import Timer, { useTimer } from '../../components/Timer/Timer';
import { useNavigate } from 'react-router-dom';

interface Inputs {
  [keys: string]: {
    straight?: string | null;
    back?: string | null;
    additional?: string | null;
  };
}
const Line = ({ name, inputs, setInputs }: { name: string; inputs: Inputs; setInputs: Dispatch<Inputs> }) => {
  return (
    <div className="flex gap-2 mb-2">
      <div className=" min-w-[40px] md:min-w-[58px] text-xs md:text-base flex items-center">{name}</div>
      <Input
        value={inputs[name]?.straight || undefined}
        onChange={(e) => {
          setInputs({ ...inputs, [name]: { ...inputs[name], straight: e.target.value } });
        }}
      />
      <Input
        value={inputs[name]?.back || undefined}
        onChange={(e) => {
          setInputs({ ...inputs, [name]: { ...inputs[name], back: e.target.value } });
        }}
      />
      <Input
        value={inputs[name]?.additional || undefined}
        onChange={(e) => {
          setInputs({ ...inputs, [name]: { ...inputs[name], additional: e.target.value } });
        }}
      />
    </div>
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
  //TODO: Заполнять автоматом инпуты из стора.
  const [inputs, setInputs] = useState<Inputs>({});
  const [randomVal, setRandomVal] = useState<{ A: number; B: number }>({ A: 0, B: 0 });
  //TODO: Заглушка пока нет серверного времени.
  const { seconds } = useTimer(new Date(Date.now() + 5 * 60 * 1000));
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
      A: Math.floor(Math.random() * (64 - -64) + -64),
      B: Math.floor(Math.random() * (64 - -64) + -64),
    });
  }, []);

  useEffect(() => {
    console.log(seconds);
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
        <div className="flex w-full justify-between gap-2">
          <h3 className="!min-w-[40px] md:!min-w-[58px]"> </h3>
          <div className="flex w-full justify-around [&>h3]:font-semibold">
            <h3>Пр. код</h3>
            <h3>Об. код</h3>
            <h3>Доп. код</h3>
          </div>
        </div>

        {inputsParams?.map((el, i) => (
          <Line key={`line${i}`} inputs={inputs} setInputs={setInputs} name={el.name} />
        ))}
        <Button type="submit" style="!ml-auto mt-10">
          Отправить ответ
        </Button>
      </form>
    </>
  );
};

export default SecondTest;
