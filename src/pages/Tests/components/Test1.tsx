import { Task1_1, Task1_2 } from '../../../components/Exercise';
import Button from '../../../components/Button/Button';
import { useEffect, useState } from 'react';
import Timer from '../../../components/Timer/Timer';
import { useTimer } from '../../../hooks';
import { sendTest } from '../../../utils/test';
import User from '../../../store/user';
import Event from '../../../store/event';
import notification from '../../../store/notification';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

export const Test1 = observer(() => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [invalid, setInvalid] = useState({});
  const [result, setResult] = useState({});
  const [disable, setDisable] = useState(false);
  //TODO: Заглушка пока нет серверного времени.
  const { seconds } = useTimer(
    new Date(new Date(Event.event?.date || Date.now()).getTime() + (Event?.event?.length || 0) * 60000),
  );
  const [variant] = useState({
    A_var: Number(`${Math.floor(Math.random() * 256 + 256)}.${Math.floor(Math.random() * 256 + 256)}`),
    system_n: (Math.floor(Math.random() * 3) + 1) * 2 + 1,
    precision: Math.floor(Math.random() * 3 + 4),
  });

  const SendResult = async (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    const data = {
      ...variant,
      ...inputs['trans'],
      numb_with_system: inputs['numb_with_system'],
      stud_id: User.user?.id,
      score: '',
    };
    console.log(data);
    try {
      const res = await sendTest(data, 1);
      if (res.payload.checked) {
        setInvalid(res.payload.checked);
        setResult(res.payload.checked.score);
        console.log(res.payload);
      }
      if (res.error !== undefined) notification.setMessage('Ошибка отправки/алгоритма', 'error');
      setDisable(true);
    } catch {
      notification.setMessage('Ошибка отправки/алгоритма', 'error');
    }
  };

  useEffect(() => {
    //console.log(seconds);
    if (seconds < 1) {
      SendResult();
      navigate('/');
    }
  }, [seconds]);

  return (
    <div className="mx-3 md:mx-auto w-full xl:w-[1000px] md:bg-white p-2 md:p-4 md:rounded-2xl md:shadow-2xl">
      <Timer seconds={seconds} />
      <h2 className="text-2xl text-center font-bold mb-4">Контрольная работа № 1</h2>
      <form className="flex flex-col justify-between gap-5 text-justify" onSubmit={SendResult}>
        <Task1_1
          inputs={inputs}
          setInputs={setInputs}
          invalid={invalid}
          num={variant.A_var}
          precision={variant.precision}
          header="Задание 1."
        />
        <Task1_2
          inputs={inputs}
          setInputs={setInputs}
          p={variant.system_n.toString()}
          header="Задание 2."
          invalid={invalid}
        />
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
});
