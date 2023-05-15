import { Task5_1 } from '../../../components/Exercise/components/Task5_1';

export const Test5 = () => {
  return (
    <div className="mx-3 md:mx-auto lg:w-[1000px] md:bg-white md:p-4 md:rounded-2xl md:shadow-2xl">
      <h1 className="text-2xl text-center font-bold">Контрольная работа № 5</h1>
      <h2 className="text-xl text-center font-bold">А = 3/16, В = 9/16</h2>
      <h3 className="text-xl text-center font-bold mt-2">Алгоритм бута: </h3>
      <form
        //onSubmit={SendResult}
        className="flex flex-col mx-auto mt-2 md:mt-5 w-[330px] md:w-full overflow-x-scroll md:overflow-hidden"
      >
        <Task5_1 />
      </form>

      <h3 className="text-xl text-center font-bold mt-2">Умножение одновременно на два разряда множителя: </h3>
      <form
        //onSubmit={SendResult}
        className="flex flex-col mx-auto mt-2 md:mt-5 w-[330px] md:w-full overflow-x-scroll md:overflow-hidden"
      >
        <Task5_1 />
      </form>
    </div>
  );
};
