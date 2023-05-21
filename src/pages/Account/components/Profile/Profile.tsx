import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import User from '../../../../store/user';
import { useState } from 'react';
import { Inputs } from '../../../../model/Inputs';
import { putUser } from '../../../../utils/user';
import notification from '../../../../store/notification';

const Profile = () => {
  const [inputs, setInputs] = useState<Inputs>({});

  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (
      inputs['pass'].password1 !== null &&
      inputs['pass'].password1?.length >= 8 &&
      inputs['pass'].password1?.length <= 20 &&
      inputs['pass'].password1 === inputs['pass'].password2
    ) {
      const user = {
        id: User.user?.id,
        name: User.user?.name || '',
        group_id: User.user?.group_id || 0,
        login: User.user?.login || '',
        role: User.user?.role || false,
        password: inputs['pass'].password1,
      };
      await putUser(user)
        .then(() => notification.setMessage('Данные успешнр обновлены', 'success'))
        .catch(() => notification.setMessage('Не удалось обновить данные', 'error'));
    } else notification.setMessage('Не удалось обновить данные', 'error');
  };

  return (
    <form onSubmit={handlerSubmit} className="flex flex-col gap-4 w-full md:mx-auto max-w-[900px]">
      <Input label="Имя" placeholder="Имя" value={User?.user?.name || ''} disabled={true} />
      <Input label="Группа" placeholder="Группа" value={User?.group?.name || ''} disabled={true} />
      <Input label="Логин" placeholder="Логин" value={User?.user?.login || ''} disabled={true} />
      <Input
        label="Пароль"
        placeholder="Пароль"
        type="password"
        value={inputs['pass']?.password1 || ''}
        onChange={(e) => setInputs({ ...inputs, ['pass']: { ...inputs['pass'], password1: e.target.value } })}
      />
      <Input
        label="Подтвердить пароль"
        placeholder="Подтвердить пароль"
        type="password"
        value={inputs['pass']?.password2 || ''}
        onChange={(e) => setInputs({ ...inputs, ['pass']: { ...inputs['pass'], password2: e.target.value } })}
      />
      <Button type="submit" style="ml-auto">
        Сохранить
      </Button>
    </form>
  );
};

export default Profile;
