import { hellOver, style } from '../../../../index';

export const Topic3_6 = () => {
  return (
    <div className={style}>
      <h1>Понятие полноты (базиса), система логических функций.</h1>
      <p>
        Любую функцию алгебры логики можно описать с помощью ограниченного набора элементарных логических функций. Как
        мы видели, например, из следствия закона отрицания, элементарную дизъюнкцию можно выразить через конъюнкцию и
        отрицание, элементарную конъюнкцию через дизъюнкцию и отрицание. Ограниченный набор элементарных логических
        функций связан с понятием функционально-полной системы логических функций f<sub>1</sub>,f<sub>2</sub> … f
        <sub>n</sub>, которое введено в алгебре логики. Дадим определение: система элементарных логических функций f
        <sub>1</sub>, f<sub>2</sub> … f<sub>n</sub>, называется полной, если любую функцию алгебры логики можно
        изобразить в виде суперпозиции функций f<sub>1</sub>, f<sub>2</sub> … f<sub>n</sub>. Функционально полную
        систему также называют базисом.
      </p>
      <p>
        Возможно существование нескольких базисов. Система, содержащая функции «И», «ИЛИ», «НЕ», называется основным
        базисом. Базисами также являются системы, содержащие функции «И», «НЕ» (базис 2), «ИЛИ», «НЕ» (базис 3), одну
        функцию Шеффера (базис 4), функцию Пирса (базис 5).
      </p>
    </div>
  );
};