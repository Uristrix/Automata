import Button from '../../../../components/Button/Button';
import Table from '../../../../components/Table/Table';
import Select from '../../../../components/Select/Select';
import Search from '../../../../components/Search/Search';
import React, { useEffect, useState } from 'react';
import Modal from '../../../../components/Modal/Modal';
import { Group as group } from '../../../../model/group';
import { exUser } from '../../../../model/user';
import Group from './components/Group';
import AddUser from './components/Users';
import { ReactComponent as Check } from '../../../../assets/checkbox.svg';
import { ReactComponent as Edit } from '../../../../assets/edit.svg';
import { ReactComponent as Close } from '../../../../assets/close.svg';
import notification from '../../../../store/notification';
import { getAllUsers, getFullUser } from '../../../../utils/user';
import { getAllGroup } from '../../../../utils/group';
import { Inputs } from '../../../../model/Inputs';

const options = [
  { value: 'name+', label: 'По имени(возр.)' },
  { value: 'name-', label: 'По имени(убыв.)' },
  { value: 'group+', label: 'По группе(возр.)' },
  { value: 'group-', label: 'По группе(убыв.)' },
];

const header = ['ФИО', 'Группа', 'КР1', 'КР2', 'КР3', 'КР4', 'КР5', 'КР6', 'КР7', 'КР8', ''];

const style = 'bg-transparent text-sm w-full focus:outline-0';

const Item = (exUser, groups, inputs, setInputs, edit) => {
  console.log(inputs[exUser.user.id]);

  const tests = Array.from(Array(8).keys()).map((el, i) => (
    <input
      className={style}
      value={inputs[exUser.user.id]?.[`test${i + 1}`] || ''}
      onChange={(e) =>
        setInputs({ ...inputs, [exUser.user.id]: { ...inputs[exUser.user.id], [`test${i + 1}`]: e.target.value } })
      }
      key={`test${i + 1}_${exUser.id}`}
    />
  ));

  return [
    <input
      className={style}
      value={inputs[exUser.user.id]?.name || ''}
      onChange={(e) => setInputs({ ...inputs, [exUser.user.id]: { ...inputs[exUser.user.id], user: e.target.value } })}
      key={`name${exUser.id}`}
    />,
    <select key={`select${exUser.id}`} className={style} />,
    ...tests,
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
  const [groups, setGroups] = useState<Array<group>>([]);
  const [users, setUsers] = useState<Array<exUser>>([]);

  const [inputs, setInputs] = useState<Inputs>({});
  const [edit, setEdit] = useState(false);
  const [trigger, setTrigger] = useState<boolean>(true);

  const getGroups = async () => {
    await getAllGroup()
      .then((res) => setGroups(res.payload.groups))
      .catch(() => notification.setMessage('Группы не обновлены', 'error'));
  };

  const getUsers = async () => {
    const allUsers = await getAllUsers();
    const d = await Promise.all(allUsers.payload.users.map((el) => getFullUser(el.id)));
    const result = d.map((el) => el.payload);
    setUsers(result);
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
        const data = {};
        el.test.map((t) => (data[`${t.test_name}`] = t.test_score ? t.test_score?.toString() : ''));
        setInputs((prev) => ({
          ...prev,
          [`${el.user.id}`]: {
            name: el.user.name,
            group: el.user.group_id.toString(),
            ...data,
          },
        }));
      }
    }
  }, [users]);

  const generateItems = () => {
    if (users && groups) {
      return users?.map((u) => {
        return Item(u, optionsGroup, inputs, setInputs, edit);
      });
    }
    return [[]];
  };

  const optionsGroup = groups.map((el) => ({ label: el.name, value: el.id }));

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
        <AddUser groups={groups || []} trigger={() => setTrigger(!trigger)} />
      </Modal>
    </>
  );
};

export default Journal;
