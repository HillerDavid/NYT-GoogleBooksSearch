import React from "react"
import './index.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">
        <h3>Google Books Search</h3>
      </div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="/">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/books">Saved Books</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav