const Links = [
  {
    chapter: 'Прямой код',
    topics: [
      { name: 'Алгоритм умножение Бута.', link: '1' },
      { name: 'Умножение одновременно на 2 разряда множителя.', link: '2' },
    ],
  },
  {
    chapter: 'Обратный код',
    topics: [
      { name: 'Умножение с коррекцией результата.', link: '3' },
      { name: 'Умножение с преобразованием множителя.', link: '4' },
    ],
  },
  {
    chapter: 'Дополнительный код',
    topics: [
      { name: 'Умножение с корректирующим шагом.', link: '5' },
      { name: 'Умножение используя анализ смежных разрядов множителя.', link: '6' },
    ],
  },
];

import { Link } from 'react-router-dom';

const TopicLink = ({ name, link }: { name: string; link: string }) => {
  return (
    <li className="flex justify-start items-center min-h-6 w-full gap-2 px-2">
      <div className="w-4 h-4 rounded-[50%] bg-ocean"></div>
      <Link className="w-[90%]" to={link}>
        {name}
      </Link>
    </li>
  );
};

const Training = () => {
  return (
    <section className="rounded-2xl bg-white shadow-md overflow-hidden mx-auto w-full xl:max-w-[870px] h-[300px] md:h-[500px] xl:h-[750px]">
      <h2 className="text-center text-white font-bold bg-ocean">Практикум</h2>
      <ul className="flex flex-col gap-2 !list-disc w-full h-full overflow-y-scroll ">
        {Links &&
          Links?.map((el) => (
            <>
              <li className="w-full text-lg font-semibold px-2" key={`topic${el.chapter}`}>
                {el.chapter}
              </li>
              {el?.topics.map((el2, i2) => (
                <TopicLink name={el2.name} link={el2.link} key={`topic${el.chapter}_${i2}`} />
              ))}
            </>
          ))}
      </ul>
    </section>
  );
};

export default Training;
