import { Link } from "react-router-dom";
import data from "../../../starter-code/data.json";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header_title}>The Planets</h1>
      <nav>
        <ul>
          {data.map((planet) => (
            <li key={planet.name}>
              <Link
                to={`${planet.name.toLowerCase()}`}
                className={styles.navLink}
              >
                {planet.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
