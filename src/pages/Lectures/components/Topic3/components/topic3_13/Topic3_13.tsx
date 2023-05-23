import img from './assets';
import { hellOver, style } from '../../../../index';

export const Topic3_13 = () => {
  return (
    <div className={style}>
      <h1>Представление логических функций в базисе Пирса.</h1>
      <p>Пример</p>
      <p>Представить в базисе Пирса функцию:</p>
      <img src={img.img1} alt="formula" />
      <p>Логическая схема функции , представленной в базисе «ИЛИ-НЕ», изображена на рис. 3.</p>
      <img src={img.img2} alt="formula" />
      <span>Рис. 3. Представление функции из примера 5 в базисе «ИЛИ-НЕ»</span>
    </div>
  );
};
