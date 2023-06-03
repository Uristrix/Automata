import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Select from '../../../../../components/Select/Select';
import React, { useEffect, useState } from 'react';
import { exEvent } from '../../../../../model/event';
import Table from '../../../../../components/Table/Table';
import { getAllGroup } from '../../../../../utils/group';
import notification from '../../../../../store/notification';
import { getAllUsers, getFullUser } from '../../../../../utils/user';
import { exUser } from '../../../../../model/user';
import { ReactComponent as Close } from '../../../../../assets/close.svg';
import { addEvent, updateEvent } from '../../../../../utils/event';

const event = 'event';

const optionsTest = Array.from(Array(8).keys()).map((el, i) => ({ label: `КР${i + 1}`, value: `${i + 1}` }));

const Item = (user: exUser, deleteUser) => {
  return [
    <div key={`name${user?.user?.id}`}>{user.user.name}</div>,
    <div key={`group${user?.group?.id}`}>{user.group.name}</div>,
    <div key={`edit${user?.user?.id}`}>
      <Close className="cursor-pointer" onClick={() => deleteUser(user?.user?.id)} />
    </div>,
  ];
};

const AddEvent = ({ data, trigger, rerender }: { data: exEvent | null; trigger: () => void; rerender: number }) => {
  const [Test, setTest] = useState<{ value: string; label: string } | null>(null);
  const [User, setUser] = useState<{ value: string; label: string } | null>(null);
  const [Group, setGroup] = useState<{ value: string; label: string } | null>(null);
  const [exUser, setExUser] = useState<Array<exUser>>([]);
  const [selectedUser, setSelectedUser] = useState<Array<exUser>>([]);
  const [userList, setUserList] = useState<Array<{ value: string; label: string }>>([]);
  const [groupList, setGroupList] = useState<Array<{ value: string; label: string }>>([]);

  const [input, setInput] = useState({});

  const getGroups = async () => {
    await getAllGroup()
      .then((res) => setGroupList(res.payload?.groups?.map((el) => ({ label: el.name, value: el.id }))))
      .catch(() => notification.setMessage('Группы не получены', 'error'));
  };

  const getUsers = async () => {
    const allUsers = await getAllUsers();
    const d = await Promise.all(allUsers.payload.users.map((el) => getFullUser(el.id)));
    const result = d.map((el) => el.payload);
    setExUser(result);
  };

  const deleteUser = (id) => {
    setSelectedUser(selectedUser.filter((el) => el?.user?.id !== id));
  };

  useEffect(() => {
    if (data === null) {
      setInput({});
      setTest(null);
      setUser(null);
      setGroup(null);
      setSelectedUser([]);
    }
  }, [rerender]);

  useEffect(() => {
    (async () => {
      await getGroups();
      await getUsers();
    })();
  }, []);

  useEffect(() => {
    setUserList(exUser?.map((el) => ({ label: el?.user?.name, value: el?.user?.id ? el?.user?.id.toString() : '0' })));
  }, [exUser]);

  useEffect(() => {
    if (data !== null) {
      setInput((prev) => ({
        ...prev,
        [event]: {
          length: data?.length,
          date: new Date(data?.date).toLocaleString('af-ZA').replace(' ', 'T').slice(0, -3),
          description: data?.description,
        },
      }));
      setTest({ label: `КР${data?.test_num}`, value: `${data?.test_num}` });

      setSelectedUser(data.users.map((el) => exUser.filter((el2) => el2.user?.id === el?.user_id)[0]));
    }
  }, [data]);

  useEffect(() => {
    const data = exUser.filter((el) => el?.user?.id?.toString() === User?.value);
    setSelectedUser((prev) => Array.from(new Set([...prev, ...data])));
  }, [User]);

  useEffect(() => {
    const data = exUser.filter((el) => el?.user?.group_id?.toString() === Group?.value.toString());
    setSelectedUser((prev) => Array.from(new Set([...prev, ...data])));
  }, [Group]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (data === null) {
      const post = {
        date: new Date(input[event]?.date).toUTCString(),
        length: Number(input[event]?.length) || 60,
        description: input[event]?.description || '',
        test_num: Number(Test?.value) || 1,
        users: selectedUser?.map((el) => ({ user_id: el.user.id })),
      };
      const res = await addEvent(post)
        .then(() => notification.setMessage('Событие добавлено', 'success'))
        .catch(() => notification.setMessage('Событие не добавлено', 'error'));
    } else {
      const put = {
        id: data?.id,
        date: new Date(input[event]?.date).toUTCString(),
        length: Number(input[event]?.length) || 60,
        description: input[event]?.description || '',
        test_num: Number(Test?.value) || 1,
        users: selectedUser?.map((el) => ({ user_id: el.user.id })),
      };
      console.log(put);
      const res = await updateEvent(put)
        .then(() => notification.setMessage('Событие обновлено', 'success'))
        .catch(() => notification.setMessage('Событие не обновлено', 'error'));

      console.log(res);
    }
    trigger();
  };

  return (
    <form
      className="w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1100px] p-3 flex flex-col items-center"
      onSubmit={handlerSubmit}
    >
      <h2 className="w-full text-center text-xl font-semibold mb-5">
        {data === null ? 'Добавить событие' : 'Изменить событие'}
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full flex flex-col gap-4">
          <Input
            type="datetime-local"
            placeholder={'Дата'}
            value={input[event]?.date || new Date().toUTCString()}
            onChange={(e) => {
              setInput({ ...input, [event]: { ...input[event], date: e.target.value } });
            }}
          />
          <Input
            type="number"
            placeholder={'продолжительность (мин)'}
            value={input[event]?.length || ''}
            onChange={(e) => setInput({ ...input, [event]: { ...input[event], length: e.target.value } })}
          />
          <Select
            value={Test}
            onChange={setTest}
            classes={{ root: 'w-full' }}
            placeholder={'Контрольная'}
            options={optionsTest}
          />
          <Input
            variant="textarea"
            maxLength={255}
            classes={{ input: 'min-h-[150px]' }}
            value={input[event]?.description || ''}
            onChange={(e) => setInput({ ...input, [event]: { ...input[event], description: e.target.value } })}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <Select
            value={Group}
            onChange={setGroup}
            classes={{ root: 'w-full' }}
            placeholder={'Выбрать группу'}
            options={groupList}
          />
          <Select
            value={User}
            onChange={setUser}
            classes={{ root: 'w-full' }}
            placeholder={'Выбрать пользователя'}
            options={userList}
          />
          <Table
            header={['Имя', 'Группа', '']}
            items={selectedUser?.map((u) => {
              return Item(u, deleteUser);
            })}
            classes={{ td: 'max-w-[60px] last:max-w-[10px]', root: 'max-h-[210px]' }}
          />
        </div>
      </div>
      <Button style="w-full md:w-[300px] mt-5 mx-auto" type="submit">
        {data === null ? 'Добавить' : 'Изменить'}
      </Button>
    </form>
  );
};

export default AddEvent;
