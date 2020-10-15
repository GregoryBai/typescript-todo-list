import React, { useRef } from "react"

type Props = {
  addHandler: (title: string) => void
}

const TodoForm: React.FC<Props> = ({ addHandler }) => {
  /*  // ?  useState approach

const [title, setTitle] = useState<string>("")

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)

  } */

  // ? useRef Approach

  const ref = useRef<HTMLInputElement>(null)

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addHandler(ref.current!.value)
    }
  }

  return (
    <div className="input-field m2">
      <input
        onKeyDown={keyDownHandler}
        /* value={title}
        onChange={changeHandler} */
        ref={ref}
        placeholder="First Name"
        type="text"
        className="validate"
      />

      <label htmlFor="first_name">First Name</label>
    </div>
  )
}

export default TodoForm
