import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Table from '../../../../../components/Table/Table';
import { useEffect, useState } from 'react';
import { getUsers } from '../../../../../utils/user';
import { User } from '../../../../../model/user';
import { ReactComponent as Close } from '../../../../../assets/close.svg';
import { ReactComponent as Edit } from '../../../../../assets/edit.svg';
import { ReactComponent as Check } from '../../../../../assets/checkbox.svg';
import { getAllGroup } from '../../../../../utils/group';
import Select from 'react-select';
import { values } from 'mobx';
import Profile from "../../Profile/Profile";

const line = (g: User) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="w-full h-full flex items-center">
      <input className="w-[80%]" />
      <div className="flex items-center p-1 justify-between w-[20%]">
        {edit ? <Check /> : <Edit />}
        <Close />
      </div>
    </div>
  );
};
const UserAddEdit = () => {
  const [users, setUsers] = useState<Array<User>>();

  useEffect(() => {
    (async () => {
      const data = await getAllGroup();
    })();
  }, []);

  return (
    <div className="h-[400px] w-[300px] md:w-full overflow-hidden p-3">
      <h2 className="w-full text-center text-xl font-semibold mb-5">Управление пользователями</h2>
      <div className="w-full flex flex-col md:grid items-center justify-between gap-1 mb-5">
        <Input placeholder={'ФИО'} />
        {/*<Select options={options} />*/}
      </div>
    </div>
  );
};

export default UserAddEdit;
