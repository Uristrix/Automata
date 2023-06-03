import { Dispatch, PropsWithChildren } from 'react';
import { useOnClickOutside } from '../../hooks';
import classNames from 'classnames';
interface ModalProps {
  open: boolean;
  setOpen: Dispatch<boolean>;
}
const Modal = ({ open, setOpen, children }: PropsWithChildren<ModalProps>) => {
  const ref = useOnClickOutside(() => setOpen(false));

  return (
    <div
      className={classNames(
        'fixed top-0 left-0 flex items-center justify-center z-[9998] w-screen overflow-auto',
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
        {children}
      </div>
    </div>
  );
};

export default Modal;
