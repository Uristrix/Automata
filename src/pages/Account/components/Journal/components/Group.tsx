import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Table from '../../../../../components/Table/Table';
import { useEffect, useState } from 'react';
import { addGroup, deleteGroup, updateGroup } from '../../../../../utils/group';
import notification from '../../../../../store/notification';
import { Group } from '../../../../../model/group';
import { ReactComponent as Close } from '../../../../../assets/close.svg';
import { ReactComponent as Edit } from '../../../../../assets/edit.svg';
import { ReactComponent as Check } from '../../../../../assets/checkbox.svg';

const Line = ({ group, trigger }: { group: Group; trigger: () => void }) => {
  const [inputLine, setInputLine] = useState(group.name);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    (async () => {
      if (group && inputLine !== group.name) {
        group.name = inputLine;
        await updateGroup(group)
          .then(() => notification.setMessage('Группа успешно обновлена', 'success'))
          .catch(() => notification.setMessage('Не удалось обновить группу', 'error'));
        trigger();
      }
    })();
  }, [edit]);

  const deleteGroupHandler = async () => {
    if (group.id)
      await deleteGroup(group.id)
        .then(() => notification.setMessage('Группа успешно удалена', 'success'))
        .catch(() => notification.setMessage('Не удалось удалить группу', 'error'));
    trigger();
  };

  return (
    <div className="w-full h-full flex items-center">
      <input
        className="w-[80%] bg-transparent focus:outline-0"
        value={inputLine || ''}
        disabled={!edit}
        onChange={(e) => setInputLine(e.target.value)}
      />
      <div className="flex items-center p-1 justify-end gap-2 w-[20%]">
        {edit ? <Check onClick={() => setEdit(!edit)} /> : <Edit onClick={() => setEdit(!edit)} />}
        <Close onClick={() => deleteGroupHandler()} />
      </div>
    </div>
  );
};

const GroupAddEdit = ({ groups, trigger }: { groups: Array<Group>; trigger: () => void }) => {
  const [InputGroup, setInputGroup] = useState('');

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (InputGroup != '') {
      await addGroup({ name: InputGroup })
        .then(() => notification.setMessage('Группа успешно добавлена', 'success'))
        .catch(() => notification.setMessage('Не удалось добавить группу', 'error'));
      trigger();
    }
  };

  const genList = groups?.map((el) => [<Line key={`group${el?.id}`} group={el} trigger={trigger} />]);

  return (
    <form className="h-[400px] w-[300px] md:w-full overflow-hidden p-3" onSubmit={handlerSubmit}>
      <h2 className="w-full text-center text-xl font-semibold mb-5">Управление группами</h2>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 mb-5">
        <Input placeholder="Название группы" value={InputGroup} onChange={(e) => setInputGroup(e.target.value)} />
        <Button style="w-full md:w-[300px]" type="submit">
          Добавить
        </Button>
      </div>
      <Table header={['Название']} classes={{ root: '!h-[265px]' }} items={genList} />
    </form>
  );
};

export default GroupAddEdit;
