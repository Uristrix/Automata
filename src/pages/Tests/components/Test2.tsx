import { useEffect, useState } from 'react';
import { useTimer } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import Timer from '../../../components/Timer/Timer';
import { Task2_1, Task2_2, Task2_3, Task2_4, Task2_5 } from '../../../components/Exercise';
import Button from '../../../components/Button/Button';

const varSegments: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'm', 'g', 'l'];

export const Test2 = () => {
  //TODO: Заполнять автоматом инпуты из стора.
  const [inputs, setInputs] = useState({});
  //TODO: Заглушка пока нет серверного времени.
  const { seconds } = useTimer(new Date(Date.now() + 60 * 60 * 1000));
  const navigate = useNavigate();
  const [variant, setVariant] = useState({
    num: Math.floor(Math.random() * (1023 - 513 + 1)) + 513, // от 513 до 1023
    segment: varSegments[Math.floor(Math.random() * 8)], // от  0 до 8
    D: Math.floor(Math.random() * 2), // 0 до 1
    bias: Math.floor(Math.random() * 7), // 0 до 6
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
      <h2 className="text-2xl text-center font-bold">Контрольная работа № 2</h2>
      <form className="flex flex-col gap-5 text-justify">
        <Task2_1
          inputs={inputs}
          setInputs={setInputs}
          bias={variant.bias}
          segment={variant.segment}
          D={variant.D}
          header="Задание 1."
        />
        <Task2_2 segment={variant.segment} header="Задание 2." />
        <Task2_3 header="Задание 3." />
        <Task2_4 header="Задание 4." />
        <Task2_5 inputs={inputs} setInputs={setInputs} header="Задание 5." />
        <Button style="mx-auto mt-5" type="submit">
          Отправить ответ
        </Button>
      </form>
    </div>
  );
};
