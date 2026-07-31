import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'; 
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Marca / Logo */}
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="VR Impulso" className="logo-navbar" />
        </Link>

        {/* Botón Hamburguesa para Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces de Categorías */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/Remeras">
                Remeras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/Conjuntos">
                Conjuntos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/Joggings">
                Jogging
              </NavLink>
            </li>
          </ul>

          {/* Carrito */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;