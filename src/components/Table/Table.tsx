import { PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

interface Table {
  header?: Array<string | JSX.Element>;
  items?: Array<Array<string | JSX.Element>>;
  classes?: { root?: string; table?: string; tbody?: string; thead?: string; tr?: string; th?: string; td?: string };
}
const Table = observer(({ header, items, classes }: PropsWithChildren<Table>) => {
  return (
    <div
      className={classNames(
        'w-full md:w-full overflow-x-scroll md:overflow-x-auto shadow-lg box-border rounded-2xl h-full',
        classes?.root,
      )}
    >
      <table className={classNames('w-full', classes?.table)}>
        <thead className={classNames('bg-ocean text-white w-full', classes?.thead)}>
          <tr className={classNames('[&>th]:text-left [&>th]:px-2', classes?.tr)}>
            {header?.map((el, i) => (
              <th key={`th${i}`} className={classNames(classes?.th)}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items?.map((el, i) => {
            return (
              <tr
                key={`hd${i}`}
                className={classNames('[&>td]:px-2 max-h-[80px]', classes?.tr, i % 2 === 0 ? '' : 'bg-grey')}
              >
                {el?.map((el2, j) => (
                  <td key={`td${i}${j}`} className={classNames('min-h-[40px]', classes?.td)}>
                    {el2}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});
export default Table;
