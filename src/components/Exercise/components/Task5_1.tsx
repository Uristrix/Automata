/* eslint-disable sonarjs/no-duplicate-string */
import Input from '../../Input/Input';
import { Dispatch, PropsWithChildren, useState } from 'react';

import Button from '../../Button/Button';
import { InputsMulti } from '../../../model/Inputs';

const task = 'multi';
const comment = 'Комментарий';

const Block = ({ inputs, setInputs }: { inputs: InputsMulti; setInputs: Dispatch<InputsMulti> }) => {
  return (
    <div className="relative flex flex-col gap-2 w-full">
      <div className="flex gap-2 w-full">
        <span className="min-w-[115px]" />
        <Input
          type="number"
          classes={{ input: '!rounded-none' }}
          placeholder={'X.XXX...'}
          // value={(inputs[task]?.['S']?.['S0'] as string) || ''}
          // onChange={(e) => {
          //   setInputs({
          //     ...inputs,
          //     [task]: { ...inputs[task], ['S']: { ...(inputs[task]?.['S'] as object), ['S0']: e.target.value } },
          //   });
          // }}
        />
        <Input classes={{ input: '!rounded-none' }} placeholder={comment} />
      </div>
      <div className="absolute top-[28px] left-[85px] font-bold">+</div>
      <div className="flex gap-2 w-full">
        <div className="flex min-w-[115px]">
          <Input classes={{ input: '!rounded-none w-[50px]' }} placeholder={'XX'} maxLength={2} />
        </div>
        <Input classes={{ input: '!rounded-none' }} placeholder={'X.XXX...'} type="number" />
        <Input classes={{ input: '!rounded-none' }} placeholder={comment} />
      </div>
      <div className="w-full h-[2px] border-t-2 border-black border-solid mb-2" />
    </div>
  );
};

const AddBlock = ({
  inputs,
  setInputs,
  countBlock,
  invalid,
  index,
}: {
  inputs: InputsMulti;
  setInputs: Dispatch<InputsMulti>;
  countBlock?: number;
  invalid: object;
  index: number;
}) => {
  return (
    <div className="relative flex flex-col gap-2 w-full">
      {[...Array(countBlock)].map((el, i) => (
        <div className="flex gap-2 w-full" key={`S${index + 1}`}>
          <span className="min-w-[115px]" />
          <Input
            type="number"
            invalid={invalid?.['S']?.[`S${index + 1}`]}
            classes={{ input: '!rounded-none' }}
            placeholder={'X.XXX...'}
            value={(inputs[task]?.['S']?.[i === 0 ? `S${index + 1}` : `S${index + 1}_correct`] as string) || ''}
            onChange={(e) => {
              setInputs({
                ...inputs,
                [task]: {
                  ...inputs[task],
                  ['S']: {
                    ...(inputs[task]?.['S'] as object),
                    [i === 0 ? `S${index + 1}` : `S${index + 1}_correct`]: e.target.value,
                  },
                },
              });
            }}
          />
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
        <Input
          classes={{ input: '!rounded-none' }}
          placeholder={'X.XXX...'}
          type="number"
          invalid={invalid?.['S']?.[`S${index + 1}`]}
        />
        <Input classes={{ input: '!rounded-none' }} placeholder={comment} />
      </div>
      <div className="w-full h-[2px] border-t-2 border-black border-solid mb-2" />
    </div>
  );
};

interface Props {
  inputs: InputsMulti;
  setInputs: Dispatch<InputsMulti>;
  invalid: object;
  countBlock?: number;
}

export const Task5_1 = ({ inputs, setInputs, invalid, countBlock }: PropsWithChildren<Props>) => {
  const [inputCount, setInputCount] = useState(0);
  return (
    <div className="m-auto max-w-[300px] md:max-w-[400px] flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <span className="min-w-[115px]" />
        <Input variant="textarea" classes={{ input: 'min-h-[150px]' }} placeholder="Для перевода чисел" />
      </div>
      <Block inputs={inputs} setInputs={setInputs} />
      {[...Array(inputCount)].map((el, i) => (
        <AddBlock invalid={invalid} index={i} inputs={inputs} setInputs={setInputs} countBlock={countBlock} key={i} />
      ))}
      <div className="flex gap-2">
        <span className="min-w-[115px]" />
        <Input
          type="number"
          invalid={invalid?.['S']?.['correct']}
          classes={{ input: '!rounded-none' }}
          placeholder={'Результат'}
          value={(inputs[task]?.['S']?.['correct'] as string) || ''}
          onChange={(e) => {
            setInputs({
              ...inputs,
              [task]: { ...inputs[task], ['S']: { ...(inputs[task]?.['S'] as object), correct: e.target.value } },
            });
          }}
        />
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
        <Input
          type="number"
          invalid={invalid?.['result']}
          placeholder={'X.XXXXXXXXX'}
          value={(inputs[task]?.result as string) || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [task]: { ...inputs[task], result: e.target.value } });
          }}
        />
      </div>
    </div>
  );
};
