import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Select from '../../../../../components/Select/Select';
import React, { useEffect, useState } from 'react';
import { exEvent } from '../../../../../model/event';
import Table from '../../../../../components/Table/Table';

const event = 'event';

const optionsTest = Array.from(Array(8).keys()).map((el, i) => ({ label: `КР${i + 1}`, value: `${i + 1}` }));
const AddEvent = ({ data, trigger }: { data: exEvent | null; trigger: () => void }) => {
  const [Test, setTest] = useState<{ value: string; label: string } | null>(null);
  const [User, setUser] = useState<{ value: string; label: string } | null>(null);
  const [Group, setGroup] = useState<{ value: string; label: string } | null>(null);
  const [input, setInput] = useState({});

  const handlerSubmit = async (e) => {
    e.preventDefault();
    // if (InputGroup !== null) {
    //   await postUser({
    //     name: inputUser[event]?.name || '',
    //     login: inputUser[event]?.login || '',
    //     password: inputUser[event]?.password || '',
    //     role: false,
    //     group_id: Number(InputGroup.value) || 0,
    //   })
    //     .then(() => notification.setMessage('Событие успешно добавлено', 'success'))
    //     .catch(() => notification.setMessage('Не удалось добавить событие', 'error'));
    trigger();
    // }
  };

  useEffect(() => {
    if (data === null) {
      setInput({});
      setTest(null);
      setUser(null);
      setGroup(null);
    } else {
      input[event] = { length: data?.length, date: data?.date, description: data?.description };
      setInput((prev) => ({ ...prev, input }));
    }
  }, [data]);

  return (
    <form className="w-[300px] md:w-[800px] md:w-full p-3 flex flex-col items-center" onSubmit={handlerSubmit}>
      <h2 className="w-full text-center text-xl font-semibold mb-5">
        {data === null ? 'Добавить событие' : 'Изменить событие'}
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full flex flex-col gap-4">
          <Input
            type="datetime-local"
            placeholder={'Дата'}
            value={input[event]?.date || ''}
            onChange={(e) => setInput({ ...input, [event]: { ...input[event], date: e.target.value } })}
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
            classes={{ input: 'min-h-[80px]' }}
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
            options={optionsTest}
          />
          <Select
            value={User}
            onChange={setUser}
            classes={{ root: 'w-full' }}
            placeholder={'Выбрать пользователя'}
            options={optionsTest}
          />
          <Table
            header={['Имя', 'Группа']}
            // items={TableItems}
            classes={{ td: 'max-w-[60px]' }}
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
