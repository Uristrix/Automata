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
import { ReactComponent as Edit } from '../../../../assets/edit.svg';
import { ReactComponent as Close } from '../../../../assets/close.svg';
import notification from '../../../../store/notification';
import { deleteUser, getAllUsers, getFullUser } from '../../../../utils/user';
import { getAllGroup } from '../../../../utils/group';
import { Inputs } from '../../../../model/Inputs';
// eslint-disable-next-line import/namespace,import/default
import EditUser from './components/EditUser';

const options = [
  { value: 'name+', label: 'По имени(возр.)' },
  { value: 'name-', label: 'По имени(убыв.)' },
  { value: 'group+', label: 'По группе(возр.)' },
  { value: 'group-', label: 'По группе(убыв.)' },
];

const header = ['ФИО', 'Группа', 'КР1', 'КР2', 'КР3', 'КР4', 'КР5', 'КР6', 'КР7', 'КР8', ''];

const style = 'bg-transparent text-sm w-full focus:outline-0';

const Item = (exUser, groups, inputs, setInputs, setEdit, openModal, deleteUser) => {
  const tests = Array.from(Array(8).keys()).map((el, i) => (
    <input
      className={style}
      value={inputs[exUser.user.id]?.[`test${i + 1}`] || ''}
      key={`test${i + 1}_${exUser.id}`}
      disabled={true}
    />
  ));

  return [
    <div key={`name${exUser.id}`}>{exUser?.user?.name}</div>,
    <div key={`select${exUser.id}`}>{exUser?.group?.name}</div>,
    ...tests,
    <div className="flex items-center p-1 justify-end gap-2 w-full" key={`edit${exUser.id}`}>
      <Edit
        className="cursor-pointer"
        onClick={() => {
          openModal(true);
          setEdit(exUser);
        }}
      />
      <Close className="cursor-pointer" onClick={() => deleteUser(exUser.user.id)} />
    </div>,
  ];
};

const Journal = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState<{ value: string; label: string } | null>(options[0]);
  const [openGroup, setOpenGroup] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [groups, setGroups] = useState<Array<group>>([]);
  const [users, setUsers] = useState<Array<exUser>>([]);
  const [filterUser, setFilterUser] = useState<Array<exUser>>([]);
  const [inputs, setInputs] = useState<Inputs>({});
  const [edit, setEdit] = useState<exUser>(users[0]);
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

  const DeleteUser = async (id) => {
    await deleteUser(id)
      .then(() => notification.setMessage('Пользователь удалён', 'success'))
      .catch(() => notification.setMessage('Пользователь не удалён', 'error'));
    setTrigger(!trigger);
  };

  useEffect(() => {
    (async () => {
      await getGroups();
      await getUsers();
    })();
  }, [trigger]);

  useEffect(() => {
    sorting();
  }, [users, selectedSort]);

  useEffect(() => {
    if (filterUser) {
      for (const el of filterUser) {
        const data = {};
        el.test.map((t) => (data[`${t.test_name}`] = t.test_score ? t.test_score?.toString() : '0'));
        setInputs((prev) => ({
          ...prev,
          [`${el.user.id}`]: {
            ...data,
          },
        }));
      }
    }
  }, [filterUser]);

  const sorting = () => {
    let data: Array<exUser> = [];
    switch (selectedSort?.value) {
      case 'name+':
        data = [...users].sort((a, b) => a.user.name.localeCompare(b.user.name));
        break;
      case 'name-':
        data = [...users].sort((a, b) => a.user.name.localeCompare(b.user.name)).reverse();
        break;
      case 'group+':
        data = [...users].sort((a, b) => a.group.name.localeCompare(b.group.name));
        break;
      case 'group-':
        data = [...users].sort((a, b) => a.group.name.localeCompare(b.group.name)).reverse();
        break;
      default:
        break;
    }
    setFilterUser(data.filter((el) => el.user.name.toLowerCase().includes(searchInput.toLowerCase())));
  };
  useEffect(() => {
    sorting();
  }, [selectedSort, searchInput]);

  const generateItems = () => {
    if (filterUser && groups) {
      return filterUser?.map((u) => {
        return Item(u, optionsGroup, inputs, setInputs, setEdit, setOpenEditUser, DeleteUser);
      });
    }
    return [[]];
  };

  const optionsGroup = groups.map((el) => ({ label: el.name, value: el.id }));

  return (
    <>
      <div className="flex flex-col gap-4 w-full items-start lg:max-w-[580px] xl:max-w-[780px] 2xl:max-w-[1300px] ">
        <div className="flex flex-col 2xl:flex-row w-full gap-4 items-center">
          <Search value={searchInput} onChange={setSearchInput} placeholder="Поиск" classes={{ root: 'w-full' }} />
          <Select
            value={selectedSort}
            onChange={setSelectedSort}
            options={options}
            placeholder="Сортировать по"
            classes={{ root: 'min-w-[300px] w-full' }}
          />
          <Button style="min-w-full 2xl:min-w-[200px]" onClick={() => setOpenAddUser(true)}>
            Добавить пользователей
          </Button>
          <Button style="min-w-full 2xl:min-w-[200px]" onClick={() => setOpenGroup(true)}>
            Управление группами
          </Button>
        </div>
        <Table
          header={header}
          items={generateItems()}
          classes={{ td: 'max-w-[60px] first:max-w-[120px] lg:last:max-w-[40px]' }}
        />
      </div>

      <Modal open={openGroup} setOpen={setOpenGroup}>
        <Group groups={groups || []} trigger={() => setTrigger(!trigger)} />
      </Modal>

      <Modal open={openAddUser} setOpen={setOpenAddUser}>
        <AddUser groups={groups || []} trigger={() => setTrigger(!trigger)} />
      </Modal>

      <Modal open={openEditUser} setOpen={setOpenEditUser}>
        <EditUser exUser={edit} groups={groups} trigger={() => setTrigger(!trigger)} />
      </Modal>
    </>
  );
};

export default Journal;
