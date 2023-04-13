import segments from '../../../assets/segments.jpg';
import { Control1 } from '../../../model/Control1';
import Input from '../../Input/Input';

export const Task3 = ({ variant }: { variant: Control1 }) => {
  const table = ['x1', 'x2', 'x3', 'x4', variant.segment];

  return (
    <div className="lg:max-w-[800px]">
      <h2 className="text-xl font-semibold">3 Задание.</h2>
      <p>
        Составьте таблицу истинности для одной из функций a,b,c…i, управляющих работой соответствующего сегмента
        индикатора десятичной цифры, представленной в коде{' '}
        <span className="font-semibold">{(variant?.variant || 1) % 2 === 1 ? 'Д1' : 'Д2'}</span>
      </p>
      <p className="font-semibold">
        Смещение: {variant.bias}, сегмент: {variant.segment}
      </p>

      <img className="my-4" src={segments} alt="CegmentSmesh" />

      <div className="flex flex-wrap justify-between w-full items-center">
        {table.map((el, i) => (
          <div className="!w-1/5 text-center font-semibold" key={`table${i}`}>
            {el}
          </div>
        ))}
        {Array.from(Array(16).keys()).map(() => (
          <>
            {table.map((el2, i2) => (
              <Input
                classes={{ root: '!w-1/5 !rounded-none !min-w-[40px]', input: '!rounded-none' }}
                key={`Input${i2}`}
              />
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
