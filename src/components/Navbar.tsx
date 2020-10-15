import React from "react"

type Props = {
  text?: string
}

const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <div className="nav-wrapper red accent-3">
        <a href="/" className="brand-logo mx2">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down mx2">
          <li>
            <a href="/">Sass</a>
          </li>
          <li>
            <a href="/">Components</a>
          </li>
          <li>
            <a href="/">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
