import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Select from '../../../../../components/Select/Select';
import React, { useEffect, useState } from 'react';
import notification from '../../../../../store/notification';
import { Group } from '../../../../../model/group';
import { Inputs } from '../../../../../model/Inputs';
import { postUser, putUser } from '../../../../../utils/user';
import { exUser } from '../../../../../model/user';

const EditUser = ({ exUser, groups, trigger }: { exUser: exUser; groups: Array<Group>; trigger: () => void }) => {
  const [InputGroup, setInputGroup] = useState<{ value: string; label: string } | null>(null);
  const [inputs, setInputs] = useState({});
  const generateOption = groups.map((el) => ({ value: `${el.id}` || '', label: el.name || '' }));

  useEffect(() => {
    inputs['user'] = { name: exUser?.user?.name, login: exUser?.user?.login, password: exUser?.user?.password };
    inputs['group'] = { name: exUser?.group?.name };
    Array.from(Array(8).keys()).map((el, i) => (inputs['test'] = { ...inputs['test'], [`test${i + 1}`]: '' }));
    exUser?.test?.map((el) => (inputs['test'] = { ...inputs['test'], [el?.test_name]: el?.test_score }));
    const elem = generateOption?.filter((el) => el.value === `${exUser?.user?.group_id}`);
    setInputs((prev) => ({ ...prev, inputs }));
    setInputGroup(elem[0]);
  }, [exUser]);

  useEffect(() => {
    console.log(inputs);
  }, []);

  // const handlerSubmit = async (e) => {
  //   e.preventDefault();
  //   if (InputGroup !== null) {
  //     await putUser({
  //       name: inputUser?.name || '',
  //       login: inputUser?.login || '',
  //       password: inputUser?.password || '',
  //       role: false,
  //       group_id: Number(InputGroup.value) || 0,
  //     })
  //       .then(() => notification.setMessage('пользователь успешно добавлен', 'success'))
  //       .catch(() => notification.setMessage('Не удалось добавить пользователя', 'error'));
  //     trigger();
  //   }
  // };
  return (
    <form className="p-3 flex flex-col items-center">
      <h2 className="w-full text-center text-xl font-semibold mb-5">Изменить пользователя</h2>
      <div className="w-full flex flex items-center justify-between gap-4 mb-5">
        <div className="flex flex-col gap-4">
          <Input
            value={inputs['user']?.name || ''}
            onChange={(e) => setInputs({ ...inputs, ['user']: { ...inputs['user'], name: e.target.value } })}
          />
          <Select value={InputGroup} onChange={setInputGroup} options={generateOption} classes={{ root: 'w-full' }} />
          <Input
            value={inputs['user']?.login || ''}
            onChange={(e) => setInputs({ ...inputs, ['user']: { ...inputs['user'], login: e.target.value } })}
          />
          <Input
            value={inputs['user']?.password || ''}
            onChange={(e) => setInputs({ ...inputs, ['user']: { ...inputs['user'], password: e.target.value } })}
          />
        </div>
        <div className="flex flex-col gap-4">
          {Array.from(Array(4).keys()).map((el, i) => (
            <Input
              type="number"
              value={inputs?.['test']?.[`test${i + 1}`]}
              onChange={(e) =>
                setInputs({ ...inputs, ['test']: { ...inputs?.['test'], [`test${i + 1}`]: e.target.value } })
              }
              key={`test${i + 1}`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {Array.from(Array(4).keys()).map((el, i) => (
            <Input
              type="number"
              value={inputs?.['test']?.[`test${i + 5}`]}
              onChange={(e) =>
                setInputs({ ...inputs, ['test']: { ...inputs?.['test'], [`test${i + 5}`]: e.target.value } })
              }
              key={`test${i + 5}`}
            />
          ))}
        </div>
      </div>
      <Button style="w-full md:w-[300px] mt-5 !mx-auto" type="submit">
        Добавить
      </Button>
    </form>
  );
};

export default EditUser;
