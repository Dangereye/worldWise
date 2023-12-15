// React router
import { NavLink } from 'react-router-dom';

// CSS
import styles from './PageNav.module.css';

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className={styles.nav__list__item}>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li className={styles.nav__list__item}>
          <NavLink to='/product'>Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}
