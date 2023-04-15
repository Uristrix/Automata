import React from 'react';
import { MapCarno } from '../../mapCarno/mapCarno';
import Input from '../../Input/Input';

export const Task6 = () => {
  return (
    <div className="lg:max-w-[400px]">
      <h2 className="text-xl font-semibold">6 Задание.</h2>
      <p className="mb-2">
        Минимизируйте функцию из п. 3 методом Карно. Найдите тупиковую ДНФ, тупиковую КНФ. Рекомендуется использовать
        следующую разметку карты Карно.
      </p>
      <MapCarno />
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> ТДНФ = </span>
        <Input variant="textarea" />
      </div>
      <p className="mb-2">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> Ответ = </span>
        <Input />
      </div>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> ТКНФ = </span>
        <Input variant="textarea" />
      </div>
      <p className="mb-2">Пример: (x1 & x2 & nx3) | (x3 & nx4 & nx2) </p>
      <div className="flex items-center mb-2">
        <span className="min-w-[60px]"> Ответ = </span>
        <Input />
      </div>
    </div>
  );
};
