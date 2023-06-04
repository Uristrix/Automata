import { Task5_1 } from '../../../components/Exercise/components/Task5_1';
import Button from '../../../components/Button/Button';
import React, { useEffect, useState } from 'react';
import { getRandom, sendTest } from '../../../utils/test';
import User from '../../../store/user';
import notification from '../../../store/notification';
import { observer } from 'mobx-react-lite';
import Timer from '../../../components/Timer/Timer';
import { useTimer } from '../../../hooks';
import Event from '../../../store/event';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line sonarjs/cognitive-complexity
export const Test6 = observer(() => {
  const [inputs, setInputs] = useState({});
  const [invalid, setInvalid] = useState({});
  const [result, setResult] = useState({});
  const [disable, setDisable] = useState(false);
  const { seconds } = useTimer(
    new Date(new Date(Event.event?.date || Date.now()).getTime() + (Event?.event?.length || 0) * 60000),
  );
  const [variant] = useState({
    C1: 16,
    A1: getRandom(1, 16),
    B1: getRandom(-15, 16),
    C2: 16,
    A2: getRandom(1, 16),
    B2: getRandom(-15, 0),
  });
  const navigate = useNavigate();

  useEffect(() => {
    //console.log(seconds);
    if (seconds < 1) {
      SendResult();
      navigate('/');
    }
  }, [seconds]);

  const SendResult = async (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    let data: object = {
      stud_id: User.user?.id,
      score: 0,
      first: {
        X: variant.A1,
        Y: variant.B1,
        S: { S1: '', S2: '', S3: '', S4: '', S5: '', S6: '', S7: '', S8: '', correct: '' },
        result: inputs['first']?.result?.replace('.', '')?.split('') || [],
      },
      second: {
        X: variant.A2,
        Y: variant.B2,
        S: { S1: '', S2: '', S3: '', S4: '', S5: '', S6: '', S7: '', S8: '', correct: '' },
        result: inputs['second']?.result?.replace('.', '')?.split('') || [],
      },
    };
    ['first', 'second'].map((name) => {
      for (const el in inputs?.[name]?.['S']) {
        data = {
          ...data,
          [name]: {
            ...data?.[name],
            ['S']: { ...data?.[name]?.['S'], [el]: inputs?.[name]?.['S']?.[el]?.replace('.', '')?.split('') },
          },
        };
      }
    });
    try {
      const res = await sendTest(data, 6);
      if (res.payload.checked) {
        setInvalid(res.payload.checked);
        setResult(res.payload.checked.score);
        setDisable(true);
        console.log(res.payload);
      }
      if (res.error !== undefined) notification.setMessage('Ошибка отправки/алгоритма', 'error');
    } catch {
      notification.setMessage('Ошибка отправки/алгоритма', 'error');
    }
  };
  return (
    <div className="mx-3 md:mx-auto w-full xl:w-[1000px] md:bg-white md:p-4 md:rounded-2xl md:shadow-2xl">
      <h1 className="text-2xl text-center font-bold">Контрольная работа № 6</h1>
      <h3 className="text-xl text-center font-bold mt-2">Умножение чисел в обратном коде </h3>
      <form
        onSubmit={SendResult}
        className="flex flex-col mx-auto mt-2 md:mt-5 w-[330px] md:w-full overflow-x-scroll md:overflow-hidden gap-4"
      >
        <Task5_1
          inputs={inputs}
          setInputs={setInputs}
          invalid={invalid}
          countBlock={2}
          name="first"
          header="Задание 1."
          text={`Выполните умножение ${variant.A1}/${variant.C1} на ${variant.B1}/${variant.C1} в обратном коде с коррекцией результат.`}
        />
        <Task5_1
          inputs={inputs}
          setInputs={setInputs}
          invalid={invalid}
          countBlock={2}
          name="second"
          header="Задание 2."
          text={`Выполните умножение ${variant.A2}/${variant.C2} на ${variant.B2}/${variant.C2} в обратном коде с преобразованием множителя.`}
        />
        {!disable ? (
          <Button style="mx-auto mt-5" type="submit">
            Отправить ответ
          </Button>
        ) : (
          <div className="text-lg text-center font-semibold text-green">{`Результат: ${result} / 100`}</div>
        )}
      </form>
      <Timer seconds={seconds} />
    </div>
  );
});
