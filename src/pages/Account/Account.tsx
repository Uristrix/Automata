import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import User from '../../store/user';
import user from '../../assets/user.svg';
import Profile from './components/Profile/Profile';
import Users from './components/Journal/Journal';
import Events from './components/Events/Events';
import { useCookies } from 'react-cookie';
import notification from '../../store/notification';

const navigation = [
  { name: 'Профиль', href: '/profile', type: '*', component: <Profile /> },
  { name: 'Журнал', href: '/users', type: 'admin', component: <Users /> },
  { name: 'События', href: '/events', type: 'admin', component: <Events /> },
];

const Account = observer(() => {
  const navigate = useNavigate();
  const [section, setSection] = useState(navigation[0]);
  const [cookies, removeCookie] = useCookies(['Auth']);

  useEffect(() => {
    if (User.user === undefined) navigate('/');
    setSection(navigation[0]);
  }, [User.user]);

  return (
    <>
      {User.user && (
        <section className="md:mx-auto w-full lg:max-w-[1400px] min-h-[850px] lg:min-h-[750px] bg-white rounded-2xl p-4 flex gap-10 mb-[150px]  lg:mb-0">
          <ul className="fixed bottom-0 left-0 bg-white lg:bg-transparent h-10 md:h-24 flex flex-row gap-2 lg:relative md:h-auto lg:flex-col w-full lg:w-[250px] justify-evenly lg:justify-start border-t-2 lg:border-none border-ocean">
            <div className="hidden lg:flex items-center gap-2 w-full mb-5">
              <div className="flex gap-4 items-center h-[40px] w-[40px] lg:h-[60px] md:w-[60px] cursor-pointer bg-white rounded-[50%] border-[3px] border-ocean">
                <img src={user} alt="user" className="h-full w-full p-2 md:p-3" />
              </div>
              <div className="w-[192px]">
                <h2 className="font-semibold">{User.user.name}</h2>
                <h3>{User.group?.name}</h3>
              </div>
            </div>
            {navigation
              .filter((el) => (User.user?.role === true ? true : el.type === '*'))
              .map((el, i) => (
                <button
                  key={`link${i}`}
                  className={classNames(
                    'text-left text-xs md:text-lg max-w-[140px]',
                    section.name === el.name
                      ? 'font-semibold text-green before:content-["|"] before:pr-2 before:text-ocean'
                      : '',
                  )}
                  onClick={() => setSection(el)}
                >
                  {el.name}
                </button>
              ))}
            <button
              className="text-left text-xs md:text-lg font-semibold"
              onClick={() => {
                User.user = undefined;
                removeCookie('Auth', { path: '/' });
                notification.setMessage('Выполнен выход', 'success');
              }}
            >
              Выйти
            </button>
          </ul>
          {section.component}
        </section>
      )}
    </>
  );
});

export default Account;
