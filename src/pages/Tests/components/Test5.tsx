import { Task5_1 } from '../../../components/Exercise/components/Task5_1';
import Button from '../../../components/Button/Button';
import React, { useEffect, useState } from 'react';
import Select from '../../../components/Select/Select';
import { sendTest } from '../../../utils/test';
import User from '../../../store/user';
import notification from '../../../store/notification';
import { observer } from 'mobx-react-lite';
import { useTimer } from '../../../hooks';
import Event from '../../../store/event';
import { useNavigate } from 'react-router-dom';
import Timer from '../../../components/Timer/Timer';
const C = [8, 16, 32];

const options = [
  { value: '1', label: 'Алгоритм бута' },
  { value: '2', label: 'Умножение на 2 разряда множителя' },
];
export const Test5 = observer(() => {
  const [inputs, setInputs] = useState({});
  const [invalid, setInvalid] = useState({});
  const [selectedSort, setSelectedSort] = useState<{ value: string; label: string } | null>(options[0]);
  const [result, setResult] = useState({});
  const { seconds } = useTimer(
    new Date(new Date(Event.event?.date || Date.now()).getTime() + (Event?.event?.length || 0) * 60000),
  );
  const [variant, setVariant] = useState({
    C: C[Math.floor(Math.random() * 3)],
    A: 1,
    B: 1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    //console.log(seconds);
    if (seconds < 1) {
      SendResult();
      navigate('/');
    }
  }, [seconds]);

  useEffect(() => {
    setVariant((prev) => ({
      ...prev,
      A: Math.floor(Math.random() * (prev.C - 1) + 1),
      B: Math.floor(Math.random() * (prev.C - 1) + 1),
    }));
  }, []);

  const SendResult = async (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    let data: object = {
      stud_id: User.user?.id,
      X: variant.A,
      Y: variant.B,
      S: { S1: '', S2: '', S3: '', S4: '', S5: '', S6: '', S7: '', S8: '' },
      result: inputs['multi']?.result?.split(''),
      score: 0,
    };

    for (const el in inputs?.['multi']?.['S']) {
      data = {
        ...data,
        ['S']: { ...data['S'], [el]: inputs?.['multi']?.['S']?.[el]?.split('') },
      };
    }
    try {
      const res = await sendTest(data, 5);
      console.log(data, 5);
      if (res.payload.checked) {
        setInvalid(res.payload.checked);
        setResult(res.payload.checked.score);
      }
      console.log(res.payload);
      if (res.error !== undefined) notification.setMessage('Ошибка отправки/алгоритма', 'error');
    } catch {
      notification.setMessage('Ошибка отправки/алгоритма', 'error');
    }
  };
  return (
    <div className="mx-3 md:mx-auto w-full xl:w-[1000px] md:bg-white md:p-4 md:rounded-2xl md:shadow-2xl">
      <h1 className="text-2xl text-center font-bold">Контрольная работа № 5</h1>
      <h2 className="text-xl text-center font-bold">{`А = ${variant.A}/${variant.C}, В = ${variant.B}/${variant.C}`}</h2>
      <h3 className="text-xl text-center font-bold mt-2">Умножение в прямом коде </h3>
      <form
        onSubmit={SendResult}
        className="flex flex-col mx-auto mt-2 md:mt-5 w-[350px] md:w-full overflow-x-scroll md:overflow-hidden"
      >
        <Select
          value={selectedSort}
          onChange={setSelectedSort}
          options={options}
          placeholder="Выберите алгоритм"
          classes={{ root: 'min-w-[300px] w-[300px] m-auto mb-2' }}
        />
        <Task5_1 inputs={inputs} setInputs={setInputs} invalid={invalid} countBlock={2} />

        <Button style="mx-auto mt-5" type="submit">
          Отправить ответ
        </Button>
      </form>
      <Timer seconds={seconds} />
    </div>
  );
});
