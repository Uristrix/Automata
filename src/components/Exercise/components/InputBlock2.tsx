/* eslint-disable sonarjs/no-duplicate-string */
import classNames from 'classnames';
import Input from '../../Input/Input';

const InputBlock2 = () => {
  return (
    <div className={classNames('relative flex flex-col mt-3 gap-2 mb-2 w-[350px]')}>
      <div className={classNames('flex min-w-[40px] md:min-w-[58px] m-auto')}>
        <div className="flex w-[150px] ml-[90px]">
          <Input classes={{ input: '!rounded-none' }} />
        </div>
        <div className="flex w-[100px] ml-2">
          <Input classes={{ input: '!rounded-none' }} />
        </div>
      </div>
      <div className="absolute top-[28px] left-[65px] font-bold">+</div>
      <div className={classNames('flex min-w-[40px] md:min-w-[58px]')}>
        <div className="flex w-[20px] ml-[3px]">
          <Input classes={{ input: '!rounded-none w-[50px]' }} />
        </div>
        <div className="flex w-[150px] ml-[68px]">
          <Input classes={{ input: '!rounded-none' }} />
        </div>
        <div className="flex w-[100px] ml-2">
          <Input classes={{ input: '!rounded-none' }} />
        </div>
      </div>
      <div className="w-full h-[2px] border-t-2 border-black border-solid mb-2" />
    </div>
  );
};

export default InputBlock2;
