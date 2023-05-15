import Input from '../../../../../components/Input/Input';
import Button from '../../../../../components/Button/Button';
import Select from '../../../../../components/Select/Select';
import { useState } from 'react';
import notification from '../../../../../store/notification';
import { Group } from '../../../../../model/group';
import { Inputs } from '../../../../../model/Inputs';
import { postUser } from '../../../../../utils/user';

const users = 'user';

const AddUser = ({ groups }: { groups: Array<Group> }) => {
  const [InputGroup, setInputGroup] = useState<{ value: string; label: string } | null>(null);
  const [inputUser, setInputUser] = useState<Inputs>({});
  const generateOption = groups.map((el) => ({ value: `${el.id}` || '', label: el.name || '' }));

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (InputGroup !== null) {
      await postUser({
        name: inputUser[users]?.name || '',
        login: inputUser[users]?.login || '',
        password: inputUser[users]?.password || '',
        role: false,
        group_id: Number(InputGroup.value) || 0,
      })
        .then(() => notification.setMessage('пользователь успешно добавлен', 'success'))
        .catch(() => notification.setMessage('Не удалось добавить пользователя', 'error'));
    }
  };

  return (
    <form className="h-[400px] w-[300px] md:w-[500px] md:w-full p-3" onSubmit={handlerSubmit}>
      <h2 className="w-full text-center text-xl font-semibold mb-5">Управление пользователями</h2>
      <div className="w-full flex flex-col items-center justify-between gap-4 mb-5">
        <Input
          placeholder={'ФИО'}
          value={inputUser[users]?.name || ''}
          onChange={(e) => setInputUser({ ...inputUser, [users]: { ...inputUser[users], name: e.target.value } })}
        />
        <Input
          placeholder={'Логин'}
          value={inputUser[users]?.login || ''}
          onChange={(e) => setInputUser({ ...inputUser, [users]: { ...inputUser[users], login: e.target.value } })}
        />
        <Input
          placeholder={'Пароль'}
          value={inputUser[users]?.password || ''}
          onChange={(e) => setInputUser({ ...inputUser, [users]: { ...inputUser[users], password: e.target.value } })}
        />
        <Select value={InputGroup} onChange={setInputGroup} options={generateOption} classes={{ root: 'w-full' }} />
        <Button style="w-full md:w-[300px] mt-5" type="submit">
          Добавить
        </Button>
      </div>
    </form>
  );
};

export default AddUser;
