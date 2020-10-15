import React, { useEffect, useState } from "react"
import TodoForm from "../components/TodoForm"
import Todolist from "../components/Todolist"
import { Todo } from "../types"

type Props = {}

const TodosPage: React.FC<Props> = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: "Feed the Dog", id: 23, completed: true },
  ])

  useEffect(() => {
    const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]")
    setTodos(savedTodos)
  }, [])

  const addHandler = (title: string) => {
    const todo: Todo = {
      title,
      id: Date.now(),
      completed: false,
    }
    setTodos((prev) => [...prev, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

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
      <TodoForm addHandler={addHandler} />
      {todos.length ? (
        <Todolist
          todos={todos}
          toggleHandler={toggleHandler}
          removeHandler={removeHandler}
        />
      ) : (
        <blockquote className="tac">Nothing to do!</blockquote>
      )}
    </>
  )
}

export default TodosPage
