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
export const Test8 = observer(() => {
  const [inputs, setInputs] = useState({});
  const [invalid, setInvalid] = useState({});
  const [result, setResult] = useState({});
  const [disable, setDisable] = useState(false);
  const { seconds } = useTimer(
    new Date(new Date(Event.event?.date || Date.now()).getTime() + (Event?.event?.length || 0) * 60000),
  );
  const [variant, setVariant] = useState({
    C: 16,
    A1: getRandom(1, 16),
    B1: getRandom(1, 16),
    A2: getRandom(1, 16),
    B2: getRandom(1, 16),
    A3: getRandom(1, 16),
    B3: getRandom(1, 16),
  });

  const navigate = useNavigate();

  useEffect(() => {
    setVariant({ ...variant, A1: getRandom(1, 16), A2: getRandom(1, 16), A3: getRandom(1, 16) });
    setVariant({
      ...variant,
      B1: getRandom(1, variant.A1),
      B2: getRandom(1, variant.A2),
      B3: getRandom(1, variant.A3),
    });
  }, []);

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
        Z: [],
      },
      second: {
        X: variant.A2,
        Y: variant.B2,
        S: { S1: '', S2: '', S3: '', S4: '', S5: '', S6: '', S7: '', S8: '', correct: '' },
        result: inputs['second']?.result?.replace('.', '')?.split('') || [],
        Z: [],
      },
      third: {
        X: variant.A3,
        Y: variant.B3,
        S: { S1: '', S2: '', S3: '', S4: '', S5: '', S6: '', S7: '', S8: '', correct: '' },
        result: inputs['third']?.result?.replace('.', '')?.split('') || [],
        Z: [],
      },
    };
    ['first', 'second', 'third'].map((name) => {
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

    console.log(data);
    try {
      const res = await sendTest(data, 8);
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
      <h1 className="text-2xl text-center font-bold">Контрольная работа № 8</h1>
      <h3 className="text-xl text-center font-bold mt-2">Деление</h3>
      <form
        onSubmit={SendResult}
        className="flex flex-col mx-auto mt-2 md:mt-5 w-[350px] md:w-full overflow-x-scroll md:overflow-hidden gap-4"
      >
        <Task5_1
          inputs={inputs}
          setInputs={setInputs}
          invalid={invalid}
          countBlock={2}
          name="first"
          header="Задание 1."
          Z={true}
          text={`Выполните деление ${variant.A1}/${variant.C} на ${variant.B1}/${variant.C} без восстановления со сдвигом остатка.`}
        />
        <Task5_1
          inputs={inputs}
          setInputs={setInputs}
          invalid={invalid}
          countBlock={2}
          name="second"
          header="Задание 2."
          Z={true}
          text={`Выполните деление ${variant.A2}/${variant.C} на ${variant.B2}/${variant.C} без восстановления со сдвигом делителя.`}
        />
        <Task5_1
          inputs={inputs}
          setInputs={setInputs}
          invalid={invalid}
          countBlock={2}
          name="third"
          header="Задание 3."
          Z={true}
          text={`Выполните деление ${variant.A3}/${variant.C} на ${variant.B3}/${variant.C} с восстановлением остатка.`}
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
