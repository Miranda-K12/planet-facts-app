
import { Link, useNavigate } from 'react-router-dom'; 
import data from '../../../starter-code/data.json';  
import styles from './Header.module.scss';  

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.header}>
      <button onClick={handleClick} className={styles.header_button}>
      <h1>The Planets</h1>
      </button>
       <nav>
        <ul>
          {data.map((planet) => (
            <li key={planet.name}>
              <Link to={`/planet/${planet.name.toLowerCase()}`} className={styles.navLink}>
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

