import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Table from '../../../../../components/Table/Table';
import { useEffect, useState } from 'react';
import { getAllGroup } from '../../../../../utils/group';
import { Group } from '../../../../../model/group';
import { ReactComponent as Close } from '../../../../../assets/close.svg';
import { ReactComponent as Edit } from '../../../../../assets/edit.svg';
import { ReactComponent as Check } from '../../../../../assets/checkbox.svg';

const line = (g: Group) => {
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

const GroupAddEdit = () => {
  const [groups, setGroups] = useState<Array<Group>>();

  useEffect(() => {
    (async () => {
      const data = await getAllGroup();
      setGroups(data.payload);
    })();
  }, []);

  return (
    <div className="h-[400px] w-[300px] md:w-full overflow-hidden p-3">
      <h2 className="w-full text-center text-xl font-semibold mb-5">Управление группами</h2>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 mb-5">
        <Input placeholder={'Название группы'} />
        <Button style="w-full md:w-[300px]">Добавить</Button>
      </div>
      <Table header={['Название']} classes={{ root: '!h-[265px]' }} />
    </div>
  );
};

export default GroupAddEdit;
