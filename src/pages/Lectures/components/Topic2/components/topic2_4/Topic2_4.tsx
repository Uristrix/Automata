import { style } from '../../../../index';
import img from './assets';
export const Topic2_4 = () => {
  return (
    <div className={style}>
      <h1>
        Перевод целых чисел, перевод правильных дробей, перевод неправильных дробей, перевод в системы счисления с
        кратным основанием.
      </h1>
      <h2>Перевод чисел из двоичной системы счисления в восьмеричную и шестнадцатеричную и обратно</h2>
      <p>Пусть число А, записанное в двоичной системе имеет вид</p>
      <img src={img.img1} alt="formula" />
      <p>Замечаем, что в скобках находится число, принимающее значение от 0 до 7, т.е. восьмеричная цифра</p>
      <p>Следовательно, мы получим представление числа в восьмеричной системе счисления </p>
      <p>
        А = (b<sub>m</sub> ... b<sub>2</sub>b<sub>1</sub>b<sub>0</sub>b<sub>-1</sub> ... )<sub>8</sub>
      </p>
      <p>
        Выполнив группировку по четыре двоичных разряда вправо и влево от запятой и заменив четыре двоичных разряда
        16-ричной цифрой получаем запись числа А в 16-ричной системе счисления.
      </p>
      <p>Правило обратного перехода от 8 или 16 – ричной системы счисления к двоичной будет следующим:</p>
      <p>
        В 8 или 16 ричной записи числа заменяем. Каждую цифру этого числа соответствующим трехразрядным или
        четырехразрядным двоичным числом
      </p>
      <p>
        Пример. <br />
        Пусть А= (1’110’011’010, 011’010)<sub>2</sub> = ( 1 6 3 2, 3 2)<sub>8</sub> <br /> A = (11’1001’1010, 0110’10)
        <sub>2</sub>= ( 3 0 A , 6 8)<sub>16</sub>
      </p>
    </div>
  );
};
