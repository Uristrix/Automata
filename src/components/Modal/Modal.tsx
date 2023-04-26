import Input from '../Input/Input';
import Button from '../Button/Button';
import { Dispatch, PropsWithChildren } from 'react';
import { useOnClickOutside } from '../../hooks/ClickOutside';
import classNames from 'classnames';
interface ModalProps {
  open: boolean;
  setOpen: Dispatch<boolean>;
}
const Modal = ({ open, setOpen }: PropsWithChildren<ModalProps>) => {
  const ref = useOnClickOutside(() => setOpen(false));

  return (
    <div
      className={classNames(
        'fixed top-0 left-0 flex items-center justify-center z-[999] w-screen overflow-auto',
        !open ? 'h-0 bg-black/0 delay-150' : 'h-screen bg-black/50',
      )}
    >
      <div
        ref={ref}
        className={classNames(
          'object-contain duration-150 absolute top-[10%] left-1/2 -translate-x-1/2 bg-white rounded-xl',
          !open ? 'scale-0' : 'scale-1',
        )}
      >
        <div className="w-full h-full flex flex-col justify-start gap-4 p-4 w-full md:w-auto md:min-w-[500px] md:rounded-2xl h-1/2md:h-auto">
          <h2 className="font-semibold text-2xl">Авторизация</h2>
          <Input placeholder="Логин (номер студ. билета)" />
          <Input placeholder="Пароль" />
          <Button style="m-auto">Войти</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
