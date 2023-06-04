const Links = [
  {
    chapter: 'Вводные сведения',
    topics: [
      { name: 'Понятие «автомат», два аспекта этого понятия.', link: 'lecture/1_1' },
      { name: 'Дисциплина «Теория автоматов», цели и задачи её изучения.', link: 'lecture/1_2' },
    ],
  },
  {
    chapter: 'Системы счисления',
    topics: [
      {
        name: 'Системы счисления, позиционные, непозиционные, однородные, неоднородные, с постоянными весами разрядов, с непостоянными весами разрядов, код Грея, системы счисления специального назначения.',
        link: 'lecture/2_1',
      },
      { name: 'Перевод чисел из одной системы счисления в другую.', link: 'lecture/2_2' },
      { name: 'Два метода перевода чисел: табличный и расчетный.', link: 'lecture/2_3' },
      {
        name: 'Перевод целых чисел, перевод правильных дробей, перевод неправильных дробей, перевод в системы счисления с кратным основанием.',
        link: 'lecture/2_4',
      },
      { name: 'Выбор системы счисления для ЭВМ', link: 'lecture/2_5' },
    ],
  },
  {
    chapter: 'Логические основы цифровых автоматов',
    topics: [
      {
        name: 'Определение логической переменной и логической функции.  ',
        link: 'lecture/3_1',
      },
      { name: 'Простые и сложные функции.', link: 'lecture/3_2' },
      {
        name: 'Основные элементарные логические функции: отрицание, конъюнкция, дизъюнкция, сложение по модулю два, равнозначность, стрелка Пирса, штрих Шеффера.',
        link: 'lecture/3_3',
      },
      { name: 'Эквивалентность и её примеры.', link: 'lecture/3_4' },
      { name: 'Основные законы и правила алгебры логики.', link: 'lecture/3_5' },
      { name: 'Понятие полноты (базиса), система логических функций.', link: 'lecture/3_6' },
      { name: 'Представление логических функций в базисе И, ИЛИ, НЕ.', link: 'lecture/3_7' },
      { name: 'Нормальные и совершенные нормальные конъюнктивные и дизъюнктивные формы.', link: 'lecture/3_8' },
      { name: 'Понятие минимального базиса.', link: 'lecture/3_9' },
      { name: 'Базис Шеффера.', link: 'lecture/3_10' },
      { name: 'Представление логических функций в базисе Шеффера.', link: 'lecture/3_11' },
      { name: 'Базис Пирса.', link: 'lecture/3_12' },
      { name: 'Представление логических функций в базисе Пирса.', link: 'lecture/3_13' },
      { name: 'Задача анализа и синтеза логических функций.', link: 'lecture/3_14' },
      { name: 'Геометрическое и числовое представление логических функций.', link: 'lecture/3_15' },
      {
        name: 'Понятия и определения: минтерм,ранг, покрытие, вхождение, импликанта, сокращенная нормальная форма, тупиковая форма.',
        link: 'lecture/3_16',
      },
      { name: 'Задача минимизации логических функций и ограничения при ее рассмотрении.', link: 'lecture/3_17' },
      { name: 'Методы минимизации логических функций.', link: 'lecture/3_18' },
      { name: 'Минимизация логических функций методом Квайна. Пример.', link: 'lecture/3_19' },
      { name: 'Минимизация логических функций методом Квайна мак Класки.', link: 'lecture/3_20' },
      { name: 'Минимизация с помощью карт Карно.', link: 'lecture/3_21' },
      { name: 'Не полностью определенные логические функции и их минимизация.', link: 'lecture/3_22' },
    ],
  },
  {
    chapter: 'Арифметические основы цифровых автоматов',
    topics: [
      {
        name: 'Способы представления чисел в ЭВМ. Форматы представления чисел с фиксированной запятой (точкой) и с плавающей запятой.',
        link: 'lecture/4_1',
      },
      { name: 'Диапазон и точность представления чисел.', link: 'lecture/4_2' },
      { name: 'Представление в ЭВМ чисел со знаком.', link: 'lecture/4_3' },
      { name: 'Прямой, обратный и дополнительный коды.', link: 'lecture/4_4' },
      {
        name: 'Алгебраическое суммирование чисел с фиксированной запятой с использованием обратного и дополнительного кодов.',
        link: 'lecture/4_5',
      },
      { name: 'Модифицированные коды.', link: 'lecture/4_6' },
      {
        name: 'Умножение правильных дробей, представленных в прямом, дополнительном, обратном кодах на два в степени +/- k.',
        link: 'lecture/4_7',
      },
      { name: '4 способа умножения чисел с фиксированной запятой, заданных в прямом коде.', link: 'lecture/4_8' },
      {
        name: 'Логические и аппаратные методы ускорения умножения. Умножение одновременно на два разряда множителя. Матричные схемы умножения.',
        link: 'lecture/4_9',
      },
      { name: 'Умножение в дополнительном коде с использованием корректирующего шага.', link: 'lecture/4_10' },
      {
        name: 'Умножение в дополнительном коде используя анализ двух смежных разрядов множителя.',
        link: 'lecture/4_11',
      },
      { name: 'Умножение в обратном коде.', link: 'lecture/4_12' },
      {
        name: 'Деление чисел с фиксированной запятой, заданных в прямом и дополнительном кодах.',
        link: 'lecture/4_13',
      },
      { name: 'Деление с восстановлением остатка и без восстановления.', link: 'lecture/4_14' },
      { name: 'Деление со сдвигом остатка и со сдвигом делителя.', link: 'lecture/4_15' },
      { name: 'Выполнение арифметических операций над числами с плавающей запятой.', link: 'lecture/4_16' },
      { name: 'Обоснование блокировок.', link: 'lecture/4_17' },
      { name: 'Машинный нуль и бесконечность.', link: 'lecture/4_18' },
      { name: 'Десятичные двоично-кодированные системы.', link: 'lecture/4_19' },
    ],
  },
];

import { Link } from 'react-router-dom';

const TopicLink = ({ name, link }: { name: string; link: string }) => {
  return (
    <li className="flex justify-start items-center min-h-6 w-full gap-2 px-2 last:mb-6">
      <div className="w-4 h-4 rounded-[50%] bg-ocean"> </div>
      <Link className="w-[90%]" to={link}>
        {name}
      </Link>
    </li>
  );
};

const Topics = () => {
  return (
    <section className="rounded-2xl bg-white shadow-md overflow-hidden mx-auto w-full lg:max-w-[870px] h-[300px] md:h-[500px] xl:h-[750px]">
      <h2 className="text-center text-white font-bold bg-ocean">Учебный материал</h2>
      <ul className="flex flex-col gap-2 !list-disc w-full h-full overflow-y-scroll ">
        {Links &&
          Links?.map((el) => (
            <>
              <li className="w-full text-lg font-semibold px-2" key={`topicH${el.chapter}`}>
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

export default Topics;
