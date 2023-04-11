import React from 'react';

const Test1Task2 = (props: any) => {
  return (
    <div>
      <span className="h_1"> 2 Задание.</span>
      <br />
      Целую часть числа переведите в другие системы счисления по схеме, изображенной на рисунке, где p — основание
      системы счисления. Р=3,5,7 в зависимости от варианта.
      <br />
      <i>
        {props.varChapter1}
        <sub>{props.p}</sub> = <input className="i_4" />
        <sub>2</sub>
      </i>
      <br />
      <i>
        {props.varChapter1}
        <sub>{props.p}</sub> = <input className="i_3" />
        <sub>3</sub>
      </i>
      <br />
      <i>
        {props.varChapter1}
        <sub>10</sub> = <input className="i_3" />
        <sub>2</sub>
      </i>
      <br />
      <i>
        {props.varChapter1}
        <sub>10</sub> = <input className="i_3" />
        <sub>{props.p}</sub>
      </i>
      <br />
      <i>
        {props.varChapter1}
        <sub>2</sub> = <input className="i_3" />
        <sub>3</sub>
      </i>
      <br />
      <i>
        {props.varChapter1}
        <sub>2</sub> = <input className="i_3" />
        <sub>{props.p}</sub>
      </i>
      <br />
    </div>
  );
};

export default Test1Task2;
