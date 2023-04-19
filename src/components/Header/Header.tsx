import logo from '../../assets/bmstu-logo.svg';
import user from '../../assets/user.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header className="fixed flex items-center justify-between w-full  h-[60px] md:h-[90px] bg-gradient-to-r from-blue to-green text-white px-2 md:px-6 text-sm md:text-base shadow-lg z-10">
        <div className="flex gap-8 items-center h-full ">
          <a className="flex items-center h-full max-w-[260px]" href="/">
            <img src={logo} alt="bmstu-logo" className="h-full p-2" />
            <div className="hidden md:block">
              Мытищинский филиал
              <br />
              МГТУ им. Н.Э.Баумана
            </div>
          </a>
          <a href="/training" className="align-middle">
            Тренажёр
          </a>
          <a href="/schedule">Расписание</a>
        </div>

        <button className="flex gap-4 items-center h-full cursor-pointer" onClick={() => setOpenModal(true)}>
          <img src={user} alt="user" className=" p-4 md:py-8 h-full" />
          <span className="hidden md:block">Войти</span>
        </button>
      </header>
      <Modal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Header;
