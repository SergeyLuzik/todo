import { TodoItem } from "../TodoItem"
import styles from "./styles.module.css"

export const TodoList = () => {
  return (
    <div className={styles.conteiner}>
      <p className={styles.title}>
        {` Список дел - `}
        <output>2</output>
      </p>
      <ol className={styles.list}>
        <TodoItem />
        <TodoItem />
      </ol>
    </div>
  )
}
