import { Task5_1 } from '../../../components/Exercise/components/Task5_1';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { sendTest } from '../../../utils/test';
import User from '../../../store/user';

const C = [8, 16, 32];
export const Training4 = () => {
  const [inputs, setInputs] = useState({});
  const [invalid, setInvalid] = useState({});
  const [result, setResult] = useState({});
  const [variant, setVariant] = useState({
    C: C[Math.floor(Math.random() * 3)],
    A: 1,
    B: 1,
  });

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
    console.log(data);
    const res = await sendTest(data, 5);
    if (res.payload.checked) {
      setInvalid(res.payload.checked);
      setResult(res.payload.checked.score);
    }
    console.log(res.payload);
  };
  return (
    <div className="mx-3 md:mx-auto w-full xl:w-[1000px] md:bg-white md:p-4 md:rounded-2xl md:shadow-2xl">
      <h1 className="text-2xl text-center font-bold">Умножение с преобразованием множителя (обратный код)</h1>
      <h2 className="text-xl text-center font-bold">А = 3/16, В = 9/16</h2>
      <form
        onSubmit={SendResult}
        className="flex flex-col mx-auto mt-2 md:mt-5 w-[350px] md:w-full overflow-x-scroll md:overflow-hidden"
      >
        <Task5_1 inputs={inputs} setInputs={setInputs} invalid={invalid} countBlock={1} />

        <Button style="mx-auto mt-5" type="submit">
          Проверить
        </Button>
        <Button style="min-w-[300px] mt-5 ml-auto">
          <Link className="w-[90%]" to={'/lecture/4_12'}>
            Перейти к примеру →
          </Link>
        </Button>
      </form>
    </div>
  );
};
export default Training4;
