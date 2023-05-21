import img from './assets';
import { hellOver, style } from '../../../../index';

export const Topic3_8 = () => {
  return (
    <div className={style}>
      <h1>Нормальные и совершенные нормальные конъюнктивные и дизъюнктивные формы.</h1>
      <p>Запись вида</p>
      <img src={img.img5} alt="formula" />
      <p>
        представляет собой запись функции в совершенной <em>дизъюнктивной нормальной форме</em> (СДНФ).
      </p>
      <p>
        <b>Нормальной</b> эта форма называется, так как члены функции являются элементарными конъюнкциями.{' '}
        <b>Дизъюнктивной</b> форма называется потому, что все члены соединены в одну функцию знаком дизъюнкции.
        <b>Совершенной</b> называется потому, что все её члены являются элементарными конъюнкциями высшего ранга, то
        есть являются конституентами единицы.
      </p>
      <p>
        Другими словами определение СДНФ можно перефразировать следующим образом.{' '}
        <b>СДНФ есть дизъюнкция элементарных конъюнкций высшего ранга (конституент единицы).</b>
      </p>
      <p>
        Если условие наличия высшего ранга всех конъюнкций не выполняeтся, имеем ДНФ. Если конъюнкции не являются
        элементарными, имеем ДФ.
      </p>
      <p>
        С учётом правил поглощения, склеивания и развёртывания делаем заключение о том, что представление функции в ДНФ
        или в ДФ не является однозначным. И только СДНФ является однозначным представлением ФАЛ.
      </p>
      <p>
        Так как от любой аналитической формы записи можно перейти к таблице истинности, и от таблицы истинности к форме
        (25), то форма (25) определяет канонический вид любой логической функции.
      </p>
      <p>Исключением является функция &equiv;0, которая не представляет интереса на практике.</p>
      <p>
        Поскольку алгебра логики симметрична относительно логического сложения и умножения, то должна существовать ещё
        одна каноническая форма логических функций в виде конъюнкций конституент нуля.
      </p>
      <p>
        От аналитической записи в виде (24) перейдём к следующей форме записи, где  - знак логического произведения
      </p>
      <img src={img.img8} alt="formula" />
      <p>
        Ф<sub>j</sub> - есть макстерм или конституента нуля.
      </p>
      <img src={img.img9} alt="formula" />
      <p>
        Форма представления функции в виде (26) является <em>совершенной конъюнктивной нормальной формой</em> (СКНФ).
      </p>
      <p>
        <b>Нормальной</b> эта форма называется потому, что её члены являются элементарными дизъюнкциями.{' '}
        <b>Конъюнктивной</b> – т.к. все члены соединены в одну функцию знаком конъюнкции. <b>Совершенной</b> - т.к. все
        члены являются элементарными дизъюнкциями высшего ранга.
      </p>
      <p>
        Перефразируя определение СКНФ, можно сказать, СКНФ есть конъюнкция элементарных дизъюнкций высшего ранга
        (конституент нуля).
      </p>
      <p>
        Если условие наличия высшего ранга всех элементарных дизъюнкций не выполняется, имеем КНФ. Если дизъюнкции не
        являются элементарными, имеем КФ.
      </p>
      <p>
        Представление ФАЛ в виде КНФ или КФ не является однозначным, и только форма (26) определяет канонический вид
        ФАЛ.
      </p>
      <p>Пример 2.</p>
      <p>
        <em>
          Привести к СКНФ функцию, заданную таблицей истинности табл. 5. Здесь P(x1,x2…xn) = 0 на пяти наборах. Этим
          наборам соответствуют конституенты нуля:{' '}
        </em>
      </p>
      <img src={img.img10} alt="formula" />
      <p>
        Перейти к СДНФ и СКНФ можно не только используя таблицу истинности, но и непосредственно от произвольной
        аналитической записи функции. Для этого необходимо выполнить следующие шаги.
      </p>
      <p>
        1) Исключить из аналитического выражения функции &oplus;, &uarr;, /, ~, &rarr; выразив их через «И», «ИЛИ»,
        «НЕ». <br />
        2) Освободиться от общего и групповых отрицаний, используя законы инверсии. <br />
        3) Используя распределительный закон 1-го рода, можно перейти к ДНФ. Используя распределительный закон 2-го
        рода, можно перейти к КНФ. <br />
        4) Применяя правило развертывания, преобразовать члены ДНФ и члены КНФ к соответствующим конституентам.
      </p>
      <p>Пример 3.</p>
      <img src={img.img11} alt="formula" />
      <p>
        <em>
          Замечаем, что в состав СДНФ и СКНФ входит по четыре терма. Суммарное число термов составляет 2<sup>n</sup> = 2
          <sup>3</sup> = 8.
        </em>
      </p>
      <p>
        Базис «И», «ИЛИ», «НЕ» является избыточным, т.к. возможно удаление из него некоторых функций. Например,
        используя законы де Моргана, можно удалить функцию «И» заменив её на «ИЛИ» и «НЕ», либо функцию «ИЛИ», заменив
        её на функции «И», «НЕ».
      </p>
      <p>
        <b>
          Минимальным является базис, если удаление из него хотя бы одной функции превращает систему ФАЛ в неполную.
          Минимальными являются базисы 4 и 5, содержащие по одной функции.
        </b>
      </p>
    </div>
  );
};