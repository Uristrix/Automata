import Input from '../../Input/Input';

export const Task5 = () => {
  return (
    <div className="lg:max-w-[400px]">
      <h2 className="text-xl font-semibold">5 Задание.</h2>
      <p>Выполните минимизацию функции из п. 4 методом Квайна, Квайна-мак-Класки.</p>
      <div className="flex flex-nowrap items-center">
        <span className="min-w-[60px]"> СДНФ = </span>
        <Input variant="textarea" />
      </div>
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center">
        <span className="min-w-[60px]"> Ответ = </span>
        <Input />
      </div>
      <div className="flex items-center">
        <span className="min-w-[60px]"> СКНФ = </span>
        <Input variant="textarea" />
      </div>
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center">
        <span className="min-w-[60px]"> Ответ = </span>
        <Input />
      </div>
    </div>
  );
};
