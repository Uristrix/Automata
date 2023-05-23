import { Task5_1 } from '../../../components/Exercise/components/Task5_1';
import Button from '../../../components/Button/Button';

export const Test6 = () => {
  return (
    <div className="mx-3 md:mx-auto w-full xl:w-[1000px] md:bg-white md:p-4 md:rounded-2xl md:shadow-2xl">
      <h1 className="text-2xl text-center font-bold">Контрольная работа № 6</h1>
      <h2 className="text-xl text-center font-bold">А = 3/16, В = 9/16</h2>
      <h3 className="text-xl text-center font-bold mt-2">Умножение чисел в обратном коде с корректирующими шагами: </h3>
      <form
        //onSubmit={SendResult}
        className="flex flex-col mx-auto mt-2 md:mt-5 w-[330px] md:w-full overflow-x-scroll md:overflow-hidden"
      >
        <Task5_1 />
        <h3 className="text-xl text-center font-bold mt-5 mb-5">Cекционное умножение: </h3>
        <Task5_1 />

        <Button style="mx-auto mt-5" type="submit">
          Отправить ответ
        </Button>
      </form>
    </div>
  );
};
