import img from './assets';

import { style } from '../../../../index';

export const Topic4_8 = () => {
  return (
    <div className={style}>
      <h1>4 способа умножения чисел с фиксированной запятой, заданных в прямом коде.</h1>
      <h2>Умножение чисел с фиксированной запятой в прямом коде</h2>
      <p>Рассмотрим умножение двух правильных дробей, заданных в прямом коде. Имеются два числа:</p>
      <p>
        [X]<sub>п</sub>=х<sub>зн</sub>,x<sub>-1</sub> x<sub>-2</sub>...x<sub>-n</sub> – множимое; <br />
        [Y]<sub>п</sub>=y<sub>зн</sub>,y<sub>-1</sub> y<sub>-2</sub>...y<sub>-n</sub> – множитель. <br /> Требуется
        вычислить произведение [Z]<sub>п</sub>=[X]<sub>п</sub>·[Y]<sub>п</sub>=z<sub>зн</sub>,z<sub>-1</sub> z
        <sub>-2</sub>...z<sub>-2n</sub>.
      </p>
      <p>
        Для представления его цифровой части без потери точности потребуется 2n разрядов. Умножение выполняется в два
        этапа. Сначала вычисляется знак произведения по правилу знаков «+» × «+» = «+», «-» × «+» = «-», «+» × «-» = «-»
        и «-» × «-» = «+». С учетом кодирования отрицательных чисел единичным значением знакового разряда, для
        вычисления знака произведения можно воспользоваться логической функцией сложения по модулю 2.
      </p>
      <p>
        z<sub>зн</sub>=x<sub>зн</sub>⊕у<sub>зн</sub>.
      </p>
      <p>
        Затем определяется цифровая часть произведения, путём перемножения модулей сомножителей. Процесс умножения можно
        представить в следующем виде.
      </p>
      <p>
        |Z|=|X| · |Y|=|X| (y<sub>-1</sub> · 2<sup>-1</sup> + y<sub>-2</sub> · 2<sup>-2</sup> + ⋯ + y<sub>-n</sub> · 2
        <sup>-n</sup>) = |X| · y<sub>-1</sub> · 2<sup>-1</sup>+|X| · y<sub>-2</sub> · 2<sup>-2</sup> + ... + |X| · y
        <sub>-n</sub> · 2<sup>-n</sup> (1.1)
      </p>
      <p>Используя схему Горнера, это выражение можно переписать так: </p>
      <p>
        |Z|=((…(((0 + |X| · y<sub>-n</sub>) · 2<sup>-1</sup> + |X| · y<sub>-n+1</sub>) · 2<sup>-1</sup> + |X| · y
        <sub>-n+2</sub>) · 2<sup>-1</sup> + ... + |X| · y<sub>-2</sub>) · 2<sup>-1</sup> + |X| · y<sub>-1</sub>) · 2
        <sup>-1</sup> (1.2)
      </p>
      <p>
        Полученные выражения (1.1) и (1.2) служат аналитическим обоснованием двух способов умножения: со старших
        разрядов множителя (1.1) и с младших разрядов множителя (1.2). Как следует из этих выражений для нахождения
        модуля произведения требуется последовательно вычислять частичные произведения, то есть умножать множимое на
        один из разрядов множителя и складывать их.
      </p>
      <h2>1. Умножение с младших разрядов множителя со сдвигом суммы частичных произведений вправо</h2>
      <p>
        Согласно (1.2), при умножении с младших разрядов множителя должна выполняться следующая последовательность
        действий. Вначале сумма частичных произведений S<sub>0</sub> принимается равной нулю. Затем анализируется
        младший разряд множителя y<sub>-n</sub>. Если y<sub>-n</sub> = 1, цифровая часть множимого |X| участвует в
        формировании цифровой части произведения, то есть прибавляется к S<sub>0</sub>. Если y<sub>-n</sub> = 0, то нет.
        Полученное первое частичное произведение S<sub>1</sub> = S<sub>0</sub> + |X|y<sub>-n</sub> умножается на 2
        <sup>-1</sup>,то есть сдвигается на один разряд вправо.
      </p>
      <p>
        Такая же последовательность действий справедлива при умножении на все последующие разряды множителя. Так, при
        умножении на разряд y<sub>-n+1</sub> анализируется следующий разряд множителя y<sub>-n+1</sub>. Если y
        <sub>-n+1</sub> = 1, то к сдвинутому первому частичному произведению S1 · 2<sup>-1</sup> прибавляется цифровая
        часть множимого |X|. Если y<sub>-n+1</sub> = 0, то |X| не прибавляется. Полученное второе частичное произведение
        S2 сдвигается на один разряд вправо. Подобная последовательность шагов выполняется для всех оставшихся разрядов
        множителя. Продемонстрируем рассмотренный способ умножения на примере.
      </p>
      <p>Пример: </p>
      <img src={img.img1} alt="formula10" />
      <p>
        Указанную процедуру умножения можно описать с помощью следующей рекуррентной формулы: <br />S<sub>i</sub> = S
        <sub>i-1</sub> · 2<sup>-1</sup> + |X| · y<sub>-n+i-1</sub>, i = 1,2,..n, S<sub>0</sub> = 0.
      </p>
      <p>
        Для нахождения произведения потребуется n раз выполнить сложение и после каждого сложения сдвигать сумму
        частичных произведений вправо. После последнего сдвига получаем цифровую часть произведения S<sub>i-1</sub> · 2
        <sup>-1</sup> = |X| · |Y| = |Z|.
      </p>
      <p>
        С учетом вычисленного на первом этапе знакового разряда получаем результат [Z]<sub>п</sub>=1,01110101. Приписав
        веса разрядов, определяем его значение: 1+4+16+32+64=117. С учетом того, что число дробное и отрицательное
        получаем значение - 117/256. Осмыслив значения сомножителей -9/16 и 13/16, убеждаемся в правильности полученного
        результата.
      </p>
      <p>
        Ниже приведена схема, реализующая умножение с младших разрядов множителя со сдвигом сумм частичных произведений
        вправо и неподвижном множимом.
      </p>
      <img src={img.img2} alt="formula11" />
      <p>
        Рис. 1 Схема умножения с младших разрядов множителя со сдвигом сумм частичных произведений вправо и неподвижном
        множимом <br /> t<sub>y</sub>=n(t<sub>сдв</sub> + t<sub>сум</sub>)
      </p>
      <p>
        Для хранения цифровой части множимого X потребуется n разрядный регистр. Цифровая часть множителя Y также
        помещается в n-разрядной регистр, который помимо хранения выполняет функцию сдвига. Младший разряд этого
        регистра управляет работой схемы «И». Если разряд равен единице, то цифровая часть множимого Х передаётся на
        суммирование в накапливающий сумматор, и нет – в противном случае. Разрядность сумматора равна 2n. В каждом
        очередном такте выполняется сдвиг вправо множителя в соответствующем регистре и накопленной в сумматоре суммы.
        Регистр сумматора содержит 2n разрядов, хотя суммируются всегда n разрядов. Длину сумматора можно уменьшить,
        если использовать для сдвига сумм частичных произведений освобождающие разряды регистра множителя. Эта связь
        показана на рисунке пунктирной линией.
      </p>
      <h2>2. Умножение с младших разрядов множителя со сдвигом множимого влево</h2>
      <p>
        Существует еще один способ умножения с младших разрядов множителя, при котором частичное произведение остаётся
        неподвижным, а множимое сдвигается влево.
      </p>
      <p>Аналитическим обоснованием этого способа является выражение (1.3)</p>
      <p>
        |Z| = |X| · |Y| = |X| · (y<sup>-1</sup> · 2<sup>-1</sup> + y<sub>-2</sub> · 2<sup>-2</sup> + y<sub>-3</sub> · 2
        <sup>-3</sup> + ⋯ + y<sub>-n</sub> · 2<sup>-n</sup>) = |X| · 2<sup>-n</sup> · y<sub>-n</sub> + |X| · 2
        <sup>-n+1</sup> · y<sub>-n+1</sub> + ⋯ + |X| · 2<sup>-3</sup> · y<sub>-3</sub> + |X| · 2<sup>-2</sup> · y
        <sub>-2</sub> + |X| · 2<sup>-1</sup> · y<sub>-1</sub> (1.3)
      </p>
      <p>
        В соответствии с приведенным выражением должна выполняться следующая последовательность действий. Анализируется
        младший разряд множителя y<sub>-n</sub>. Если y<sub>-n</sub> = 1, то сдвинутое на n разрядов вправо множимое
        участвует в формировании произведения. Если y<sub>-n</sub> = 0, то нет. Первое частичное произведение
        прибавляется к содержимому накапливающего сумматора, который предварительно обнулён. Затем осуществляется сдвиг
        множимого влево, то есть вычисляется X<sub>i+1</sub>=X<sub>i·2</sub>. Анализируется следующий разряд y
        <sub>-n+1</sub>. Если y<sub>-n+1</sub> = 1, то сдвинутое множимое прибавляется к сумматору, если y55
        <sub>-n+1</sub> = 0, то нет. Аналогичным образом обрабатываются все последующие разряды множителя. В качестве
        примера используем тот же самый пример. Перемножим цифровые части сомножителей.
      </p>
      <p>Пример:</p>
      <img src={img.img3} alt="formula3" />
      <p>
        Как следует из примера для представления цифровой части произведения потребуется 2n разрядов. Каждый раз после
        сложения множимое сдвигается влево и прибавляется или не прибавляется к сумме частичных произведений.
        Рассмотренный способ умножения нам хорошо известен из школьной программы, как способ умножения столбиком.
      </p>
      <p>
        Вычисление произведения сводится к n кратному выполнению сложения S<sub>i+1</sub> = S<sub>i</sub> + X
        <sub>i</sub> · y<sub>-n+1</sub>. Вначале S<sub>0</sub> = 0, X<sub>0</sub> = |X|. Каждый раз сдвигаем множимое
        влево X<sub>i+1</sub> = 2·X<sub>i</sub> и прибавляем его или не прибавляем к сумме частичных произведений.
      </p>
      <p>
        На рис. 2. приведена схема, реализующая рассмотренный способ умножения. В неё входят 2n разрядный сдвиговый
        регистр множимого, 2n разрядный сумматор и схемы «И» на 2n разрядов.
      </p>
      <img src={img.img4} alt="formula4" />
      <p>Рис. 2. Схема умножения с младших разрядов множителя со сдвигом множимого влево</p>
      <p>В отличие от предыдущей схемы сумматор не имеет цепей сдвига.</p>
      <h2>3. Умножение со старших разрядов множителя со сдвигом множимого вправо</h2>
      <p>Аналитическим обоснованием этого способа умножения является выражение (1.4)</p>
      <p>
        |Z| = |X| · y<sub>-1</sub> · 2<sup>-1</sup> + |X| · y<sub>-2</sub> · 2<sup>-2</sup> + ... + |X| · y<sub>-n</sub>{' '}
        · 2<sup>-n</sup> (1.4)
      </p>
      <p>
        Согласно (1.4) при умножении только на один разряд множителя должна выполняться следующая последовательность
        действий. Цифровая часть множимого сдвигается на один разряд вправо, то есть вычисляется |X| · 2<sup>-1</sup>.
        Затем анализируется старший разряд множителя y<sub>-1</sub>. Если y<sub>-1</sub> = 1, то сдвинутое множимое
        участвует в формировании произведения, то есть прибавляется к сумме частичных произведений. Если y<sub>-1</sub>=
        0, то сдвинутое множимое не участвует в формировании произведения. Выполнение такой последовательности
        соответствует умножению на старший разряд множителя и справедливо при умножении на все последующие его разряды.
        Так при умножении на второй разряд выполняется второй сдвиг множимого (|X| · 2<sup>-1</sup>) · 2<sup>-1</sup>.
        Затем анализируется значение y<sub>-2</sub>, и осуществляется или не осуществляется передача сдвинутого
        множимого X · 2<sup>-2</sup> на суммирование. И так далее. Выполним рассмотренный ранее пример с использованием
        этого способа
      </p>
      <p>Пример:</p>
      <img src={img.img5} alt="formula5" />
      <p>Схема, реализующая рассмотренный способ умножения, приведена на рис. 1.3.</p>
      <img src={img.img6} alt="formula6" />
      <p>Рис 1.3. Схема умножения со старших разрядов множителя со сдвигом множимого вправо</p>
      <p>
        T = n · t<sub>см</sub>
      </p>
      <p>
        В отличие от предыдущих двух схем n разрядный регистр множителя выполняет сдвиг влево, что позволяет
        последовательно анализировать разряды множителя, начиная со старшего разряда.
      </p>
      <h2>4. Умножение со старших разрядов множителя со сдвигом суммы частичных произведений влево</h2>
      <p>
        По аналогии с двумя первыми способами существует также способ умножения со старших разрядов множителя со сдвигом
        суммы частичных произведений влево при неподвижном множимом.
      </p>
      <p>Аналитическим обоснованием этого способа умножения является выражение (1.5). </p>
      <p>
        Z = 2<sup>-n</sup> · ((...(((0 + y<sub>-1</sub> |X|) · 2 + y<sub>-2</sub> |X|) · 2 + y<sub>-3</sub> |X|) · 2 +
        ... + y<sub>-n+1</sub> |X|) · 2 + y<sub>-n</sub> |X|) (1.5)
      </p>
      <p>
        В соответствии с этим выражением должна выполняться следующая последовательность действий. Анализируется старший
        разряд множителя y<sub>-1</sub>. Если он равен единице, то к предварительно обнуленной сумме частичных
        произведений S0 прибавляется модуль множимого. После этого полученная сумма S<sub>1</sub> умножается на два, то
        есть сдвигается влево. Затем аналогичная последовательность действий повторяется для остальных разрядов
        множителя.
      </p>
      <p>
        Для вычисления конечного значения произведения необходимо выражение в скобках умножить на 2<sup>-n</sup>, то
        есть сдвинуть вправо на n разрядов. Однако, положение запятой может быть определено заранее, что избавит от
        необходимости выполнения сдвига. Выполним рассмотренный ранее пример в соответствии с предложенным способом.
      </p>
      <p>Пример: </p>
      <img src={img.img7} alt="formula7" />
      <p>
        После умножения на 2<sup>-n</sup> (в нашем случае n = 4) и записи знакового разряда получим результат [Z]
        <sub>п</sub>=1,01110101, совпадающий с результатами, полученными ранее.
      </p>
      <p>Схема, реализующая рассмотренный способ умножения, изображена на рис. 1.4.</p>
      <img src={img.img8} alt="formula8" />
      <p>Рис 1.4. Умножение со старших разрядов множителя со сдвигом суммы частичных произведений влево</p>
      <p>
        Суммирование осуществляется по n разрядам. Однако сумматор имеет 2n разрядов. Дополнительные n разрядов
        используются как регистр сдвига влево. С целью уменьшения объёма аппаратуры для этих целей можно использовать
        освобождающиеся правые разряды регистра множителя. Однако необходимо предусмотреть цепи распространения
        переноса.
      </p>
    </div>
  );
};
