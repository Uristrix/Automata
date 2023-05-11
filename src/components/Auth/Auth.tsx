import Input from '../Input/Input';
import Button from '../Button/Button';
import { Dispatch, PropsWithChildren, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useCookies } from 'react-cookie';
import User from '../../store/user';
import notification from '../../store/notification';
import { userAuth } from '../../utils/user';

const Auth = observer(({ setOpen }: PropsWithChildren<{ setOpen: Dispatch<boolean> }>) => {
  const [inputs, setInputs] = useState({ login: '', password: '' });
  const [cookies, setCookie] = useCookies(['Auth']);

  useEffect(() => {
    (async () => {
      if (typeof cookies?.Auth === 'string') {
        const field = cookies.Auth.split('|');
        const data = await userAuth(field[0], field[1]);

        if (!data.payload.error) {
          User.user = data.payload.user;
          notification.setMessage('Вход выполнен', 'success');
        }
      }
    })();
  }, []);

  const handleSubmit = async (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    const data = await userAuth(inputs.login, inputs.password);

    if (!data.payload.error) {
      User.user = data.payload.user;
      notification.setMessage('Вход выполнен', 'success');
      setCookie('Auth', `${inputs.login}|${inputs.password}`, { path: '/' });
      setOpen(false);
    } else {
      notification.setMessage('Неверный логин или пароль', 'error');
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
