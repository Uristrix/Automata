import { Control1 } from '../../../model/Control1';
import Input from '../../Input/Input';

export const Task4 = ({ variant }: { variant: Control1 }) => {
  const table = ['x1', 'x2', 'x3', 'x4', variant.segment, 'СДНФ', 'СКНФ'];
  return (
    <div className="lg:max-w-[800px]">
      <h2 className="text-xl font-semibold">4 Задание.</h2>
      <p>Доопределите функцию и представьте её в СДНФ и СКНФ.</p>
      <div className="flex flex-wrap justify-between w-full items-center overflow-x-scroll md:overflow-auto">
        {table.map((el, i) => (
          <div className="w-[14.286%] text-center font-semibold" key={`table${i}`}>
            {el}
          </div>
        ))}
        {Array.from(Array(16).keys()).map(() => (
          <>
            {table.map((el2, i2) => (
              <Input
                classes={{ root: '!w-[14.286%] !rounded-none !min-w-[20px]', input: '!rounded-none' }}
                key={`Input${i2}`}
              />
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
