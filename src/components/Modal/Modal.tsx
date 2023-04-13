import Input from '../Input/Input';
import Button from '../Button/Button';
import { Dispatch, PropsWithChildren } from 'react';
interface ModalProps {
  open: boolean;
  setOpen: Dispatch<boolean>;
}
const Modal = ({ open, setOpen }: PropsWithChildren<ModalProps>) => {
  return (
    open && (
      <div className="fixed top-0 left-0 flex items-center justify-center z-[999] w-screen h-screen overflow-auto bg-black/50">
        <div className="absolute top-0 sm:top-[10%] mx-auto bg-white flex flex-cil justify-between">
          <h2>Войти</h2>
          <Input />
          <Input />
          <Button />
        </div>
      </div>
    )
  );
};

export default Modal;
