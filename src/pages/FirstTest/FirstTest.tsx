import { Task1, Task2, Task3, Task4, Task5, Task6, Task7 } from '../../components/FirstTest';
import Button from '../../components/Button/Button';

const FirstTest = () => {
  //TODO: заменить на запрос
  const varTest: { numVar: number; num: number; segment: string; p: number; bias: number } = {
    numVar: 2,
    p: 5,
    num: 1023,
    segment: 'b',
    bias: 5,
  };

  return (
    <div className="mx-3 md:mx-0">
      <h2 className="text-2xl text-center font-bold">Контрольная работа № 1</h2>
      <h3 className="text-xl text-center font-bold">Вариант № {varTest.numVar} </h3>
      <form className="flex flex-col gap-5 text-justify">
        <Task1 num={varTest.num} />
        <Task2 num={varTest.num} p={varTest.p} />
        <Task3 segment={varTest.segment} bias={varTest.bias} />
        <Task4 />
        <Task5 />
        <Task6 />
        <Task7 />
        <Button type="submit">Закончить К/Р</Button>
      </form>
    </div>
  );
};

export default FirstTest;
