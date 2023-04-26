import { useEffect, useState } from 'react';
import axios from 'axios';
import { Task3_1 } from '../../../components/Exercise/components/Task3_1';
import Button from '../../../components/Button/Button';
import Timer from '../../../components/Timer/Timer';
import { useTimer } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

export const Test3 = () => {
  //TODO: Заполнять автоматом инпуты из стора.
  const [inputs, setInputs] = useState({});
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
    <div className="mx-3 md:mx-auto lg:w-[1000px] md:bg-white md:p-4 md:rounded-2xl md:shadow-2xl">
      <Timer seconds={seconds} />
      <h2 className="text-2xl text-center font-bold">Контрольная работа № 3</h2>
      <h3 className="text-xl text-center font-bold">
        А = {randomVal.A}, В = {randomVal.B}
      </h3>
      <form
        onSubmit={SendResult}
        className="flex flex-col mx-auto mt-5 md:mt-10 w-[330px] md:w-full overflow-x-scroll md:overflow-hidden"
      >
        <Task3_1 inputs={inputs} setInputs={setInputs} />
        <Button style="mx-auto mt-5" type="submit">
          Отправить ответ
        </Button>
      </form>
    </div>
  );
};
