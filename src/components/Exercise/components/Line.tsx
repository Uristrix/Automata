/* eslint-disable sonarjs/no-duplicate-string */
import { Dispatch, PropsWithChildren } from 'react';
import classNames from 'classnames';
import Input from '../../Input/Input';
import { InputsCode } from '../../../model/Inputs';

interface Line {
  id: string;
  name: string;
  style?: string;
  invalid?: object;
  inputs: InputsCode;
  setInputs: Dispatch<InputsCode>;
}
//  === 'true' ? true : inputs?.[id]?.invalid === 'false' ? false : undefined
const Line = ({ id, name, inputs, setInputs, invalid, style }: PropsWithChildren<Line>) => {
  console.log(invalid?.[id]?.str);
  return (
    <div className={classNames('flex gap-2 mb-2', style)}>
      <div className=" min-w-[40px] md:min-w-[58px] text-xs md:text-base flex items-center">{name}</div>
      <Input
        classes={{ input: '!rounded-none' }}
        invalid={invalid?.[id]?.str}
        placeholder={'X.XXXXXX'}
        value={inputs[id]?.str || ''}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], str: e.target.value } });
        }}
      />
      <Input
        classes={{ input: '!rounded-none' }}
        invalid={invalid?.[id]?.rev}
        placeholder={'X.XXXXXX'}
        value={inputs[id]?.rev || ''}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], rev: e.target.value } });
        }}
      />
      <Input
        classes={{ input: '!rounded-none' }}
        invalid={invalid?.[id]?.dop}
        placeholder={'X.XXXXXX'}
        value={inputs[id]?.dop || ''}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], dop: e.target.value } });
        }}
      />
    </div>
  );
};

export default Line;
