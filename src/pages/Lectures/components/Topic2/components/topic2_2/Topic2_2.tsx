import { style } from '../../../../index';
import img from './assets';
export const Topic2_2 = () => {
  return (
    <div className={style}>
      <h1>Перевод чисел из одной системы счисления в другую.</h1>
      <p>Существует 2 основных метода перевода числа из одной системы счисленияв другую – табличный и расчётный.</p>
      <p>
        Табличный метод прямого перевода основан на сопоставлении таблиц соответствия чисел различных систем счисления.
        Этот метод очень громоздок, требует большого объема памяти для хранения таблиц, но применим для любых систем
        счисления.
      </p>
      <p>
        Суть другого вида табличного метода состоит в том, что имеются таблицы эквивалентов в каждой системе только для
        цифр и степеней основания. Задача перевода сводится к тому, что в представлении числа в виде полинома для каждой
        системы счисления представляют эквиваленты из новой системы для всех цифр и их весов разрядов и производят
        действия умножения и сложения по правилам арифметики по новому основанию р. Получаемый при этом результат будет
        изображать число в новой системе счисления.
      </p>
      <p>Пример.</p>
      <p>Перевести число А = 117 в двоичную систему счисления</p>
      <img src={img.img1} alt="formula" />
      <p>
        А = 117 = 1 * 10<sup>2</sup> + 1 * 10<sup>1</sup> + 7 * 10<sup>0</sup> = 001 * 1100100 + 001 * 1010 + 111 * 001
        = (1110101)<sub>2</sub>
      </p>
      <p>Второй вариант табличного метода применим только к позиционным системам счисления</p>
    </div>
  );
};