import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../../components/Button/Button';
import Timer from '../../../components/Timer/Timer';
import { useTimer } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import { Task4_1 } from '../../../components/Exercise/components/Task4_1';
import User from '../../../store/user';
import { sendTest } from '../../../utils/test';

export const Test4 = () => {
  const [inputs, setInputs] = useState({});
  const [invalid, setInvalid] = useState({});
  const [result, setResult] = useState({});
  const [disable, setDisable] = useState(false);
  const [randomVal, setRandomVal] = useState<{ A: number; B: number }>({ A: 0, B: 0 });
  //TODO: Заглушка пока нет серверного времени.
  const { seconds } = useTimer(new Date(Date.now() + 60 * 60 * 1000));
  const navigate = useNavigate();

  const SendResult = async (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    let data = {
      A_var: randomVal.A,
      B_var: randomVal.B,
      stud_id: User.user?.id,
    };
    for (const el in inputs) {
      data = {
        ...data,
        [el]: { str: inputs[el]['str'].split(''), rev: inputs[el]['rev'].split(''), dop: inputs[el]['dop'].split('') },
      };
    }
    const res = await sendTest(data, 4);
    if (res.payload.checked) {
      setInvalid(res.payload.checked);
      setResult(res.payload.checked.score);
    }
    console.log(res.payload);
    setDisable(true);
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
    <div className="mx-3 md:mx-auto lg:w-[1000px] md:bg-white md:p-4 md:rounded-2xl md:shadow-2xl">
      <Timer seconds={seconds} />
      <h2 className="text-2xl text-center font-bold">Контрольная работа № 4</h2>
      <h3 className="text-xl text-center font-bold">
        А = {randomVal.A}, В = {randomVal.B}
      </h3>
      <form
        onSubmit={SendResult}
        className="flex flex-col mx-auto mt-5 md:mt-10 w-[330px] md:w-full overflow-x-scroll md:overflow-hidden"
      >
        <Task4_1 inputs={inputs} setInputs={setInputs} invalid={invalid} />
        {!disable ? (
          <Button style="mx-auto mt-5" type="submit">
            Отправить ответ
          </Button>
        ) : (
          <div className="text-lg text-center font-semibold text-green">{`Результат: ${result} / 100`}</div>
        )}
      </form>
    </div>
  );
};
