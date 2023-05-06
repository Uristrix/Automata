import Input from '../Input/Input';
import Button from '../Button/Button';
import { Dispatch, PropsWithChildren, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useCookies } from 'react-cookie';
import User from '../../store/user';

const Auth = observer(({ setOpen }: PropsWithChildren<{ setOpen: Dispatch<boolean> }>) => {
  const [inputs, setInputs] = useState({ login: '', password: '' });
  const [cookies, setCookie] = useCookies(['Auth']);

  const handleSubmit = (e?: { preventDefault: () => void }) => {
    //TODO: заглушка, пока нет бд
    e?.preventDefault();
    if (inputs.login === process.env.REACT_APP_LOGIN && inputs.password === process.env.REACT_APP_LOGIN) {
      User.user = {
        login: inputs.login,
        password: inputs.password,
        name: 'Ефремов Николай Владимирович',
        group: 'Кафедра',
        role: true,
      };
      setCookie('Auth', `${inputs.login}|${inputs.password}`, { path: '/' });
      setOpen(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start gap-6 p-4 shadow-sm md:w-auto md:min-w-[500px] md:rounded-2xl h-1/2 md:h-auto"
    >
      <h2 className="font-semibold text-2xl">Авторизация</h2>
      <Input
        placeholder="Логин (номер студ. билета)"
        value={inputs?.login || ''}
        onChange={(e) => {
          setInputs({ ...inputs, login: e.target.value });
        }}
      />
      <Input
        placeholder="Пароль"
        value={inputs?.password || ''}
        type="password"
        onChange={(e) => {
          setInputs({ ...inputs, password: e.target.value });
        }}
      />
      <Button type="submit" style="m-auto">
        Войти
      </Button>
    </form>
  );
});

export default Auth;
