import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h1 className="name">Sonam Jamtsho</h1>
      <div className="logo">
        <Link className="navbar-link" href="/">
          Home
        </Link>
        <Link className="navbar-link" href="#about-me">
          About me
        </Link>
        <Link className="navbar-link" href="#skills">
          Skills
        </Link>
        <Link className="navbar-link" href="#education">
          Education
        </Link>
        <Link className="navbar-link" href="#experience">
          Experience
        </Link>
        <Link className="navbar-link" href="#contact">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar;