/* eslint-disable sonarjs/no-duplicate-string */
import { Dispatch, PropsWithChildren } from 'react';
import classNames from 'classnames';
import Input from '../../Input/Input';

export interface Inputs {
  [keys: string]: {
    straight?: string | null;
    back?: string | null;
    additional?: string | null;
  };
}
interface Line {
  id: string;
  name: string;
  style?: string;
  inputs: Inputs;
  setInputs: Dispatch<Inputs>;
}

const Line = ({ id, name, inputs, setInputs, style }: PropsWithChildren<Line>) => {
  return (
    <div className={classNames('flex gap-2 mb-2', style)}>
      <div className=" min-w-[40px] md:min-w-[58px] text-xs md:text-base flex items-center">{name}</div>
      <Input
        classes={{ input: '!rounded-none' }}
        value={inputs[id]?.straight || undefined}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], straight: e.target.value } });
        }}
      />
      <Input
        classes={{ input: '!rounded-none' }}
        value={inputs[id]?.back || undefined}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], back: e.target.value } });
        }}
      />
      <Input
        classes={{ input: '!rounded-none' }}
        value={inputs[id]?.additional || undefined}
        onChange={(e) => {
          setInputs({ ...inputs, [id]: { ...inputs[id], additional: e.target.value } });
        }}
      />
    </div>
  );
};

export default Line;
