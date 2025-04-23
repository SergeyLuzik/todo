import styles from './styles.module.css';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store/hooks';
import { todoAdded } from '../../store/todosSlice';

type FormInput = {
  taskField: string;
};

export const AddTodo = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset
  } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: { taskField: '' }
  });
  const onSubmit: SubmitHandler<FormInput> = ({ taskField }) => {
    dispatch(todoAdded({ text: taskField }));
    reset();
  };
  const validateTaskText = (value: string) => {
    const lattersOnly = value.replace(/[^a-zA-Zа-яА-Я]/g, '');
    return lattersOnly.length >= 2;
  };
  return (
    <form className={styles.form} onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
      <input
        className={styles.input}
        placeholder="Новая задача"
        {...register('taskField', { required: true, validate: validateTaskText })}
      />
      <button type="submit" className={styles.add} disabled={!isValid}></button>
    </form>
  );
};
