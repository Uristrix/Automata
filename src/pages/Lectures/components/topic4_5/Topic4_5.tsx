import img from './assets';

import { style } from '../../index';

export const Topic4_5 = () => {
  return (
    <div className={style}>
      <h1>
        Алгебраическое суммирование чисел с фиксированной запятой с использованием обратного и дополнительного кодов.
      </h1>
      <h2>Алгебраическое суммирование чисел с использованием обратного кода</h2>
      <p>
        При рассмотрении алгебраического суммирования разберём 4 случая, исчерпывающие все возможные ситуации, которые
        могут встретиться при выполнении операции сложения. Пусть складываемые числа Х и Y– целые, причём |Х| + |Y| &lt;
        2<sup>n</sup>.
      </p>
      <p>
        1. Х ≥ 0 и Y ≥ 0 и X + Y &lt; 2n .
        <br />В этом случае, [X ≥ 0]<sub>о</sub>+[Y ≥ 0]<sub>о</sub>=X+Y=[X + Y]<sub>о</sub>. Сложив обратные коды двух
        слагаемых, получаем обратный код суммы. То есть сложение в этом случае выполняется таким же образом, как и в
        прямом коде.
        <br /> Пример:
      </p>
      <img src={img.img1} alt="formula1" />
      <p>
        2. X ≥ 0, Y ≤ 0 и X + Y ≥ 0. Если сложим обратные коды двух слагаемых, то получим <br />
        [X ≥ 0〗<sub>о</sub>+[Y ≤ 0]
        <sub>о</sub>=X+Y+B - предварительный результат <br />
        [(X + Y) ≥ 0]<sub>о</sub>= X + Y - действительный результат
      </p>
      <p>
        Поэтому для перехода от предварительного результата к действительному необходима коррекция, нужно вычесть В. С
        учетом того, что для целых чисел В=2n-1, из воображаемого n+1 разряда результата нужно вычесть единицу и
        прибавить её к младшему разряду предварительного результата. Коррекцию можно выполнить путём прибавления в
        младший разряд суммы единицы, которая представляет собой перенос из знакового разряда.
        <br /> Пример:
      </p>
      <img src={img.img2} alt="formula2" />
      <p>
        3. X ≥ 0, Y ≤ 0 и X + Y ≤ 0 Если сложим обратные коды двух слагаемых, то получим <br />
        [X ≥ 0]<sub>о</sub>
        +[Y ≤ 0]<sub>о</sub>=X+Y+B - предварительный результат <br />
        [(X + Y) ≤ 0]<sub>о</sub>= X + Y+B - действительный результат <br />
        Замечаем, что в этом случае коррекция не требуется, и мы сразу получаем правильный результат.
        <br /> Пример:
      </p>
      <img src={img.img3} alt="formula3" />
      <p>
        При суммировании равных по модулю чисел с противоположными знаками получаем нулевой результат. В этом случае
        алгоритм суммирования остаётся таким же, а результат получается в виде 1.11…1, что соответствует обратному коду
        отрицательного нуля.
      </p>
      <p>
        4. X ≤ 0, Y ≤ 0 и |X + Y| &lt; 2<sup>n</sup>.
        <br /> Если сложим обратные коды двух слагаемых, то получим
        <br />
        [X ≤ 0]<sup>о</sup>+[Y ≤ 0]<sup>о</sup>=X+B+Y+B - предварительный результат
        <br />
        [(X + Y)≤ 0]<sup>о</sup>= X + Y+B - действительный результат
      </p>
      <p>
        Также, как и во втором случае для перехода от предварительного результата к действительному необходима
        коррекция, нужно вычесть В. Так как для целых чисел В=2<sup>n</sup>-1, то из воображаемого n+1 разряда
        результата нужно вычесть единицу и прибавить её к младшему разряду предварительного результата. Эту коррекцию
        можно выполнить путём прибавления в младший разряд суммы единицы, которая представляет собой перенос из
        знакового разряда.
        <br /> Пример:
      </p>
      <img src={img.img4} alt="formula4" />
      <p>
        Очевидно, что во всех рассмотренных случаях слагаемые можно поменять местами и при этом код суммы не изменится.
        Требуемая для реализации коррекции цепь представляет собой цепь переноса из знакового разряда в младший разряд
        сумматора, то есть сумматор замыкается в кольцо. Эта цепь может быть постоянно замкнутой, так как перенос
        возникает лишь тогда, когда действительно требуется коррекция предварительного результата.
      </p>
      <p>
        Подведя итог вышеизложенному, делаем следующий вывод по суммированию чисел в обратном коде:
        <br />
        1) обработка знаковых и цифровых разрядов чисел осуществляется по одинаковым правилам и при этом автоматически
        получается правильный знак результата; <br />
        2) исключена операция прямого вычитания.
      </p>
      <h2>Алгебраическое суммирование чисел с использованием дополнительного кода</h2>
    </div>
  );
};