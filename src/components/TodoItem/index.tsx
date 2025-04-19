import styles from "./styles.module.css"

export const TodoItem = () => {
  return (
    <li className={styles.item}>
      <label className={styles.task}>
        Do the dishes
        <input className={styles.checkbox} type="checkbox" />
      </label>
      <button className={styles.remove}></button>
    </li>
  )
}
