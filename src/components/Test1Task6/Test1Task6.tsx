import React from 'react';
import { MapCarno } from '../mapCarno/mapCarno';

const Test1Task6 = () => {
  return (
    <div>
      <span className="h_1">6 Задание.</span>
      <br className="br_2" />
      Минимизируйте функцию из п. 3 методом Карно. Найдите тупиковую ДНФ, тупиковую КНФ. Рекомендуется использовать
      следующую разметку карты Карно.
      <br />
      <MapCarno />
      <br />
      ТДНФ = <textarea className="i_4" />
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <br />
      Ответ = <input className="i_3" />
      <br />
      ТКНФ = <textarea className="i_3" />
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <br />
      Ответ = <input className="i_3" />
      <br />
    </div>
  );
};

export default Test1Task6;
