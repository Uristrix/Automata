import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Select from '../../../../../components/Select/Select';
import React, { useEffect, useState } from 'react';
import notification from '../../../../../store/notification';
import { Group } from '../../../../../model/group';
import { Inputs } from '../../../../../model/Inputs';
import { postUser, putUser } from '../../../../../utils/user';
import { exUser } from '../../../../../model/user';
import { checkTest, postTest, updateTest } from '../../../../../utils/test';

const EditUser = ({ exUser, groups, trigger }: { exUser: exUser; groups: Array<Group>; trigger: () => void }) => {
  const [InputGroup, setInputGroup] = useState<{ value: string; label: string } | null>(null);
  const [inputs, setInputs] = useState({});
  const generateOption = groups.map((el) => ({ value: `${el.id}` || '', label: el.name || '' }));

  useEffect(() => {
    inputs['user'] = { name: exUser?.user?.name, login: exUser?.user?.login, password: exUser?.user?.password };
    Array.from(Array(8).keys()).map((el, i) => (inputs['test'] = { ...inputs['test'], [`test${i + 1}`]: '' }));
    exUser?.test?.map((el) => (inputs['test'] = { ...inputs['test'], [el?.test_name]: el?.test_score }));
    const elem = generateOption?.filter((el) => el.value === `${exUser?.user?.group_id}`);
    setInputs((prev) => ({ ...prev, inputs }));
    setInputGroup(elem[0]);
  }, [exUser]);

  useEffect(() => {
    console.log(inputs);
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    let err = 0;
    if (InputGroup !== null) {
      const userData = {
        id: exUser?.user?.id,
        name: inputs['user']?.name || '',
        login: inputs['user']?.login || '',
        password: inputs['user']?.password || '',
        group_id: Number(InputGroup.value) || 1,
        role: false,
      };
      await putUser(userData).catch(() => {
        notification.setMessage('Не удалось обновить пользователя', 'error');
        err++;
      });
    }
    for (let i = 0; i < 8; i++) {
      const fnd = exUser.test.filter((el) => el.test_name === `test${i + 1}`);
      if (fnd.length !== 0 && fnd[0].test_score !== inputs['test'][`test${i + 1}`]) {
        console.log(`put ${i + 1}`, { ...fnd[0], test_score: Number(inputs['test'][`test${i + 1}`]) });
        await updateTest({
          stud_id: exUser?.user?.id,
          test_name: `test${i + 1}`,
          test_score: Number(inputs['test'][`test${i + 1}`]),
        }).catch(() => {
          notification.setMessage('Не удалось обновить оценку', 'error');
          err++;
        });
      } else if (fnd.length === 0 && inputs['test'][`test${i + 1}`] !== '') {
        console.log(`post ${i + 1}`, exUser);
        await postTest({
          user_id: exUser?.user?.id,
          test_name: `test${i + 1}`,
          test_score: inputs['test'][`test${i + 1}`],
        }).catch(() => {
          notification.setMessage('Не удалось добавить оценку', 'error');
          err++;
        });
      }
    }
    if (err === 0) {
      notification.setMessage('Данные обновлены', 'success');
    }
    trigger();
  };
  return (
    <form className="p-3 flex flex-col items-center md:min-w-[390px]" onSubmit={handlerSubmit}>
      <h2 className="w-full text-center text-xl font-semibold mb-5">Изменить пользователя</h2>
      <div className="w-full flex flex-col items-center justify-between gap-4 mb-5">
        <Input
          label="ФИО"
          value={inputs['user']?.name || ''}
          onChange={(e) => setInputs({ ...inputs, ['user']: { ...inputs['user'], name: e.target.value } })}
        />
        <Select
          label="Группа"
          value={InputGroup}
          onChange={setInputGroup}
          options={generateOption}
          classes={{ root: 'w-full' }}
        />
        <Input
          label="Логин"
          value={inputs['user']?.login || ''}
          onChange={(e) => setInputs({ ...inputs, ['user']: { ...inputs['user'], login: e.target.value } })}
        />
        <Input
          label="Пароль"
          value={inputs['user']?.password || ''}
          onChange={(e) => setInputs({ ...inputs, ['user']: { ...inputs['user'], password: e.target.value } })}
        />
        <div className="grid grid-cols-4 gap-2">
          {Array.from(Array(8).keys()).map((el, i) => (
            <Input
              label={`КР №${i + 1}`}
              classes={{ root: '!w-[85px]' }}
              type="number"
              value={inputs?.['test']?.[`test${i + 1}`]}
              onChange={(e) =>
                setInputs({ ...inputs, ['test']: { ...inputs?.['test'], [`test${i + 1}`]: e.target.value } })
              }
              key={`test${i + 1}`}
            />
          ))}
        </div>
      </div>
      <Button style="w-full md:w-[300px] mt-5 !mx-auto" type="submit">
        Изменить
      </Button>
    </form>
  );
};

export default EditUser;
