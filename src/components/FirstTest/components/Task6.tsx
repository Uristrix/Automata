import React from 'react';
import { MapCarno } from '../../mapCarno/mapCarno';
import Input from '../../Input/Input';

export const Task6 = () => {
  return (
    <div className="lg:max-w-[400px]">
      <h2 className="text-xl font-semibold">6 Задание.</h2>
      <p>
        Минимизируйте функцию из п. 3 методом Карно. Найдите тупиковую ДНФ, тупиковую КНФ. Рекомендуется использовать
        следующую разметку карты Карно.
      </p>
      <MapCarno />
      <div>
        ТДНФ = <Input variant="textarea" />
      </div>
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div>
        Ответ = <Input />
      </div>
      <div>
        ТКНФ = <Input variant="textarea" />
      </div>
      <p className="t_11">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div>
        Ответ = <Input />
      </div>
    </div>
  );
};
