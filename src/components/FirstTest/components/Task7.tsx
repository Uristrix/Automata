import Input from '../../Input/Input';

export const Task7 = () => {
  return (
    <div className="lg:max-w-[400px]">
      <h2 className="text-xl font-semibold">7 Задание.</h2>
      <p>Выполните синтез функции в базисах: основном, Шеффера, Пирса.</p>
      <div className="flex items-center">
        <span className="min-w-[85px]">Решение = </span>
        <Input variant="textarea" />
      </div>
    </div>
  );
};
