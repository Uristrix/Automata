import { Task1, Task2, Task3, Task4, Task5, Task6, Task7 } from '../../components/FirstTest';
import Button from '../../components/Button/Button';
import { useEffect, useState } from 'react';
import { Control1, Inputs } from '../../model/Control1';

const FirstTest = () => {
  const [inputs, setInputs] = useState<Inputs>({});
  const [variant, setVariant] = useState<Control1>({});
  useEffect(() => {
    const variant = Math.floor(Math.random() * 30) + 1; // от 1 до 30
    const randomVar: Control1 = {
      variant: variant,
      num: Math.floor(Math.random() * (1023 - 513 + 1)) + 513, // от 513 до 1023
      segment: String.fromCharCode(97 + Math.floor(Math.random() * 10)), // от  0 до 9 в буквах a to j
      p: variant % 3 === 0 ? 7 : (variant % 3) * 2 + 1, // 3 5 7
      bias: Math.floor(Math.random() * 7), // 0 до 6
    };
    setVariant(randomVar);
  }, []);

  return (
    <div className="mx-3 md:mx-0">
      <h2 className="text-2xl text-center font-bold">Контрольная работа № 1</h2>
      <h3 className="text-xl text-center font-bold">Вариант № {variant.variant || 1} </h3>
      <form className="flex flex-col gap-5 text-justify">
        <Task1 variant={variant} />
        <Task2 variant={variant} />
        <Task3 variant={variant} />
        <Task4 variant={variant} />
        <Task5 />
        <Task6 />
        <Task7 />
        <Button type="submit">Закончить К/Р</Button>
      </form>
    </div>
  );
};

export default FirstTest;
