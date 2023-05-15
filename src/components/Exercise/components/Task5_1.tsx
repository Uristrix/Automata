import Input from '../../Input/Input';
import Line from './Line';
import Task5_1_block from './Task5_1_block';
import { useState } from 'react';
import classNames from 'classnames';
import Task5_1_startBlock from './Task5_1_startBlock';

export const Task5_1 = (props) => {
  const [inputCount, setInputCount] = useState(0);
  return (
    <div className="m-auto">
      <div className="flex mb-2">
        [X]п = -9/16 =
        <div className="w-60">
          <Input classes={{ input: 'ml-[5px]' }} />
        </div>
      </div>
      <div className="flex">
        [Y]п = -9/16 =
        <div className="w-60">
          <Input classes={{ input: 'ml-[5px]' }} />
        </div>
      </div>
      <Task5_1_startBlock />
      {[...Array(inputCount)].map((inputCount) => (
        <Task5_1_block key={inputCount} />
      ))}
      <div className={classNames('flex min-w-[40px] md:min-w-[58px] m-auto mb-2')}>
        <div className="flex w-[150px] ml-[90px]">
          <Input classes={{ input: '!rounded-none' }} />
        </div>
        <div className="flex w-[100px] ml-2">
          <Input classes={{ input: '!rounded-none' }} />
        </div>
      </div>
      <button
        className="w-[130px] h-50 border-[2px] border-gray-400"
        onClick={(e) => {
          e.preventDefault();
          setInputCount(inputCount + 1);
        }}
      >
        Добавить блок
      </button>
      <button
        className="w-[100px] h-50 border-[2px] border-gray-400 ml-2"
        onClick={(e) => {
          e.preventDefault();
          if (inputCount > 0) setInputCount(inputCount - 1);
        }}
      >
        Убрать блок
      </button>
      <div className="flex mt-2">
        Ответ =
        <div className="w-60">
          <Input classes={{ input: 'ml-[5px]' }} />
        </div>
      </div>
    </div>
  );
};
