import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import User from '../../../store/user';

const Profile = () => {
  return (
    <form className="flex flex-col gap-4 w-full m-3 md:m-0 md:mx-auto max-w-[700px]">
      <Input label="Имя" placeholder="Имя" value={User?.user?.name || ''} disabled={true} />
      <Input label="Группа" placeholder="Группа" value={User?.user?.group || ''} disabled={true} />
      <Input label="Логин" placeholder="Логин" value={User?.user?.login || ''} disabled={true} />
      <Input label="Пароль" placeholder="Пароль" type="password" />
      <Input label="Подтвердить пароль" placeholder="Подтвердить пароль" type="password" />
      <Button style="ml-auto">Сохранить</Button>
    </form>
  );
};

export default Profile;
