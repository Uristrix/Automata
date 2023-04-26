import { Task1_1, Task1_2 } from '../../../components/Exercise';
import Button from '../../../components/Button/Button';
import { useEffect, useState } from 'react';
import Timer from '../../../components/Timer/Timer';
import { useTimer } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

export const Test1 = () => {
  //TODO: Заполнять автоматом инпуты из стора.
  const [inputs, setInputs] = useState({});
  //TODO: Заглушка пока нет серверного времени.
  const { seconds } = useTimer(new Date(Date.now() + 60 * 60 * 1000));
  const navigate = useNavigate();
  const [variant, setVariant] = useState({
    num: Number(`${Math.floor(Math.random() * 256 + 256)}.${Math.floor(Math.random() * 256 + 256)}`),
    p: (Math.floor(Math.random() * 3) + 1) * 2 + 1,
  });

  const SendResult = (e?: { preventDefault: () => void }) => {
    //TODO: Поправить, когда появится запрос
    // axios.post('postFirstLab', inputs);
    e?.preventDefault();
    console.log(inputs);
  };

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
      <h2 className="text-2xl text-center font-bold mb-4">Контрольная работа № 1</h2>
      <form className="flex flex-col gap-5 text-justify ">
        <Task1_1 inputs={inputs} setInputs={setInputs} num={variant.num} header="Задание 1." />
        <Task1_2
          inputs={inputs}
          setInputs={setInputs}
          num={Math.trunc(variant.num)}
          p={variant.p}
          header="Задание 2."
        />
        <Button style="mx-auto mt-5" type="submit">
          Отправить ответ
        </Button>
      </form>
    </div>
  );
};
