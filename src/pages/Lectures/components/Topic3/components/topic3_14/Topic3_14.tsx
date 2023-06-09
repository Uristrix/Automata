import { hellOver, style } from '../../../../index';

export const Topic3_14 = () => {
  return (
    <div className={style}>
      <h1>Задача анализа и синтеза логических функций.</h1>
      <p>
        Задача синтеза логических функций возникает перед разработчиками цифровых автоматов на стадии логического
        проектирования, один из этапов которого состоит в синтезе комбинационных устройств – устройств, не обладающих
        памятью, значения выходов которых определяются значениями его входов в данный момент времени и описываются
        функциями алгебры логики. Этот этап заключается в определении таких способов соединения логических элементов,
        при которых построенное устройство реализует поставленную задачу по преобразованию входной информации. Как
        правило, базис или перечень доступных элементов, из которых строится комбинационное устройство на этапе
        логического проектирования уже задан.
      </p>
      <p>
        Как мы видели из примера 4, одну и ту же функцию можно представить с помощью разных аналитических выражений и
        реализовать в разных базисах.
      </p>
      <p>Синтез комбинационных устройств, в свою очередь, можно разделить на ряд этапов:</p>
      <p>
        1. Составление таблицы истинности синтезируемого узла согласно его определению, назначению и словесному описанию
        принципа работы.
        <br /> 2. Составление аналитического выражения для логической функции, описывающей работу синтезируемого узла,
        согласно имеющейся таблице истинности. <br />
        3. Анализ полученной функции с целью построения различных вариантов её математического выражения (на основании
        законов булевой алгебры) и нахождения наилучшего из них в соответствии с тем или иным критерием.
      </p>
      <p>С двумя первыми этапами мы уже сталкивались при рассмотрении некоторых элементарных функций.</p>
      <p>
        Выполнение третьего этапа связано с оптимизацией функции, т.е. с необходимостью получения наилучшего её вида по
        выбранному критерию. В общем случае речь должна идти об оптимизации функции по таким показателям, как
        быстродействие, надёжность, объем оборудования, вес, габариты, энергопотребление и т.д. Решение этой задачи в
        общем виде – достаточно трудное дело, тем более что некоторые из показателей находятся в противоречии. Например,
        увеличение производительности, как правило, достигается за счёт параллельной организации работы данного
        устройства, но это ведёт к увеличению оборудования, что увеличивает стоимость и уменьшает надёжность. В связи с
        этим на практике решается задача оптимизации по одному из критериев. Чаще это делается по минимуму требуемого
        оборудования. Такая задача носит название <em>минимизации</em>.
      </p>
      <p>
        Задача минимизации логических функций состоит в нахождении из всех возможных форм логической функции её так
        называемой минимальной формы, обеспечивающей минимум затрат оборудования при построении синтезируемого узла, с
        использованием заданного набора логических элементов.
      </p>
      <p>
        Как мы видели ранее, для каждой логической функции возможно существование нескольких нормальных форм. В рамках
        этих форм минимальной будет такая разновидность функции, которая состоит из наименьшего количества членов при
        наименьшем по возможности, общем числе символов переменных.
      </p>
      <p>
        Дадим следующие определения. <br />
        <b>
          Сокращённой ДНФ (КНФ) называется ДНФ (КНФ), членами которой являются только изолированные (не склеивающиеся)
          элементарные конъюнкции или дизъюнкции.
        </b>{' '}
        <br />
        <b>Простыми импликантами (имплицентами) называются члены сокращённой ДНФ (КНФ). </b>
      </p>
      <p>
        Вообще, импликантой функции называется некоторая логическая функция, обращаемая в нуль при наборе переменных, на
        которых сама функция равна нулю. Можно утверждать, что любой минтерм, входящий в СДНФ, является импликантой
        функции. Действительно, минтерм равен единице только на одном наборе. Причем на этом же наборе значение функции
        равно единице. На остальных наборах значение минтерма равно нулю, следовательно, условие обращения в ноль на тех
        наборах, на которых функция равна нулю выполняется, и поэтому минтерм является импликантой функции.
      </p>
      <p>
        Рассуждая аналогичным образом, приходим к утверждению, что любой набор минтермов, связанных знаком дизъюнкции,
        является импликантой функции.
      </p>
      <p>
        Учитывая свойство симметрии булевой алгебры относительно логического сложения и умножения, можно дать
        определение и привести аналогичные рассуждения для имплиценты функции.
      </p>
      <p>
        <b>
          Лишней называется импликанта (имплицента), удаление которой из ДНФ (КНФ) не влияет на значение истинности
          функции.
        </b>
      </p>
      <p>
        Пример: Сокращённая ДНФ fсок.днф = <p className={hellOver}>x1</p>x3 v <p className={hellOver}>x2</p>x3 v{' '}
        <p className={hellOver}>x1</p>x2 содержит лишнюю импликанту <p className={hellOver}>x1</p>x3. Эта импликанта
        отлична от нуля только при входном наборе x1=0, x3=1. В этом случае fсок.днф= 1 v <p className={hellOver}>x2</p>{' '}
        1 v 1x2 = 1. Оставшаяся часть выражения <p className={hellOver}>x2</p>x3 v <p className={hellOver}>x1</p>x2
        также равна 1 в этом случае.
      </p>
      <p>
        При других входных наборах импликанта (x_1 ) ̅ x3 = 0, поэтому её значение не влияет на значение истинности
        функции, она является лишней и её можно удалить из выражения.{' '}
      </p>
      <p>
        <b>Тупиковой называется такая ДНФ (КНФ), которая не содержит ни одной лишней импликанты (имплиценты)</b>.
        Название тупиковая показывает, что дальнейшая минимизация в рамках нормальных форм невозможна.
      </p>
      <p>
        Существует несколько методов минимизации логических функций. Наиболее показательны следующие из них: расчётный
        метод (метод непосредственных преобразований), метод Квайна, метод Квайна – Мак – Класки, табличный метод Карно
        (Вейча).
      </p>
      <p>
        Во всех методах можно выделить три этапа. <br />
        1. Переход от совершенной ДНФ (КНФ) к сокращенной ДНФ (КНФ) путём склеивания сначала конституент, а затем всех
        производных членов меньшего ранга. <br />
        2. Переход от сокращённой ДНФ (КНФ) к тупиковой ДНФ (КНФ) путём исключения лишних импликант (имплицент). <br />
        3. Переход от тупиковой ДНФ (КНФ) к её минимальной форме. Этот этап не является регулярным. Его выполнение
        зависит от опыта, сноровки и интуиции разработчика цифровой аппаратуры.
        <br />
        Прежде чем изучать методы минимизации ФАЛ рассмотрим числовое и геометрическое представление функций алгебры
        логики.
      </p>
    </div>
  );
};
