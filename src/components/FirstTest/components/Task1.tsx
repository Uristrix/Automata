import React from 'react';
import Input from '../../Input/Input';

export const Task1 = ({ num }: { num: number }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">1 Задание.</h2>
      <p>
        Выполните перевод заданного числа из десятичной системы счисления в двоичную, восьмеричную и шестнадцатеричную
        систему счисления с заданной точностью. (Девять разрядов после запятой для двоичной системы, три разряда — для
        восьмеричной, и два — для шестнадцатеричной.) Исходное число содержит три разряда в целой части и три разряда в
        дробной части.
      </p>
      <div className="lg:max-w-[400px] flex flex-col gap-2">
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> = <Input />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> = <Input />
          <sub>8</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {num}
          <sub>10</sub> = <Input />
          <sub>16</sub>
        </i>
      </div>
    </div>
  );
};
