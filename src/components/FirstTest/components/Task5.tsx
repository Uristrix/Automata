import Input from '../../Input/Input';

export const Task5 = () => {
  return (
    <div className="lg:max-w-[400px]">
      <h2 className="text-xl font-semibold">5 Задание.</h2>
      <p>Выполните минимизацию функции из п. 4 методом Квайна, Квайна-мак-Класки.</p>
      <div className="flex items-center">
        СДНФ = <Input variant="textarea" />
      </div>
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center">
        Ответ = <Input />
      </div>
      <div className="flex items-center">
        СКНФ = <Input variant="textarea" />
      </div>
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center">
        Ответ = <Input />
      </div>
    </div>
  );
};
