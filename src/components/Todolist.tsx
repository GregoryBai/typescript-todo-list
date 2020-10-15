import React from "react"
import { Todo } from "../types"

type Props = {
  todos: Todo[]
  toggleHandler(id: number): void
  removeHandler: (id: number) => void
}
const Todolist: React.FC<Props> = ({ todos, toggleHandler, removeHandler }) => {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          className={`${todo.completed ? "todo completed" : "todo"}`}
        >
          <label>
            <input
              onChange={() => toggleHandler(todo.id)}
              type="checkbox"
              checked={todo.completed}
            />
            <span>{todo.title}</span>
            <i
              className="material-icons red-text"
              onClick={() => removeHandler(todo.id)}
            >
              delete
            </i>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default Todolist
