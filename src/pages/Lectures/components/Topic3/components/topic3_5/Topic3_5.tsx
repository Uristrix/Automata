import img from './assets';
import { hellOver, style } from '../../../../index';

export const Topic3_5 = () => {
  return (
    <div className={style}>
      <h1>Основные законы и правила алгебры логики.</h1>
      <p>
        Также как и для обычных арифметических операций сложения и умножения, для логического сложения и умножения
        выполняется ряд законов, таких как переместительный, сочетательный и распределительный.
      </p>
      <p>
        1. <b>Переместительный закон</b> (коммутативный) для двух переменных можно записать:
      </p>
      <p>
        x v y = y v x; (10) <br /> x y = y x. (11)
      </p>
      <p>От перемены мест слагаемых (сомножителей) логическая сумма (произведение) не изменяется.</p>
      <p>Истинность приведённых выражений следует из определения дизъюнкции и конъюнкции.</p>
      <p>
        2. <b>Сочетательный закон</b> (ассоциативный). При логическом сложении (умножении) любую группу слагаемых
        (сомножителей) можно заменить их логической суммой (произведением).
      </p>
      <p>Для трёх аргументов:</p>
      <p>
        x v y v z = x v (y v z) = (x v y) v z; (12) <br />
        xyz= x(yz) = (xy)z. (13)
      </p>
      <p>
        В качестве доказательства можно привести следующие рассуждения. Логическая сумма нескольких высказываний будет
        ложной, т.е. равняться нулю, только в том случае, когда все составляющие высказывания ложны. При этом любая
        группировка слагаемых будет давать такой же нулевой результат. С другой стороны, если имеется хотя бы одно
        истинное высказывание, то согласно выражению x v 1 = 1 и переместительного закона (10) к истинному результату
        будет приводить и любая группировка слагаемых.
      </p>
      <p>Аналогично можно доказать справедливость сочетательного закона для конъюнкции.</p>
      <p>
        3. <b>Распределительные законы</b> (дистрибутивные). Распределительный закон первого рода. Произведение суммы
        нескольких аргументов на какую-либо логическую переменную равно сумме произведений каждого слагаемого на эту
        переменную. Когда одна переменная умножается на сумму двух аргументов, имеем:
      </p>
      <p>(x v y) z = xz v yz. (14)</p>
      <p>
        Докажем это утверждение следующим образом. Левая часть обращается в нуль в том случае, когда z=0, либо
        переменные x и y равны нулю. Замечаем, что в этом случае в нуль обращается и правая часть. Левая часть равна 1,
        когда z=1 и хотя бы один из аргументов x или y равен 1. В этих случаях и правая часть обращается в 1.
      </p>
      <p>
        <b>Распределительный закон второго рода.</b> Сумма некоторой переменной и произведения нескольких аргументов
        равна произведению сумм этой переменной и каждого сомножителя. Для трёх аргументов этот закон можно записать
        так:
      </p>
      <p>x v yz = (x v y)(x v z). (15)</p>
      <p>Справедливость формулы докажем путём непосредственных преобразований правой части:</p>
      <p>
        (x v y)(x v z) =<sup>(14)</sup>x(x v z) v y(x v z) =<sup>(14)</sup>xx v xz v yx v yz=<sup>(6)</sup>x v xz v xy v
        yz=<sup>(14)</sup>x(1 v z v y) v yz=<sup>(4)</sup>x1 v yz =<sup>(8)</sup>x v yz.
      </p>
      <p>Получили левую часть, что доказывает формулу (15).</p>
      <p>
        4. <b>Законы инверсии (правила Де Моргана).</b>
      </p>
      <p>
        Отрицание логической суммы нескольких аргументов равно логическому произведению отрицаний этих же аргументов:
      </p>
      <img src={img.img1} alt="formula1" />
      <p>
        Условие обращения в нуль обоих частей выражения состоит в том, что хотя бы один из аргументов должен равен 1,
        что доказывает закон инверсии.
      </p>
      <p>
        Для конъюнкции – отрицание логического произведения нескольких аргументов равно логической сумме отрицаний этих
        же аргументов
      </p>
      <img src={img.img2} alt="formula2" />
      <p>
        Если хотя бы один аргумент xi будет ложным, то всё выражение в левой части будет истинным. То же самое можно
        сказать и для правой части выражения (17).
      </p>
      <p>Из законов Де Моргана вытекают следствия.</p>
      <img src={img.img3} alt="formula" />
      <p>
        Эти следствия позволяют выражать дизъюнкцию через конъюнкцию и отрицание, и конъюнкцию через дизъюнкцию и
        отрицание.
      </p>
      <p>
        Введём ряд определений. Так как булева алгебра симметрична относительно функций конъюнкции и дизъюнкции, то
        параллельно с определениями для конъюнкции в скобках будем давать определения для дизъюнкции.
      </p>
      <p>
        Пусть имеется некоторый конечный набор логических аргументов x<sub>1</sub>, x<sub>2</sub>, … x<sub>n</sub>.
      </p>
      <p>
        Логическое произведение (сумма) любого числа аргументов из этого набора называется <em>элементарным</em>, если
        сомножители (слагаемые) являются либо одиночными аргументами, либо их отрицаниями. Элементарная конъюнкция также
        носит название <em>конъюнктивный терм</em>, а элементарная дизъюнкция – <em>дизъюнктивный терм</em>.
      </p>
      <p>
        Количество сомножителей в элементарной конъюнкции, или количество слагаемых в элементарной дизъюнкции называется
        её <em>рангом</em>. Например:
      </p>
      <p>
        x1
        <p className={hellOver}>x2</p> - элементарная конъюнкция ранга два; <br />
        <p className={hellOver}>x1</p> v x2 v <p className={hellOver}>x3</p> - элементарная дизъюнкция ранга три;
        <br />
        x1<p className={hellOver}>x2x3</p> - не является элементарной конъюнкцией, т.к. содержит групповое отрицание.
      </p>
      <p>
        Два терма одинакового ранга r называются <em>соседними</em>, если они являются функциями одних и тех же
        аргументов и отличаются только знаком отрицания одного из сомножителей (слагаемых).
      </p>
      <p>Например:</p>
      <p>
        x1x2x3 и x1<p className={hellOver}>x2</p>x3 - соседние термы; <br />
        x1 v <p className={hellOver}>x2</p> v x3 и <p className={hellOver}>x1</p> v x2 v x3 -не являются соседними, т.к.
        два слагаемых отличаются знаками отрицания;
        <br />
        x1 v <p className={hellOver}>x2</p> и x1 v <p className={hellOver}>x3</p> - не являются соседними, т.к. являются
        функциями разных аргументов.
      </p>
      <p>
        Для соседних термов можно использовать <em>правило склеивания</em>. Пусть G1 и G2 – соседние конъюнктивные
        термы, один из которых содержит сомножитель xk, а другой <p className={hellOver}>x</p>
        <sub>k</sub>. Тогда обозначив их общую часть через G можно записать:
      </p>
      <img src={img.img4} alt="formula" />
      <p>
        Два терма G<sub>1</sub> и G<sub>2</sub> как бы склеились в один G, который представляет их общую часть, поэтому
        это правило называется правилом склеивания. Аналогичное правило докажем для дизъюнктивных термов. Пусть
      </p>
      <img src={img.img5} alt="formula" />
      <p>
        Правило развёртывания регламентирует действие противоположное склеиванию. Его целесообразно использовать при
        преобразованиях логических выражений, когда из терма меньшего ранга необходимо получить термы большего ранга.{' '}
      </p>
      <p>
        Рассмотрим правило поглощения. Пусть элементарное произведение G1 является собственной частью элементарного
        произведения G2, т.е. G2 = G1G, где G - часть G2, не входящая в G1. Тогда для их логической суммы выполняется
        правило
      </p>
      <p>
        G1 v G2 = G1 v G1G =<sup>(14)</sup>G1(1 v G) =<sup>(4)</sup>G<sub>1</sub>1=<sup>(8)</sup>G1. (22)
      </p>
      <p>
        То есть логическую сумму двух элементарных произведений, одно из которых входит в состав другого, можно заменить
        именно этим элементарным произведением. Аналогичное правило выполняется для элементарных сумм. Пусть L1 и L2
        элементарные суммы, причём L2 = L1 v L, тогда для их логического произведения выполняется правило
      </p>
      <img src={img.img6} alt="formula" />
      <p>
        Логическое произведение двух элементарных сумм, одно из которых является частью другого, можно заменить
        сомножителем, имеющим меньший ранг.
      </p>
    </div>
  );
};
