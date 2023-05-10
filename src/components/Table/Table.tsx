import { PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';

const UserTable = observer(({ header, items }: PropsWithChildren<{ header: any; items: any }>) => {
  return (
    <div className="w-full md:w-full overflow-x-scroll rounded-2xl shadow-lg box-border ">
      <table className="w-full">
        <thead className="bg-ocean text-white w-full">
          <tr className="[&>th]:text-left [&>th]:px-2">
            <th>ФИО</th>
            <th>Группа</th>
            <th>КР1</th>
            <th>КР2</th>
            <th>КР3</th>
            <th>КР4</th>
            <th>КР5</th>
            <th>КР6</th>
            <th>КР7</th>
            <th>КР8</th>
          </tr>
        </thead>
        <tbody>
          <tr className="[&>td]:px-2 max-h-[80px]">
            <td>Ярославцев Егор Викторович</td>
            <td>К3-83Б</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});
export default UserTable;
