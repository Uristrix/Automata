import logo from '../../assets/bmstu-logo.svg';
import user from '../../assets/user.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import User from '../../store/user';

const Header = observer(() => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header className="fixed flex items-center justify-between w-full  h-[60px] md:h-[90px] bg-gradient-to-r from-blue to-green text-white px-2 md:px-6 text-sm md:text-base shadow-lg z-50">
        <div className="flex gap-8 items-center h-full ">
          <a className="flex items-center h-full max-w-[260px]" href="/">
            <img src={logo} alt="bmstu-logo" className="h-full p-2" />
            <div className="hidden md:block">
              МГТУ им. Н.Э.Баумана
              <br />
              Теория автоматов
            </div>
          </a>
          <a href="/training" className="align-middle">
            Тренажёр
          </a>
          <a href="/schedule">Расписание</a>
        </div>

        {User ? (
          <a href="/profile">
            <img src={user} alt="user" className=" p-4 md:py-8 h-full" />
          </a>
        ) : (
          <button className="flex gap-4 items-center h-full cursor-pointer" onClick={() => setOpenModal(true)}>
            <span className="hidden md:block">Войти</span>
          </button>
        )}
      </header>
      <Modal open={openModal} setOpen={setOpenModal} />
    </>
  );
});

export default Header;
