import { Link } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";

const Header = ({ theme, setTheme }) => {
  const [activeLink, setActiveLink] = useState("");
  
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={() => handleLinkClick("/")}>
          {theme === 'dark' ? <img src="../assets/images/logoDark.png" alt="logo"/> : <img src="../assets/images/logoLight.png" alt="logo"/>}
        </Link>
      </div>
      <nav className="navegacion">
        <Link to="/" className={activeLink === "/" ? "link-activo" : ""} onClick={() => handleLinkClick("/")}>Home</Link>
        <Link to="/sobremi" className={activeLink === "/sobremi" ? "link-activo" : ""} onClick={() => handleLinkClick("/sobremi")}>Sobre mí</Link>
        <Link to="/conocimientos" className={activeLink === "/conocimientos" ? "link-activo" : ""} onClick={() => handleLinkClick("/conocimientos")}>Conocimientos</Link>
        <Link to="/proyectos" className={activeLink === "/proyectos" ? "link-activo" : ""} onClick={() => handleLinkClick("/proyectos")}>Proyectos</Link>
        <Link to="/contacto" className={activeLink === "/contacto" ? "link-activo" : ""} onClick={() => handleLinkClick("/contacto")}>Contacto</Link>
        <div className="header__boton">
          {theme === 'dark' ? <ion-icon name="sunny-outline" onClick={toggleTheme}></ion-icon> : <ion-icon name="moon-outline" onClick={toggleTheme}></ion-icon>}
        </div>
      </nav>
    </header>
  )
}

export default Header;