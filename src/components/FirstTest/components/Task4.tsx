import { Control1 } from '../../../model/Control1';
import Input from '../../Input/Input';

export const Task4 = ({ variant }: { variant: Control1 }) => {
  const table = ['x1', 'x2', 'x3', 'x4', variant.segment, 'СДНФ', 'СКНФ'];
  return (
    <div className="lg:max-w-[801px]">
      <h2 className="text-xl font-semibold">4 Задание.</h2>
      <p className="mb-2">Доопределите функцию и представьте её в СДНФ и СКНФ.</p>
      <div className="relative w-full">
        <div className="grid grid-cols-7 w-full">
          {table.map((el, i) => (
            <div className="w-full text-center font-semibold" key={`table${i}`}>
              {el}
            </div>
          ))}
          {Array.from(Array(16).keys()).map(() => (
            <>
              {table.map((el2, i2) => (
                <Input classes={{ root: '!rounded-none !min-w-[20px]', input: '!rounded-none' }} key={`Input${i2}`} />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
