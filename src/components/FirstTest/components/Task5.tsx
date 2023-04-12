import React from 'react';

export const Task5 = () => {
  return (
    <div>
      <span className="h_1">5 Задание.</span>
      <br />
      Выполните минимизацию функции из п. 4 методом Квайна, Квайна-мак-Класки.
      <br />
      СДНФ = <textarea className="i_4" />
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <br />
      Ответ = <input className="i_3" />
      <br />
      СКНФ = <textarea className="i_4" />
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <br />
      Ответ = <input className="i_3" />
      <br />
      <br />
    </div>
  );
};
