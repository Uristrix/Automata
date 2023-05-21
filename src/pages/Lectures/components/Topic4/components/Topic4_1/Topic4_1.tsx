import ReactPlayer from 'react-player';
import img from './assets';
import { style } from '../../../../index';

export const Topic4_1 = () => {
  return (
    <div className={style}>
      <h1>
        Способы представления чисел в ЭВМ. Форматы представления чисел с фиксированной запятой (точкой) и с плавающей
        запятой.
      </h1>
      <h2>Способы представления числовой информации в цифровых автоматах</h2>
      <p>
        Различают следующие формы представления чисел:
        <br />
        - естественная форма;
        <br />
        - с фиксированной запятой (точкой);
        <br />
        - с плавающей запятой.
        <br />
        Естественную форму используют в повседневной жизни для записи числа в виде (1.1):
      </p>
      <img src={img.img1} alt="formula1" />
      <p>
        Вначале указывается знак числа. Его отсутствие говорит о том, что число положительное. Затем следуют цифровые
        разряды. Цифровые разряды представляют целую и дробную части числа, разделенные запятой. Если целая часть у
        числа отсутствует, то слева от запятой записывается ноль. Если отсутствует дробная часть, то запятая опускается.
        Если нумерацию разрядов числа вести как показано в записи (1.1), от запятой влево и вправо и разряды целой части
        нумеровать целыми положительными числами, начиная с нуля, а разряды дробной части - целыми отрицательными
        числами, то веса разрядов будут представлять собой основание системы счисления р, возведенное в степень,
        соответствующую номеру разряда. В повседневной жизни мы имеем дело с десятичными числами, поэтому p=10 и веса
        разрядов целой части один, десять, сто, тысяча и так далее. Веса дробной части одна десятая, одна сотая, одна
        тысячная и так далее. Для представления цифровой части числа в цифровом автомате с использованием естественной
        формы потребуется n = m+r разрядов, причём m разрядов для представления целой части числа и r разрядов для
        представления его дробной части. Для представления знака потребуется ещё один разряд.
      </p>
      <p>
        Представленные в p-ичной системе счисления числа в виде (1.1) называются числами с естественной запятой. Их
        значения определяются по формуле 1.2.
      </p>
      <img src={img.img2} alt="formula2" />
      <div className=" relative w-full">
        <ReactPlayer width="100%" url={'https://youtu.be/JNhsPGya5Wo?t=0'} controls={true} />
      </div>
      <p>
        Чтобы использовать такую форму в цифровых автоматах, для каждого n-разрядного числа необходимо предусмотреть
        возможность указания положения запятой в любом месте кода, для чего понадобится дополнительное оборудование. К
        недостаткам естественной формы представления чисел в цифровых автоматах также следует отнести усложнение
        арифметических цепей и трудность оперирования с очень большими и очень малыми по абсолютной величине числами. По
        этой причине естественную форму применяют лишь в калькуляторах.
      </p>

      <h2>Представление чисел в формате с фиксированной запятой (точкой)</h2>
      <p>
        Формат представления чисел с фиксированной запятой называется так потому, что место запятой в разрядной сетке
        цифрового автомата заранее определено. Поэтому не нужно каждый раз указывать на место запятой в данном числе.
        Сущность этого способа представления можно выразить формулой 1.3
      </p>
      <img src={img.img3} alt="formula3" />

      <p>
        Фиксированная запятая характеризуется m = const. Если m = 0, то в этом случае все цифровые разряды используются
        для представления дробной части числа. Обозначения и веса разрядов для числа, содержащего n + 1 разряд, включая
        знаковый, представлены на рисунке 1.1.
      </p>
      <img src={img.img4} alt="formula4" />
      <span>Рис. 1.1 Формат представления правильных дробей</span>
      <p>
        Такое представление использовалось в вычислительных машинах первых поколений. Оно обусловлено необходимостью
        уменьшить вероятность переполнения разрядной сетки машины, то есть уменьшить опасность потери значащих цифр
        старших разрядов при выполнении арифметических операций. Результат умножения и сложения чисел с разными знаками
        никогда не выходит за пределы разрядной сетки.
      </p>
      <p>
        В результате сложения чисел одного знака возможно переполнение не более чем на один разряд. Переполнение
        возможно при выполнении операции деления. Однако, по статистике, выполнение операции деления встречается
        значительно реже, чем умножение. Максимальное по модулю число, которое можно представить в двоичной системе
        счисления при такой форме представления:
      </p>
      <img src={img.img5} alt="formula5" />
      <p>Минимальное по модулю, отличное от нуля число &lt;,</p>
      <img src={img.img6} alt="formula6" />
      <p>
        Числа, лежащие в диапазоне -|X|&ne;min &lt; X &lt;|X|<sub>min</sub>, представляются в разрядной сетке как
        машинный нуль. Эта область называется областью нечувствительности. Диапазон представимых чисел определяется так:
      </p>
      <img src={img.img7} alt="formula7" />
      <p>
        Недостатком такого способа представления чисел является необходимость выполнения трудоёмкого расчёта масштабов в
        процессе подготовки задачи для решения на ЭВМ. С помощью расчёта масштабов обеспечиваются значения модулей
        исходных чисел, промежуточных и окончательных результатов, меньшие единицы.
      </p>
      <p>
        В ряде вычислительных машин фиксированная запятая характеризуется значением m = n. В этом случае, все цифровые
        разряды используются для представления его целой части. Веса разрядов числа, содержащего n + 1 разряд, включая
        знаковый, представлены на рисунке 1.2.
      </p>
      <img src={img.img8} alt="formula8" />
      <span>Рис. 1.2 Формат представления целых чисел</span>
      <p>В этом случае, для p = 2 получаем</p>
      <img src={img.img9} alt="formula9" />
      <p>
        Так как запятая, отделяющая целую часть от дробной, находится правее младшего разряда, то при записи такого
        числа на бумаге она опускается. Чтобы отделить знаковый разряд от цифровой части для визуального восприятия на
        бумаге используется точка. По этой причине используется и другое название рассматриваемого формата - с
        фиксированной точкой.
      </p>
      <p>Диапазон представимых в таком формате чисел</p>
      <img src={img.img10} alt="formula10" />
      <p>
        Необходимость расчёта масштабов, обязанность программиста следить за положением запятой во время вычислений
        являются недостатками рассматриваемого способа представления чисел.
      </p>
      <h2>Представление чисел в формате с плавающей запятой</h2>
      <p>
        Плавающая запятая (иногда называется нормальной формой представления чисел) определяется значением m ≠ const. В
        этом случае
      </p>
      <img src={img.img11} alt="formula11" />
      <p>
        M называется мантиссой, а m называется порядком числа. То есть, число представляется так: Х<sub>p</sub>=p
        <sup>m</sup>M
      </p>
      <p>
        Значение m может быть, как положительным, так и отрицательным. <br />
        Если: m &le; 0, то X<sub>p</sub>-дробное число;
        <br /> 1 &le; m &lt; n, то X<sub>p</sub>-содержит целую и дробную части;
        <br /> m &ge; n, то X<sub>p</sub>-целое число.
      </p>
      <p>
        Представление чисел в формате с плавающей запятой продемонстрируем на примере десятичной системы счисления.
        <br />
        123,456 = 10<sup>3</sup>∙0,123456
        <br /> 123,456 = 10<sup>4</sup>∙0,0123456
        <br /> 0,00123456 = 10<sup>-2</sup>∙0,123456
        <br />
        0,00123456 = 10<sup>-1</sup>∙0,0123456
      </p>
      <p>
        В целях однозначного представления любого числа введено понятие нормализованное число. Нормализованным считается
        такое число, мантисса которого удовлетворяет неравенству
      </p>
      <img src={img.img12} alt="formula12" />
      <p>
        Другими словами, нормализованным числом является то, у которого разряд X<sub>-1</sub>≠ 0. В приведённых примерах
        10<sup>3</sup>∙0,123456 и 10<sup>-2</sup>∙0,123456 - нормализованные числа, а два других нет, так как у них
        разряд X<sub>-1</sub>= 0. Для записи числа в разрядной сетке цифрового автомата потребуется k + 1 разрядов для
        представления порядка (1 - знак и k - разрядов цифровое значение) и n + 1 разрядов для представления мантиссы.
        Причём знак числа определяется знаком мантиссы. Формат числа приведен на рисунке 1.3.
      </p>
      <img src={img.img13} alt="formula13" />
      <p>
        <span>Рис. 1.3 Формат представления чисел с плавающей запятой</span>
      </p>
      <p>
        Таким образом, формат с плавающей запятой для представления числа в цифровом автомате использует две
        составляющие - порядок числа и его мантиссу. Причем для задания порядка числа используется целочисленный формат
        представления чисел с фиксированной точкой, а для задания мантиссы формат представления правильных дробей с
        фиксированной запятой.
      </p>
    </div>
  );
};