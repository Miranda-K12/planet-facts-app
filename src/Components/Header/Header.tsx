import { Link } from "react-router-dom";
import data from "../../../starter-code/data.json";
import styles from "./Header.module.scss";
import { planetColors } from "../../constants/planetColors";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.header}>
      <h1 className={styles.header_title}>The Planets</h1>
      <nav>
        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
          {data.map((planet) => (
            <li key={planet.name}>
              <Link
                to={`${planet.name.toLowerCase()}`}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                <span
                  className={styles.planetCircle}
                  style={{
                    backgroundColor:
                      planetColors[
                        planet.name.toLowerCase() as keyof typeof planetColors
                      ],
                  }}
                ></span>

                {planet.name}
              </Link>
            </li>
          ))}
        </ul>
        <i
          className={`fa-solid fa-bars ${styles.burgerMenu}`}
          onClick={handleMenu}
        ></i>
      </nav>
    </div>
  );
}

export default Header;
