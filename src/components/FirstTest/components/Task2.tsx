import React from 'react';
import Input from '../../Input/Input';
import { Control1 } from '../../../model/Control1';

export const Task2 = ({ variant }: { variant: Control1 }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">2 Задание.</h2>
      <p className="mb-2">Целую часть числа переведите в другие системы счисления.</p>

      <div className="lg:max-w-[400px] flex flex-col gap-2">
        <i className="flex items-center w-full [&>sub]:pt-4">
          {variant.num}
          <sub>{variant.p}</sub> = <Input />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {variant.num}
          <sub>{variant.p}</sub> = <Input />
          <sub>3</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {variant.num}
          <sub>10</sub> = <Input />
          <sub>2</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {variant.num}
          <sub>10</sub> = <Input />
          <sub>{variant.p}</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {variant.num}
          <sub>2</sub> = <Input />
          <sub>3</sub>
        </i>
        <i className="flex items-center w-full [&>sub]:pt-4">
          {variant.num}
          <sub>2</sub> = <Input />
          <sub>{variant.p}</sub>
        </i>
      </div>
    </div>
  );
};
