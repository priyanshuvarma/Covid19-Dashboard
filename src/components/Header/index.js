import Link from 'react-router-dom'

export default function Header() {
  return (
    <div className="nav-bar-large-container">
      <Link to="/">
        <h1>
          COVID19<span>INDIA</span>
        </h1>
      </Link>
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-menu-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}
