import { createPortal } from 'react-dom';
import styles from './styles.module.css';

export const Popup = ({ todoName }: { todoName: string }) =>
  createPortal(
    <div className={styles.popup}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.title}>{`Вы действительно хотите удалить ${todoName}?`}</p>
          <button className={styles.close} type="button"></button>
        </div>
        <div className={styles.buttons}>
          <button className={styles.remove} type="button">
            Да
          </button>
          <button className={styles.cancel} type="button">
            Нет
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
