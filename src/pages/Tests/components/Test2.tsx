import { useEffect, useState } from 'react';
import { useTimer } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import Timer from '../../../components/Timer/Timer';
import { Task2_1, Task2_2, Task2_3, Task2_4, Task2_5 } from '../../../components/Exercise';
import Button from '../../../components/Button/Button';
import User from '../../../store/user';
import { sendTest } from '../../../utils/test';
import notification from '../../../store/notification';
import { observer } from 'mobx-react-lite';
import Event from '../../../store/event';

const varSegments: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'm', 'g', 'l'];

// eslint-disable-next-line sonarjs/cognitive-complexity
export const Test2 = observer(() => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const { seconds } = useTimer(
    new Date(new Date(Event.event?.date || Date.now()).getTime() + (Event?.event?.length || 0) * 60000),
  );
  const [invalid, setInvalid] = useState({});
  const [result, setResult] = useState({});
  const [disable, setDisable] = useState(false);
  const [variant, setVariant] = useState({
    segment: varSegments[Math.floor(Math.random() * 8)], // от  0 до 8
    D: Math.floor(Math.random() * 2), // 0 до 1
    offset: Math.floor(Math.random() * 7), // 0 до 6
  });

  const SendResult = async (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    console.log(inputs);
    const data: object = {
      ...variant,
      stud_id: User.user?.id,
      score: 0,
      var_seg: inputs?.['table']?.['var_seg'] || '',
      Fsdnf: inputs?.['table']?.['sdnf'][0] || '',
      Fsknf: inputs?.['table']?.['sknf'][0] || '',
      Quine_DNF: inputs?.['kvain']?.['sdnf'] || '',
      Quine_KNF: inputs?.['kvain']?.['sknf'] || '',
      Quine_MC_DNF: inputs?.['kvain']?.['sdnf_answer'] || '',
      Quine_MC_KNF: inputs?.['kvain']?.['sknf_answer'] || '',
      Carno: inputs?.['Carno'] || {},
      carno_tdnf: inputs?.['Carno']?.['tdnf'],
      carno_tknf: inputs?.['Carno']?.['tknf'],
      Pirs: inputs?.['sintez']?.['pirs'].replace('↓', '>') || '',
      Sheffer: inputs?.['sintez']?.['sheffer'] || '',
      Base: inputs?.['sintez']?.['base'] || '',
    };
    console.log(data);
    try {
      const res = await sendTest(data, 2);
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
      <h2 className="text-2xl text-center font-bold">Контрольная работа № 2</h2>
      <form className="flex flex-col gap-5 text-justify" onSubmit={SendResult}>
        <Task2_1
          inputs={inputs}
          setInputs={setInputs}
          bias={variant.offset}
          segment={variant.segment}
          D={variant.D}
          header="Задание 1."
        />
        <Task2_2
          inputs={inputs}
          setInputs={setInputs}
          invalid={invalid}
          segment={variant.segment}
          header="Задание 2."
        />
        <Task2_3 inputs={inputs} setInputs={setInputs} invalid={invalid} header="Задание 3." />
        <Task2_4 inputs={inputs} setInputs={setInputs} invalid={invalid} header="Задание 4." />
        <Task2_5 inputs={inputs} setInputs={setInputs} invalid={invalid} header="Задание 5." />
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
