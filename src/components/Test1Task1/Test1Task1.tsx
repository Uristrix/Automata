import React from 'react';

const Test1Task1 = (props: any) => {
  return (
    <div>
      <span className="h_1">1 Задание.</span>
      <br />
      Выполните перевод заданного числа из десятичной системы счисления в двоичную, восьмеричную и шестнадцатеричную
      систему счисления с заданной точностью. (Девять разрядов после запятой для двоичной системы, три разряда — для
      восьмеричной, и два — для шестнадцатеричной.) Исходное число содержит три разряда в целой части и три разряда в
      дробной части.
      <br />
      <i>
        {props.varChapter1}
        <sub>10</sub> = <input className="i_4" />
        <sub>2</sub>
      </i>
      <br />
      <i>
        {props.varChapter1}
        <sub>10</sub> = <input className="i_3" />
        <sub>8</sub>
      </i>
      <br />
      <i>
        {props.varChapter1}
        <sub>10</sub> = <input className="i_3" />
        <sub>16</sub>
      </i>
      <br />
    </div>
  );
};

export default Test1Task1;
