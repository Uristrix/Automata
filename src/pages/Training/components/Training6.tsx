import { Task5_1 } from '../../../components/Exercise/components/Task5_1';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

export const Training6 = () => {
  return (
    <div className="mx-3 md:mx-auto w-full xl:w-[1000px] md:bg-white md:p-4 md:rounded-2xl md:shadow-2xl">
      <h1 className="text-2xl text-center font-bold">
        Умножение используя анализ смежных разрядов множителя (дополнительный код)
      </h1>
      <h2 className="text-xl text-center font-bold">А = 3/16, В = 9/16</h2>
      <form
        //onSubmit={SendResult}
        className="flex flex-col mx-auto mt-2 md:mt-5 w-[350px] md:w-full overflow-x-scroll md:overflow-hidden"
      >
        <Task5_1 countBlock={1} />

        <Button style="mx-auto mt-5" type="submit">
          Проверить
        </Button>
        <Button style="min-w-[300px] mt-5 ml-auto">
          <Link className="w-[90%]" to={'/lecture/4_11'}>
            Перейти к примеру →
          </Link>
        </Button>
      </form>
    </div>
  );
};
export default Training6;
