import styles from "./styles.module.css"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"

type FormInput = {
  taskField: string
}

export const AddTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: { taskField: "" },
  })
  const onSubmit: SubmitHandler<FormInput> = data => {
    console.log(data.taskField)
  }
  const validateTaskText = (value: string) => {
    const lattersOnly = value.replace(/[^a-zA-Zа-яА-Я]/g, "")
    return lattersOnly.length >= 2
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        placeholder="Новая задача"
        {...register("taskField", { validate: validateTaskText })}
      />
      <button type="submit" className={styles.add} disabled={!isValid}></button>
    </form>
  )
}
