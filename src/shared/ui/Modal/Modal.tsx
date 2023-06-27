import { classNames } from 'shared/lib/classNames/classNames';
import style from './Modal.module.scss'
import { useCallback, useEffect } from 'react';
import Portal from '../Portal/Portal';

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;

  const mods: Record<string, boolean> = {
    [style.opened]: isOpen
  }

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const onEscapeDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onEscapeDown)
    }

    return () => {
      window.removeEventListener('keydown', onEscapeDown)
    }
  }, [isOpen, onEscapeDown])

  return <Portal>
    <div className={classNames(style.modal, mods, [className])}>
      <div className={style.overlay} onClick={onClose}>
        <div className={style.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  </Portal>
}

export default Modal;