/* eslint-disable sonarjs/no-duplicate-string */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Days, Schedules } from '../../model/Schedule';

const URL = process.env.REACT_APP_SCHEDULE;

const Day = ({ day }: { day: Days }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-[340px] md:max-w-[470px] min-h-[260px] flex flex-col overflow-hidden">
      <h3 className="font-bold text-center bg-ocean text-white">{day.name}</h3>
      {day?.pairList?.length !== 0 ? (
        day?.pairList?.map((el, i) => (
          <div
            key={`lec${i}`}
            className="min-h-12 h-full gap-2 text-sm flex justify-between items-center gap-2 border-b border-b-black px-2 last:border-0 w-full"
          >
            {
              <>
                <span className="min-w-[40px] lg:min-w-[80px]">{el?.pairtime?.replace(/ — /g, '-') || '-'}</span>
                <div className="flex flex-col items-center w-full lg:w-[350px] h-full items-center">
                  {el?.pair?.length !== 0 ? (
                    el?.pair?.map((el2, i) => (
                      <div
                        className="h-full w-auto flex gap-1 justify-between border-b-2 border-dashed border-b-gray-300 last:border-0 [&>span]:flex [&>span]:items-center"
                        key={`pair${i}`}
                      >
                        <span className="w-[140px] lg:w-[190px] overflow-hidden text-ellipsis">
                          {el2?.subject || '-'}
                        </span>
                        <span className="w-[95px]">{el2?.group?.join(' ') || '-'}</span>
                        <span className="w-max min-w-[30px] pl-2">{el2?.aud || '-'}</span>
                      </div>
                    ))
                  ) : (
                    <span className="h-full flex items-center">-</span>
                  )}
                </div>
              </>
            }
          </div>
        ))
      ) : (
        <span className="text-center align-middle text-2xl font-bold">Занятий нет</span>
      )}
    </div>
  );
};

const Schedule = () => {
  const [schedule, setSchedule] = useState<Schedules | null>(null);

  useEffect(() => {
    //TODO:test
    console.log(URL);
    URL &&
      axios
        .get(URL)
        // eslint-disable-next-line promise/always-return
        .then((res) => {
          setSchedule(res.data);
          console.log(res);
        })
        .catch((err) => console.error(err));
  }, []);
  return (
    <section>
      <div className="grid w-max md:max-w-[710px] lg:max-w-[1400px] min-[330px]:grid-cols-1 min-[770px]:grid-cols-2 min-[1400px]:grid-cols-3 gap-2 md:gap-2 lg:gap-4 mx-auto lg:p-4">
        {schedule && schedule?.day?.map((el) => <Day day={el} key={el.number} />)}
      </div>
    </section>
  );
};

export default Schedule;
