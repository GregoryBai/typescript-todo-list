import React from "react"
import { NavLink } from "react-router-dom"

const AboutPage: React.FC = () => {
  return (
    <>
      <h2 className="tac">About Page</h2>
      <p className="tac flow-text">
        Well, I hope you can find a way to put this Todo app to good use!
      </p>
      <NavLink to="/todos">
        {" "}
        <p className="tac">Todos</p>
      </NavLink>
    </>
  )
}
export default AboutPage
