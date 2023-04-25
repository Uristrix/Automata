/* eslint-disable sonarjs/no-duplicate-string */
import { Dispatch, PropsWithChildren } from 'react';
import classNames from 'classnames';
import Input from '../../Input/Input';
import { InputsCode } from '../../../model/Inputs';

interface Line {
  id: string;
  name: string;
  style?: string;
  inputs: InputsCode;
  setInputs: Dispatch<InputsCode>;
}

const Line = ({ id, name, inputs, setInputs, style }: PropsWithChildren<Line>) => {
  return (
    <div className={classNames('flex gap-2 mb-2', style)}>
      <div className=" min-w-[40px] md:min-w-[58px] text-xs md:text-base flex items-center">{name}</div>
      <Input
        classes={{ input: '!rounded-none' }}
        value={inputs[id]?.straight || ''}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], straight: e.target.value } });
        }}
      />
      <Input
        classes={{ input: '!rounded-none' }}
        value={inputs[id]?.back || ''}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], back: e.target.value } });
        }}
      />
      <Input
        classes={{ input: '!rounded-none' }}
        value={inputs[id]?.additional || ''}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], additional: e.target.value } });
        }}
      />
    </div>
  );
};

export default Line;
