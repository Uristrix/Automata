import { Task5_1 } from '../../../components/Exercise/components/Task5_1';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getRandom, sendTrainer } from '../../../utils/training';
import User from '../../../store/user';
import Select from '../../../components/Select/Select';
import notification from '../../../store/notification';

export const Training2 = () => {
  const [inputs, setInputs] = useState({});
  const [invalid, setInvalid] = useState({});
  const [result, setResult] = useState({});
  const [disable, setDisable] = useState(false);
  const [variant] = useState({
    C1: 16,
    A1: getRandom(1, 16),
    B1: getRandom(1, 16),
  });

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
        X: variant.A1,
        Y: variant.B1,
        S: { S1: '', S2: '', S3: '', S4: '', S5: '', S6: '', S7: '', S8: '', correct: '' },
        result: inputs['second']?.result?.replace('.', '')?.split('') || [],
      },
    };

    ['second'].map((name) => {
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
    console.log(inputs);
    console.log(data);
    try {
      const res = await sendTrainer(data, 5);
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
      <form
        onSubmit={SendResult}
        className="flex flex-col mx-auto mt-2 md:mt-5 w-[350px] md:w-full overflow-x-scroll md:overflow-hidden"
      >
        <Task5_1
          inputs={inputs}
          setInputs={setInputs}
          invalid={invalid}
          countBlock={2}
          name="second"
          header="Задание"
          text={`Выполните умножение ${variant.A1}/${variant.C1} на ${variant.B1}/${variant.C1} в прямом коде c помощью умножения на 2 разряда множителей.`}
        />
        <Button style="mx-auto mt-5" type="submit">
          Проверить
        </Button>
        <Button style="min-w-[300px] mt-5 ml-auto">
          <Link className="w-[90%]" to={'/lecture/4_9'}>
            Перейти к примеру →
          </Link>
        </Button>
      </form>
    </div>
  );
};
export default Training2;
