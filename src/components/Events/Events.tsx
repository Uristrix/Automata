import { PropsWithChildren } from 'react';
import Button from '../Button/Button';

export interface Elem {
  time: string;
  name: string;
  groups: Array<string>;
  href: string;
}

export interface Events {
  data?: Array<Elem> | [];
}

const Events = ({ data }: PropsWithChildren<Events>) => {
  return (
    <section className="bg-white overflow-hidden rounded-2xl shadow-lg h-[300px] lg:h-[530px] mx-auto md:mx-0 min-w-[350px] md:max-w-full">
      <h3 className="font-bold text-center bg-ocean text-white">Ближайшие События</h3>
      {data?.length !== 0 ? (
        data?.map((el: Elem, i) => (
          <div
            key={`event${i}`}
            className="h-12 md:h-14 gap-2 text-sm flex justify-between items-center gap-2 border-b border-b-black px-2 w-auto"
          >
            <span className="w-[60px] md:w-[100px]">{el?.time || '-'}</span>
            <span className="w-[100px] md:w-[190px] overflow-hidden text-ellipsis">{el?.name || '-'}</span>
            <span className="w-[50px] md:w-[95px]">{el?.groups?.join(' ') || '-'}</span>
            <Button style="max-w-[70px] md:max-w-[110px]">
              <a href={el?.href}>Перейти</a>
            </Button>
          </div>
        ))
      ) : (
        <div className="text-center align-middle text-2xl font-bold">Ближайших событий нет</div>
      )}
    </section>
  );
};

export default Events;
