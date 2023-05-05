import React, { Dispatch } from 'react';
import Input from '../Input/Input';
import classNames from 'classnames';

const defClass = 'absolute flex text-center text-sm text-ocean font-semibold rounded-[50%] border-ocean -z-2';
const termClasses = [
  { div: 'border-2 items-start w-[100px] h-[50px] -top-5', span: 'mx-auto leading-3 my-1', text: 'X1' },
  {
    div: 'border-2  items-start w-[100px] h-[50px] -top-5 right-0',
    span: 'mx-auto border-t border-ocean leading-3 my-1',
    text: 'X1',
  },
  { div: 'border-2 items-center w-[50px] h-[100px] -left-5', span: 'leading-3 ml-0.5', text: 'X2' },
  {
    div: 'border-2 items-center w-[50px] h-[100px] -left-5 bottom-0',
    span: 'border-t border-ocean leading-3 ml-0.5',
    text: 'X2',
  },
  {
    div: 'items-end w-[50px] h-[50px] left-0 -bottom-5',
    span: 'mx-auto border-t border-ocean leading-3 mb-0.5',
    text: 'X4',
  },
  { div: 'border-2 items-end w-[100px] h-[50px] left-[25%] -bottom-5', span: 'mx-auto leading-3', text: 'X3' },
  {
    div: 'items-end w-[50px] h-[50px] right-0 -bottom-5',
    span: 'mx-auto border-t border-ocean leading-3 mb-0.5',
    text: 'X4',
  },
  {
    div: 'justify-end items-center w-[50px] h-[50px] top-0 -right-5',
    span: 'border-t border-ocean leading-3 mr-0.5',
    text: 'X3',
  },
  {
    div: 'border-2 justify-end items-center w-[50px] h-[100px] top-[25%] -right-5',
    span: 'leading-3',
    text: 'X4',
  },
  {
    div: 'justify-end items-center w-[50px] h-[50px] bottom-0 -right-5',
    span: 'border-t border-ocean leading-3 mr-0.5',
    text: 'X3',
  },
];

import { Inputs } from '../../model/Inputs';

export const MapCarno = ({
  inputs,
  setInputs,
  name,
}: {
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
  name: string;
}) => {
  return (
    <div className="relative m-10 w-[200px] h-[200px] box-content">
      <div className="absolute grid grid-cols-4 w-full h-full box-content">
        {Array.from(Array(16).keys()).map((el, i) => (
          <Input
            classes={{
              root: '!min-h-[30px] !min-w-[30px] z-10 ',
              input: '!rounded-none text-2xl text-center !h-[50px]',
            }}
            key={`Input${el}`}
            value={inputs[name]?.[`carno_${i}`] || ''}
            onChange={(e) => {
              setInputs({ ...inputs, [name]: { ...inputs[name], [`carno_${i}`]: e.target.value } });
            }}
          />
        ))}
        {termClasses.map((el, i) => (
          <div key={`term${i}`} className={classNames(defClass, el.div)}>
            <span className={el.span}>{el.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
