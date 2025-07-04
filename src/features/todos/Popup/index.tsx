import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import { useRootNode } from '@/app/hooks';

type PopupProps = { todoName: string; togglePopup: () => void; onDeleteTodo: () => void };

export const Popup = ({ todoName, togglePopup, onDeleteTodo }: PopupProps) => {
  const popupRoot = useRootNode('modal-root');

  if (!popupRoot) return null;

  return createPortal(
    <div className={styles.popup}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p>{`Вы действительно хотите удалить "${todoName}"?`}</p>
          <button className={styles.close} type="button" onClick={togglePopup}></button>
        </div>
        <div className={styles.buttons}>
          <button className={styles.action} type="button" onClick={onDeleteTodo}>
            Да
          </button>
          <button className={styles.action} type="button" onClick={togglePopup}>
            Нет
          </button>
        </div>
      </div>
    </div>,
    popupRoot
  );
};
