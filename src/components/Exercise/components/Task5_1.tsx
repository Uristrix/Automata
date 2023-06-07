/* eslint-disable sonarjs/no-duplicate-string */
import Input from '../../Input/Input';
import { Dispatch, PropsWithChildren, useState } from 'react';

import Button from '../../Button/Button';
import { InputsMulti } from '../../../model/Inputs';

const comment = 'Комментарий';

const Block = ({ Z }: { Z?: boolean }) => {
  return (
    <div className="relative flex flex-col gap-2 w-full">
      <div className="flex gap-2 w-full">
        <span className="min-w-[115px]" />
        <Input
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
        <Input classes={{ input: '!rounded-none' }} placeholder={'X.XXX...'} />
        <Input classes={{ input: '!rounded-none' }} placeholder={`${comment}${Z ? ' / Z' : ''}`} />
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
  name,
  Z,
}: {
  inputs: InputsMulti;
  setInputs: Dispatch<InputsMulti>;
  countBlock?: number;
  invalid: object;
  index: number;
  name: string;
  Z?: boolean;
}) => {
  return (
    <div className="relative flex flex-col gap-2 w-full">
      {[...Array(countBlock)].map((el, i) => (
        <div className="flex gap-2 w-full" key={`S${index + 1}`}>
          <span className="min-w-[115px]" />
          <Input
            invalid={invalid?.[name]?.['S']?.[`S${index + 1}`]}
            classes={{ input: '!rounded-none' }}
            placeholder={'X.XXX...'}
            value={(inputs[name]?.['S']?.[i === 0 ? `S${index + 1}` : `S${index + 1}_correct`] as string) || ''}
            onChange={(e) => {
              setInputs({
                ...inputs,
                [name]: {
                  ...inputs[name],
                  ['S']: {
                    ...(inputs[name]?.['S'] as object),
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
          invalid={invalid?.[name]?.['S']?.[`S${index + 1}`]}
        />
        <Input classes={{ input: '!rounded-none' }} placeholder={`${comment}${Z ? ' / Z' : ''}`} />
      </div>
      <div className="w-full h-[2px] border-t-2 border-black border-solid mb-2" />
    </div>
  );
};

interface Props {
  inputs: InputsMulti;
  setInputs: Dispatch<InputsMulti>;
  invalid: object;
  name?: string;
  countBlock?: number;
  header?: string;
  text?: string;
  Z?: boolean;
}

export const Task5_1 = ({
  inputs,
  setInputs,
  invalid,
  countBlock,
  header,
  text,
  Z,
  name = 'multi',
}: PropsWithChildren<Props>) => {
  const [inputCount, setInputCount] = useState(0);
  return (
    <div className="m-auto max-w-[300px] md:max-w-[500px] flex flex-col gap-2">
      {header && <h2 className="text-xl font-semibold">{header}</h2>}
      {text && <p className="">{text}</p>}
      <div className="flex gap-2 items-center">
        <span className="min-w-[115px]" />
        <Input variant="textarea" classes={{ input: 'min-h-[150px]' }} placeholder="Для перевода чисел" />
      </div>
      <Block Z={Z} />
      {[...Array(inputCount)].map((el, i) => (
        <AddBlock
          invalid={invalid}
          index={i}
          inputs={inputs}
          setInputs={setInputs}
          countBlock={countBlock}
          key={i}
          name={name}
          Z={Z}
        />
      ))}
      <div className="flex gap-2">
        <span className="min-w-[115px]" />
        <Input
          invalid={Array.isArray(invalid?.[name]?.['S']?.['correct']) ? false : invalid?.[name]?.['S']?.['correct']}
          classes={{ input: '!rounded-none' }}
          placeholder={'Результат'}
          value={(inputs[name]?.['S']?.['correct'] as string) || ''}
          onChange={(e) => {
            setInputs({
              ...inputs,
              [name]: { ...inputs[name], ['S']: { ...(inputs[name]?.['S'] as object), correct: e.target.value } },
            });
          }}
        />
        <Input
          invalid={invalid?.[name]?.['Z']}
          classes={{ input: '!rounded-none' }}
          placeholder={`${comment}${Z ? ' / Z' : ''}`}
          value={(inputs[name]?.['Z'] as string) || ''}
          // onChange={(e) => {
          //   setInputs({
          //     ...inputs,
          //     [name]: { ...inputs[name], ['Z']: e.target.value },
          //   });
          // }}
        />
      </div>
      <div className="pl-[125px] flex gap-2 w-full">
        <Button
          style="text-sm md:text-base w-full"
          onClick={() => {
            setInputs({
              ...inputs,
              [name]: {
                ...inputs[name],
                ['S']: {
                  ...(inputs[name]?.['S'] as object),
                  [`S${inputCount + 1}`]: inputs[name]?.['S']?.['correct'],
                  ['correct']: '',
                },
              },
            });
            setInputCount(inputCount + 1);
          }}
        >
          Добавить блок
        </Button>
        <Button
          style="text-sm md:text-base w-full"
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
          invalid={invalid?.[name]?.['result']}
          placeholder={Z ? 'XXXX' : 'X.XXXXXXXXX'}
          value={(inputs[name]?.result as string) || ''}
          onChange={(e) => {
            setInputs({ ...inputs, [name]: { ...inputs[name], result: e.target.value } });
          }}
        />
      </div>
    </div>
  );
};
