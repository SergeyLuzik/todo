import styles from "./styles.module.css"

export const AddTodo = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder="Новая задача" />
      <button type="submit" className={styles.add}></button>
    </form>
  )
}
