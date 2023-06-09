import img from './assets';
import { hellOver, style } from '../../../../index';

export const Topic3_20 = () => {
  return (
    <div className={style}>
      <h1>Минимизация логических функций методом Квайна мак Класки.</h1>
      <p>
        Американский учёный Мак-Класки предложил усовершенствование метода Квайна в части нахождения первичных импликант
        функции. Так как на этом этапе операцию склеивания можно выполнить только на соседних термах, то нет
        необходимости полного попарного сравнения всех исходных термов функции.
      </p>
      <p>
        Метод использует числовое представление термов. Причём термы разбиваются на группы по числу единиц в двоичном
        наборе, и сравнение осуществляется в соседних группах
      </p>
      <p>Пример 7.</p>
      <p>Для рассмотренного примера 6 f(x1x2x3x4) = &sum;(1, 3, 4, 5, 9, 11, 12, 14). </p>
      <p>Двоичные наборы, на которых функция равна единице, разбиваем на три группы по числу единиц:</p>
      <img src={img.img1} alt="formula" />
      <p>Получили три группы О – кубов.</p>
      <p>
        <b>Этап 1.</b> Находим первичные импликанты.
      </p>
      <p>
        а) Сравниваем К<sup>0</sup>1 и К<sup>0</sup>2. Линиями показываем соседние термы, которые можно склеить.
      </p>
      <img src={img.img2} alt="formula" />
      <p>
        На основании сравнения строим куб ~K<sub>1</sub>
        <sup>1</sup>, в котором поглощённая координата заменяется символом X. Получаем
      </p>
      <img src={img.img3} alt="formula" />
      <p>
        б) Сравниваем К<sub>0</sub>
        <sup>2</sup> и К<sub>0</sub>
        <sup>3</sup>
      </p>
      <img src={img.img4} alt="formula" />
      <p>
        Строим куб ~K<sub>2</sub>
        <sup>1</sup>
      </p>
      <img src={img.img5} alt="formula" />
      <p>Первичных импликант ранга 4 нет.</p>
      <p>в) Разбиваем все 1 – кубы на четыре группы в зависимости от положения независимой координаты X:</p>
      <img src={img.img6} alt="formula" />
      <p>
        г) Выполняем поиск соседних импликант внутри каждой группы. К<sub>1</sub>
        <sup>1</sup>, К<sub>2</sub>
        <sup>1</sup>, К<sub>3</sub>
        <sup>1</sup>, К<sub>4</sub>
        <sup>1</sup>
      </p>
      <img src={img.img7} alt="formula" />
      <p>
        На основании сравнения строим 2- куб К<sup>2</sup>={'{X0X1}'}
      </p>
      <p>
        После выполнения этого пункта получаем следующие первичные импликанты <p className={hellOver}>x1</p>x2
        <p className={hellOver}>x3</p>, x1x2<p className={hellOver}>x4</p>, x2<p className={hellOver}>x3</p>
        <p className={hellOver}>x4</p>, <p className={hellOver}>x2</p>x4, <p className={hellOver}>x1</p>
        <p className={hellOver}>x3</p>x4, что согласуется с табл. 3
      </p>
      <p>Дальнейший алгоритм минимизации функции по этому методу совпадает с рассмотренным ранее методом Квайна.</p>
    </div>
  );
};
