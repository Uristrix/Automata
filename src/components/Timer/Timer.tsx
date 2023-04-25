import { useEffect, useState } from 'react';
import classNames from 'classnames';

const Timer = ({ seconds }: { seconds: number }) => {
  return seconds > 0 ? (
    <div
      className={classNames(
        'z-50 fixed top-[65px] right-0.5 md:top-[100px] lg:right-4 min-w-[100px] h-[30px] rounded-3xl text-white text-sm flex gap-1 items-center p-2 opacity-60',
        seconds < 60 ? 'bg-red-700' : 'bg-ocean',
      )}
    >
      <span>Осталось</span>
      <span className="mx-auto">{seconds < 60 ? seconds : Math.floor(seconds / 60) + 1}</span>
      <span>{seconds < 60 ? 'с' : 'м'}</span>
    </div>
  ) : null;
};

export default Timer;
