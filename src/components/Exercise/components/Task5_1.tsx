import Input from '../../Input/Input';
import Line from './Line';
import Task5_1_block from './InputBlock3';
import { useState } from 'react';
import classNames from 'classnames';
import StartBlock from './InputBlock2';
import InputBlock3 from './InputBlock3';
import InputBlock2 from './InputBlock2';
import Button from '../../Button/Button';

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
      <InputBlock2 />
      {[...Array(inputCount)].map((inputCount) => (
        <InputBlock3 key={inputCount} />
      ))}
      <div className={classNames('flex min-w-[40px] md:min-w-[58px] m-auto mb-2')}>
        <div className="flex w-[150px] ml-[90px]">
          <Input classes={{ input: '!rounded-none' }} />
        </div>
        <div className="flex w-[100px] ml-2">
          <Input classes={{ input: '!rounded-none' }} />
        </div>
      </div>
      <Button
        style={'mr-2'}
        onClick={() => {
          setInputCount(inputCount + 1);
        }}
      >
        Добавить блок
      </Button>
      <Button
        onClick={() => {
          if (inputCount > 0) setInputCount(inputCount - 1);
        }}
      >
        Убрать блок
      </Button>
      <div className="flex mt-2">
        Ответ =
        <div className="w-60">
          <Input classes={{ input: 'ml-[5px]' }} />
        </div>
      </div>
    </div>
  );
};
