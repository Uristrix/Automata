import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import classNames from 'classnames';
import { exEvent } from '../../model/event';
import { getAllEvent } from '../../utils/event';

const options: object = {
  weekday: 'short',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const Events = () => {
  const [data, setData] = useState<Array<exEvent>>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllEvent();
      if (data.payload) {
        setData(data.payload);
      }
    })();
  }, []);

  return (
    <section className="bg-white overflow-hidden rounded-2xl shadow-lg h-[300px] lg:h-[480px] mx-auto md:mx-0 max-w-[350px] md:max-w-full">
      <h3 className="font-bold text-center bg-ocean text-white">Ближайшие События</h3>
      <div className="w-full h-full overflow-y-hidden">
        {data?.length !== 0 ? (
          data?.map((el, i) => (
            <div
              key={`event${i}`}
              className={classNames(
                'min-h-[56px] gap-2 text-sm flex justify-between items-center gap-2 px-2 w-auto',
                i % 2 === 0 ? '' : 'bg-grey',
              )}
            >
              <span className="min-w-[60px] md:max-w-[150px]">
                {new Date(el?.date).toLocaleDateString('ru-RU', options) || '-'}
              </span>
              <span className="w-[50px] overflow-hidden text-ellipsis">{`КР ${el?.test_num}` || '-'}</span>
              <span className="w-[200px] overflow-ellipsis line-clamp-2 h-full break-all">
                {el?.description || '-'}
              </span>
              <Button style="max-w-[70px] md:max-w-[110px]">
                <Link className="h-full w-full" to={`test${el?.test_num}`}>
                  Перейти
                </Link>
              </Button>
            </div>
          ))
        ) : (
          <div className="text-center align-middle text-2xl font-bold">Ближайших событий нет</div>
        )}
      </div>
    </section>
  );
};

export default Events;
