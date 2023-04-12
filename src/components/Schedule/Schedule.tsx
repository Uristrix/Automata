/* eslint-disable sonarjs/no-duplicate-string */

import axios from 'axios';
import { useEffect, useState } from 'react';

interface Schedule {
  day?: Array<Day>;
  semester?: number | null;
  year?: number | null;
  teacher?: string | null;
}

interface Day {
  name?: string | null;
  number?: number | null;
  pairList?: Array<PairList>;
  special_day?: boolean | false;
}

interface PairList {
  pair?: Array<Pair>;
  pairnumber?: number | null;
  pairtime?: string | null;
  groups?: Array<string>;
}

interface Pair {
  aud?: string | null;
  group?: Array<string>;
  subgroup?: string | null;
  subject?: string | null;
  week?: number | null;
}
const URL = process.env.REACT_APP_SCHEDULE;

// const mock: Array<Day> = [
//   { name: 'Пн' },
//   { name: 'Вт' },
//   {
//     name: 'Ср',
//     lectures: [
//       {
//         even: { name: 'Организация ЭВМ и систем', time: '8:40-10:15', cabinet: '344', groups: ['К-63Б'] },
//         odd: { name: 'Организация ЭВМ и систем', time: '8:40-10:15', cabinet: '344', groups: ['К-64Б'] },
//       },
//       {
//         all: {
//           name: 'Теория автоматов',
//           time: '10:25-12:00',
//           cabinet: '365',
//           groups: ['К-43Б', 'К-44Б', 'К-45Б', 'К-46Б'],
//         },
//       },
//       {
//         even: { name: 'Теория автоматов', time: '12:50-14:25', cabinet: '365', groups: ['К-46Б'] },
//         odd: { name: 'Теория автоматов', time: '12:50-14:25', cabinet: '448', groups: ['К-46Б'] },
//       },
//       {
//         even: { name: 'Теория автоматов', time: '14:35-16:10', cabinet: '365', groups: ['К-45Б'] },
//         odd: { name: 'Теория автоматов', time: '14:35-16:10', cabinet: '448', groups: ['К-45Б'] },
//       },
//       { all: { name: 'Периферийные устройства ЭВМ', time: '10:25-12:00', cabinet: '448', groups: ['К-86Б'] } },
//     ],
//   },
//   {
//     name: 'Чт',
//     lectures: [
//       {
//         even: { name: 'Организация ЭВМ и систем', time: '8:40-10:15', cabinet: '344', groups: ['К-63Б'] },
//         odd: { name: 'Организация ЭВМ и систем', time: '8:40-10:15', cabinet: '344', groups: ['К-64Б'] },
//       },
//       {
//         all: {
//           name: 'Теория автоматов',
//           time: '10:25-12:00',
//           cabinet: '365',
//           groups: ['К-43Б', 'К-44Б', 'К-45Б', 'К-46Б'],
//         },
//       },
//       {
//         even: { name: 'Теория автоматов', time: '12:50-14:25', cabinet: '365', groups: ['К-46Б'] },
//         odd: { name: 'Теория автоматов', time: '12:50-14:25', cabinet: '448', groups: ['К-46Б'] },
//       },
//       {
//         even: { name: 'Теория автоматов', time: '14:35-16:10', cabinet: '365', groups: ['К-45Б'] },
//         odd: { name: 'Теория автоматов', time: '14:35-16:10', cabinet: '448', groups: ['К-45Б'] },
//       },
//       { all: { name: 'Периферийные устройства ЭВМ', time: '10:25-12:00', cabinet: '448', groups: ['К-86Б'] } },
//     ],
//   },
//   {
//     name: 'Пт',
//     lectures: [
//       {
//         even: { name: 'Организация ЭВМ и систем', time: '8:40-10:15', cabinet: '344', groups: ['К-63Б'] },
//         odd: { name: 'Организация ЭВМ и систем', time: '8:40-10:15', cabinet: '344', groups: ['К-64Б'] },
//       },
//       {
//         all: {
//           name: 'Теория автоматов',
//           time: '10:25-12:00',
//           cabinet: '365',
//           groups: ['К-43Б', 'К-44Б', 'К-45Б', 'К-46Б'],
//         },
//       },
//       {
//         even: { name: 'Теория автоматов', time: '12:50-14:25', cabinet: '365', groups: ['К-46Б'] },
//         odd: { name: 'Теория автоматов', time: '12:50-14:25', cabinet: '448', groups: ['К-46Б'] },
//       },
//       {
//         even: { name: 'Теория автоматов', time: '14:35-16:10', cabinet: '365', groups: ['К-45Б'] },
//         odd: { name: 'Теория автоматов', time: '14:35-16:10', cabinet: '448', groups: ['К-45Б'] },
//       },
//       { all: { name: 'Периферийные устройства ЭВМ', time: '10:25-12:00', cabinet: '448', groups: ['К-86Б'] } },
//     ],
//   },
//   { name: 'Сб' },
// ];

const Day = ({ day }: { day: Day }) => {
  console.log(day);
  return (
    <div className="bg-white rounded-2xl shadow-lg min-w-[350px] max-w-[470px] min-h-[260px] flex flex-col overflow-hidden">
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
  const [schedule, setSchedule] = useState<Schedule | null>(null);

  useEffect(() => {
    URL &&
      axios
        .get(URL)
        .then((res) => setSchedule(res.data))
        .catch((err) => console.error(err));
  }, []);
  return (
    <section>
      <h2 className="text-2xl text-center font-bold mb-4">Расписание занятий</h2>
      <div className="flex md:max-w-[710px] lg:max-w-[870px] lg:grid grid-cols-6 overflow-scroll md:overflow-auto md:grid-cols-2 gap-6 md:gap-2 mx-5 md:mx-0">
        {schedule && schedule?.day?.map((el) => <Day day={el} key={el.number} />)}
      </div>
    </section>
  );
};

export default Schedule;
