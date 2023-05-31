import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import classNames from 'classnames';
import { exEvent } from '../../model/event';
import { getAllEvent } from '../../utils/event';
import User from '../../store/user';
import Event from '../../store/event';
import { observer } from 'mobx-react-lite';

const options: object = {
  weekday: 'short',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const Events = observer(() => {
  const [data, setData] = useState<Array<exEvent>>([]);

  useEffect(() => {
    (async () => {
      if (!!User.user) {
        const data = await getAllEvent();
        if (data.payload) {
          setData(data.payload);
        }
      }
    })();
  }, [User.user]);
  return (
    <section className="bg-white overflow-hidden rounded-2xl shadow-lg h-[300px] lg:h-[480px] mx-auto md:mx-0 w-full md:max-w-full">
      <h3 className="font-bold text-center bg-ocean text-white">Ближайшие События</h3>
      <div className="w-full h-full overflow-scroll md:overflow-hidden">
        {data?.length !== 0 ? (
          data?.map((el, i) => (
            <div
              key={`event${i}`}
              className={classNames(
                'min-h-[56px] gap-2 text-sm flex justify-between items-center gap-2 px-2 w-auto last:mb-6',
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
              {new Date(el.date) < new Date(Date.now()) &&
                new Date(new Date(el.date).getTime() + el.length * 60000) > new Date(Date.now()) && (
                  <Button style="max-w-[70px] md:max-w-[110px]">
                    <Link
                      className="h-full w-full"
                      to={`test${el?.test_num}`}
                      onClick={() => {
                        Event.event = el;
                      }}
                    >
                      Перейти
                    </Link>
                  </Button>
                )}
              {new Date(new Date(el.date).getTime() + el.length * 60000) < new Date(Date.now()) && (
                <Button style="max-w-[90px] md:max-w-[110px]">Завершено</Button>
              )}
              {new Date(new Date(el.date).getTime()) > new Date(Date.now()) && (
                <Button style="max-w-[90px] md:max-w-[110px]">Ожидается</Button>
              )}
              {/*<Button style="max-w-[70px] md:max-w-[110px]">*/}
              {/*  <Link*/}
              {/*    className="h-full w-full"*/}
              {/*    to={`test${el?.test_num}`}*/}
              {/*    onClick={() => {*/}
              {/*      console.log('');*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    {new Date(new Date(el?.date || '').getMilliseconds() + el?.length * 60000).getMilliseconds() <*/}
              {/*    Date.now()*/}
              {/*      ? 'Завершено'*/}
              {/*      : 'Перейти'}*/}
              {/*  </Link>*/}
              {/*</Button>*/}
            </div>
          ))
        ) : (
          <div className="text-center align-middle text-2xl font-bold">Ближайших событий нет</div>
        )}
      </div>
    </section>
  );
});

export default Events;
