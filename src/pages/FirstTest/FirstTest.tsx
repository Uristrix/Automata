import { Task1, Task2, Task3, Task4, Task5, Task6, Task7 } from '../../components/FirstTest';
import Button from '../../components/Button/Button';

const FirstTest = () => {
  const varTest: { numVar: number; varChapter1: number; cegment: string; p: number; smesh: number } = {
    numVar: 2,
    p: 5,
    varChapter1: 1023,
    cegment: 'b',
    smesh: 5,
  };

  return (
    <div className="mx-3 md:mx-0">
      <h2 className="text-2xl text-center font-bold">Контрольная работа № 1</h2>
      <h3 className="text-xl text-center font-bold">Вариант № {varTest.numVar} </h3>
      <form className="flex flex-col gap-5 text-justify">
        <Task1 varChapter1={varTest.varChapter1} />
        <Task2 varChapter1={varTest.varChapter1} p={varTest.p} />
        <Task3 cegment={varTest.cegment} smesh={varTest.smesh} />
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
