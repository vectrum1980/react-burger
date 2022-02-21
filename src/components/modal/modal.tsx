import ReactDOM from 'react-dom'
import React, { useEffect } from 'react'
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useHistory } from "react-router-dom";
import ModalOverlay from '../modal-overlay/modal-overlay';


export type Props = {
  title?: string | undefined;
}

const modalRoot = document.getElementById('modal-window') as HTMLElement


const Modal: React.FunctionComponent<React.PropsWithChildren<Props>> = ({ title, children }) => {

  const history = useHistory();

  const close = (ev: KeyboardEvent) => {
    if (ev.code === 'Escape') handleClose();
  };

  const handleClose = () => {
    history.goBack();
  }

  useEffect(() => {
    window.addEventListener('keydown', close)
    return () => {
      window.removeEventListener('keydown', close)
    }
  })
  return ReactDOM.createPortal(
    <>
      <div className={cn(styles.container, 'p-10')}>
        <div className={styles.header}>
          {title && <h3 className={cn('text text_type_main-medium', styles.title)}>{title}</h3>}
          <div className={cn(styles["close-icon"])} onClick={handleClose}>
            <CloseIcon type={'primary'} />
          </div>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
      <ModalOverlay />
    </>,
    modalRoot,
  )
}

export default Modal;



