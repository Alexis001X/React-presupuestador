 import "../styles/navbar.css";
 import { IoReloadCircleOutline } from "react-icons/io5";
 function Navbar() {
  return (
    <div className="navbar mt-auto">
      <h1 className="title">Expense Tracker V.1.0 </h1>
      <div className="links">
        <a className="nav-icon" href="/login"><IoReloadCircleOutline /> Limpiar</a>
      </div>
    </div>
  )
}
export default Navbar;