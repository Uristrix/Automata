/* eslint-disable sonarjs/no-duplicate-string */
import Input from '../../Input/Input';
import { useState } from 'react';

import Button from '../../Button/Button';

const comment = 'Комментарий';
const Block = () => {
  return (
    <div className="relative flex flex-col gap-2 w-full">
      <div className="flex gap-2 w-full">
        <span className="min-w-[115px]" />
        <Input classes={{ input: '!rounded-none' }} placeholder={'X.XXX...'} />
        <Input classes={{ input: '!rounded-none' }} placeholder={comment} />
      </div>
      <div className="absolute top-[28px] left-[85px] font-bold">+</div>
      <div className="flex gap-2 w-full">
        <div className="flex min-w-[115px]">
          <Input classes={{ input: '!rounded-none w-[50px]' }} placeholder={'XX'} maxLength={2} />
        </div>
        <Input classes={{ input: '!rounded-none' }} placeholder={'X.XXX...'} />
        <Input classes={{ input: '!rounded-none' }} placeholder={comment} />
      </div>
      <div className="w-full h-[2px] border-t-2 border-black border-solid mb-2" />
    </div>
  );
};

const AddBlock = ({ countBlock }: { countBlock?: number }) => {
  return (
    <div className="relative flex flex-col gap-2 w-full">
      {[...Array(countBlock)].map((countBlock) => (
        <div className="flex gap-2 w-full" key={countBlock}>
          <span className="min-w-[115px]" />
          <Input classes={{ input: '!rounded-none' }} placeholder={'X.XXX...'} />
          <Input classes={{ input: '!rounded-none' }} placeholder={comment} />
        </div>
      ))}
      {countBlock == 1 ? (
        <div className="absolute top-[28px] left-[85px] font-bold">+</div>
      ) : (
        <div className="absolute top-[78px] left-[85px] font-bold">+</div>
      )}
      <div className="flex gap-2 w-full">
        <div className="flex min-w-[115px]">
          <Input classes={{ input: '!rounded-none w-[50px]' }} placeholder={'XX'} maxLength={2} />
        </div>
        <Input classes={{ input: '!rounded-none' }} placeholder={'X.XXX...'} />
        <Input classes={{ input: '!rounded-none' }} placeholder={comment} />
      </div>
      <div className="w-full h-[2px] border-t-2 border-black border-solid mb-2" />
    </div>
  );
};

export const Task5_1 = ({ countBlock }: { countBlock?: number }) => {
  const [inputCount, setInputCount] = useState(0);
  return (
    <div className="m-auto max-w-[300px] md:max-w-[400px] flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <span className="min-w-[115px]" />
        <Input variant="textarea" classes={{ input: 'min-h-[150px]' }} placeholder="Для перевода чисел" />
      </div>
      <Block />
      {[...Array(inputCount)].map((inputCount) => (
        <AddBlock countBlock={countBlock} key={inputCount} />
      ))}
      <div className="flex gap-2">
        <span className="min-w-[115px]" />
        <Input classes={{ input: '!rounded-none' }} placeholder={'Результат'} />
        <Input classes={{ input: '!rounded-none' }} placeholder={comment} />
      </div>
      <div className="ml-[130px] flex gap-2">
        <Button
          style="text-sm md:text-base"
          onClick={() => {
            setInputCount(inputCount + 1);
          }}
        >
          Добавить блок
        </Button>
        <Button
          style="text-sm md:text-base"
          onClick={() => {
            if (inputCount > 0) setInputCount(inputCount - 1);
          }}
        >
          Убрать блок
        </Button>
      </div>
      <div className="flex items-center mt-2 ">
        <span className="min-w-[50px]">[Z]п = </span>
        <Input classes={{ input: '' }} placeholder={'X.XXXXXXXXX'} />
      </div>
    </div>
  );
};
