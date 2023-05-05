import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import User from '../../store/user';
import user from '../../assets/user.svg';
import Profile from './components/Profile';
import Users from './components/Users';
import Events from './components/Events';

const navigation = [
  { name: 'Профиль', href: '/profile', type: 'user', component: <Profile /> },
  { name: 'Успеваемость', href: '/progress', type: 'user', component: <></> },
  { name: 'Пользователи', href: '/users', type: 'admin', component: <Users /> },
  { name: 'События', href: '/events', type: 'admin', component: <Events /> },
];

const Account = observer(() => {
  const navigate = useNavigate();
  const [section, setSection] = useState(navigation[0]);

  useEffect(() => {
    if (User.user === undefined) navigate('/');
    setSection(navigation[0]);
  }, [User.user]);

  return (
    <section>
      {User.user && (
        <section className="md:mx-auto lg:max-w-[1400px] min-h-[750px] bg-white rounded-2xl md:p-4 flex gap-10">
          <ul className="fixed bottom-0 bg-white md:bg-transparent h-10 flex flex-row gap-2 md:relative md:h-auto md:flex-col w-screen md:w-[250px] justify-evenly md:justify-start border-t-2 md:border-none border-ocean">
            <div className="hidden md:flex items-center gap-2 w-full mb-5">
              <div className="flex gap-4 items-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] cursor-pointer bg-white rounded-[50%] border-[3px] border-ocean">
                <img src={user} alt="user" className="h-full w-full p-2 md:p-3" />
              </div>
              <div className="w-[192px]">
                <h2 className="font-semibold">{User.user.name}</h2>
                <h3>{User.user.group}</h3>
              </div>
            </div>
            {User.user.role === true
              ? navigation.map((el, i) => (
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
                ))
              : navigation
                  .filter((el) => el.type === '')
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
            <button className="text-left text-xs md:text-lg font-semibold" onClick={() => (User.user = undefined)}>
              Выйти
            </button>
          </ul>
          {section.component}
        </section>
      )}
    </section>
  );
});

export default Account;
