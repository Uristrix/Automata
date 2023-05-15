import Button from '../../../../components/Button/Button';
import Table from '../../../../components/Table/Table';
import Select from '../../../../components/Select/Select';
import Search from '../../../../components/Search/Search';
import { useEffect, useState } from 'react';
import Modal from '../../../../components/Modal/Modal';
import { Group as group } from '../../../../model/group';
import { User as user } from '../../../../model/user';
import Group from './components/Group';
import AddUser from './components/Users';
import { ReactComponent as Check } from '../../../../assets/checkbox.svg';
import { ReactComponent as Edit } from '../../../../assets/edit.svg';
import { ReactComponent as Close } from '../../../../assets/close.svg';
import notification from '../../../../store/notification';
import { deleteUser, getAllUsers } from '../../../../utils/user';
import { getAllGroup } from '../../../../utils/group';
import { Inputs } from '../../../../model/Inputs';

const options = [
  { value: 'name+', label: 'По имени(возр.)' },
  { value: 'name-', label: 'По имени(убыв.)' },
  { value: 'group+', label: 'По группе(возр.)' },
  { value: 'group-', label: 'По группе(убыв.)' },
];

const header = ['ФИО', 'Группа', 'КР1', 'КР2', 'КР3', 'КР4', 'КР5', 'КР6', 'КР7', 'КР8', ''];
const items = [
  ['Ярославцев Егор Викторович', 'К3-83Б', '100', '80', '90', '76', '50', '0', '0', '0'],
  ['Наумов Сергей Алексеевич', 'К3-83Б', '100', '100', '100', '100', '50', '50', '50', '50'],
];

const style = 'bg-transparent text-sm w-full focus:outline-0';

const Item = (exUser, inputs, setInputs, edit) => {
  return [
    <input
      className={style}
      value={inputs[exUser.id]?.name || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.id]: { ...inputs[exUser.id], user: e.target.value } })}
      key={`name${exUser.id}`}
    />,
    <select key={`select${exUser.id}`} className={style} />,
    <input
      className={style}
      value={inputs[exUser.id]?.cr1 || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.id]: { ...inputs[exUser.id], cr1: e.target.value } })}
      key={`cr1${exUser.id}`}
    />,
    <input
      className={style}
      value={inputs[exUser.id]?.cr2 || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.id]: { ...inputs[exUser.id], cr2: e.target.value } })}
      key={`cr2${exUser.id}`}
    />,
    <input
      className={style}
      value={inputs[exUser.id]?.cr3 || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.id]: { ...inputs[exUser.id], cr3: e.target.value } })}
      key={`cr3${exUser.id}`}
    />,
    <input
      className={style}
      value={inputs[exUser.id]?.cr4 || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.id]: { ...inputs[exUser.id], cr4: e.target.value } })}
      key={`cr4${exUser.id}`}
    />,
    <input
      className={style}
      value={inputs[exUser.id]?.cr5 || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.id]: { ...inputs[exUser.id], cr5: e.target.value } })}
      key={`cr5${exUser.id}`}
    />,
    <input
      className={style}
      value={inputs[exUser.id]?.cr6 || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.id]: { ...inputs[exUser.id], cr6: e.target.value } })}
      key={`cr6${exUser.id}`}
    />,
    <input
      className={style}
      value={inputs[exUser.id]?.cr7 || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.id]: { ...inputs[exUser.id], cr7: e.target.value } })}
      key={`cr7${exUser.id}`}
    />,
    <input
      className={style}
      value={inputs[exUser.id]?.cr8 || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.id]: { ...inputs[exUser.id], cr8: e.target.value } })}
      key={`cr8${exUser.id}`}
    />,
    <div className="flex items-center p-1 justify-end gap-2 w-full" key={`edit${exUser.id}`}>
      {edit ? <Check /> : <Edit />}
      <Close />
    </div>,
  ];
};

const Journal = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState<{ value: string; label: string } | null>(null);
  const [openGroup, setOpenGroup] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [groups, setGroups] = useState<Array<group>>();
  const [users, setUsers] = useState<Array<user>>();

  const [inputs, setInputs] = useState<Inputs>({});
  const [edit, setEdit] = useState(false);
  const [trigger, setTrigger] = useState<boolean>(true);

  const getGroups = async () => {
    await getAllGroup()
      .then((res) => setGroups(res.payload.groups))
      .catch(() => notification.setMessage('Группы не обновлены', 'error'));
  };

  const getUsers = async () => {
    await getAllUsers()
      .then((res) => setUsers(res.payload.users))
      .catch(() => notification.setMessage('пользователи не обновлены', 'error'));
  };

  useEffect(() => {
    (async () => {
      await getGroups();
      await getUsers();
    })();
  }, [trigger]);

  useEffect(() => {
    if (users) {
      for (const el of users) {
        setInputs({ ...inputs, [`${el.id}`]: { ...inputs[`${el.id}`], name: el.name } });
      }
    }
    if (groups) {
      for (const el of groups) {
        setInputs({ ...inputs, [`${el.id}`]: { ...inputs[`${el.id}`], group: el.name } });
      }
    }
  }, [users, groups]);

  const generateItems = () => {
    if (users && groups) {
      return users?.map((u) => {
        const group = groups?.find((element) => element.id === u.group_id);
        return Item({ ...u, group_name: group?.name }, inputs, setInputs, edit);
      });
    }
    return [[]];
  };
  console.log(inputs);
  return (
    <>
      <div className="flex flex-col gap-4 w-full min-[1080px]:max-w-[1080px] items-start ">
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center">
          <Search value={searchInput} onChange={setSearchInput} placeholder="Поиск" classes={{ root: 'w-full' }} />
          <Select
            value={selectedSort}
            onChange={setSelectedSort}
            options={options}
            placeholder="Сортировать по"
            classes={{ root: 'min-w-[300px] w-full' }}
          />
          <Button style="min-w-full lg:min-w-[200px]" onClick={() => setOpenUser(true)}>
            Добавить пользователей
          </Button>
          <Button style="min-w-full lg:min-w-[200px]" onClick={() => setOpenGroup(true)}>
            Управление группами
          </Button>
        </div>
        <Table
          header={header}
          items={generateItems()}
          classes={{ td: 'max-w-[60px] first:max-w-[120px] last:max-w-[40px]' }}
        />
      </div>

      <Modal open={openGroup} setOpen={setOpenGroup}>
        <Group groups={groups || []} trigger={() => setTrigger(!trigger)} />
      </Modal>

      <Modal open={openUser} setOpen={setOpenUser}>
        <AddUser groups={groups || []} />
      </Modal>
    </>
  );
};

export default Journal;
