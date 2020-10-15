import React from "react"
import { useHistory } from "react-router-dom"

type Props = {
  text?: string
}

const Navbar: React.FC<Props> = () => {
  const history = useHistory()
  return (
    <nav>
      <div className="nav-wrapper red accent-3">
        <a href="/" className="brand-logo mx2">
          localStorage
          <sup
            onClick={() => {
              history.push("")
            }}
          >
            JS
          </sup>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down mx2">
          <li>
            <a href="/">
              <sub>JS </sub>Typescript
            </a>
          </li>
          <li>
            <a href="/">React Router</a>
          </li>
          <li>
            <a href="/">Materialize</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
