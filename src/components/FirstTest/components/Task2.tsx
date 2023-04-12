import React from 'react';
import Input from '../../Input/Input';

export const Task2 = ({ num, p }: { num: number; p: number }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">2 Задание.</h2>
      <p>
        Целую часть числа переведите в другие системы счисления по схеме, изображенной на рисунке, где p — основание
        системы счисления. Р=3,5,7 в зависимости от варианта.
      </p>

      <div className="lg:max-w-[400px] flex flex-col gap-2">
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>{p}</sub> = <Input />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>{p}</sub> = <Input />
          <sub>3</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> = <Input />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> = <Input />
          <sub>{p}</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>2</sub> = <Input />
          <sub>3</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>2</sub> = <Input />
          <sub>{p}</sub>
        </i>
      </div>
    </div>
  );
};
