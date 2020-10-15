import React, { useState } from "react"
import Navbar from "./components/Navbar"
import TodoForm from "./components/TodoForm"
import "./App.css"
import Todolist from "./components/Todolist"
import { Todo } from "./types"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: "Feed the Dog", id: 23, completed: true },
  ])

  const addHandler = (title: string) => {
    const todo: Todo = {
      title,
      id: Date.now(),
      completed: false,
    }
    setTodos((prev) => [...prev, todo])
  }

  const toggleHandler = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  return (
    <>
      <Navbar />
      <TodoForm addHandler={addHandler} />
      <Todolist
        todos={todos}
        toggleHandler={toggleHandler}
        removeHandler={removeHandler}
      />
    </>
  )
}
export default App
