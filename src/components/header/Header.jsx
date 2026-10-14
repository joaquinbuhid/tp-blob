import { useState } from "react";
import "./Header.css";

function Header() {
  const [oscuro, setOscuro] = useState(false);

  const alternarTema = () => {
    setOscuro(!oscuro);
    document.body.classList.toggle("tema-oscuro");
  };

  return (
    <header className="header1">
      <a href="#"><span className="header1-title">TP BLOB</span></a>
      <nav className="header1-nav">
        <a href="#">Acerca de</a>
        <a href="#">Contacto</a>
      </nav>
      <div className="header1-actions">
        <button
          className="header1-tema"
          type="button"
          onClick={alternarTema}
        >
          {oscuro ? "Modo claro" : "Modo oscuro"}
        </button>
        <button
          className="header1-close"
          type="button"
          aria-label="Cerrar"
          onClick={() => alert("Saliendo")}
        >
          X
        </button>
      </div>
    </header>
  );
}
export default Header;
