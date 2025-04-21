// import "./App.css"
// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"
import styles from "./App.module.css"
import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"

export const App = () => (
  <div className={styles.app}>
    <AddTodo />
    <TodoList />
  </div>
)
