import img from './assets';

import { style } from '../../index';

export const Topic4_11 = () => {
  return (
    <div className={style}>
      <h1>Умножение в дополнительном коде используя анализ двух смежных разрядов множителя</h1>
      <p>Рассмотрим ещё один алгоритм, который основывается на доказанном выше утверждении.</p>
      <p>
        [X]<sub>д</sub> · [Y]<sub>д</sub> = [X]<sub>д</sub> · (-y<sub>0</sub> · 2<sup>0</sup> + y<sub>-1</sub> · 2
        <sup>-1</sup> + y<sub>-2</sub> · 2<sup>-2</sup> + ... + y<sub>-n</sub> · 2<sup>-n</sup>) = -[X]<sub>д</sub> · 2
        <sup>0</sup> · y<sub>0</sub> + [X]<sub>д</sub> · y<sub>-1</sub> · (2<sup>0</sup> - 2<sup>-1</sup>) + [X]
        <sub>д</sub> · y<sub>-2</sub> · (2<sup>-1</sup> - 2<sup>-2</sup>) + ... + [X]<sub>д</sub> · y<sub>-n</sub> · (2
        <sup>-n+1</sup> - 2<sup>-n</sup>) = [X]<sub>д</sub> · 2<sup>0</sup> · (y<sub>-1</sub> - y<sub>0</sub>) + [X]
        <sub>д</sub> · 2<sup>-1</sup> · (y<sub>-2</sub> - y<sub>-1</sub>) + [X]<sub>д</sub> · 2<sup>-2</sup> · (y
        <sub>-3</sub> - y<sub>-2</sub>) + ... + [X]<sub>д</sub> · 2<sup>-n+1</sup>· (y<sub>-n</sub> - y<sub>-n+1</sub>)
        + [X]<sub>д</sub> · 2<sup>-n</sup> · (y<sub>-n-1</sub> - y<sub>-n</sub>) (1.1)
      </p>
      <p>
        В соответствии с (1.1) выполняется анализ двух смежных разрядов множителя y<sub>-i</sub> y<sub>-i-1</sub>.
      </p>
      <p>
        Если они совпадают, то есть анализируемая пара равна 00 или 11, то сдвинутое множимое [X]<sub>д</sub> · 2
        <sup>-i</sup> не прибавляется к сумме частичных произведений.
      </p>
      <p>
        Если 01, то сдвинутое множимое [X]<sub>д</sub> · 2<sup>-i</sup> прибавляется к сумме частичных произведений.
      </p>
      <p>
        Если 10, то сдвинутое множимое [X]<sub>д</sub> · 2<sup>-i</sup> вычитается из суммы частичных произведений.
      </p>
      <p>Пример: </p>
      <img src={img.img1} alt="formula1" />
      <p>Пример: </p>
      <img src={img.img2} alt="formula2" />
      <p>
        Как видно из рассмотренных примеров, умножение выполняется за n + 1 шагов. Причем знаковый разряд множителя
        обрабатывается вместе с цифровыми разрядами по общим правилам.
      </p>
    </div>
  );
};
