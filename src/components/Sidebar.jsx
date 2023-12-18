// React router
import { Outlet } from 'react-router-dom';

// CSS
import styles from './Sidebar.module.css';

// Components
import Logo from './Logo';
import AppNav from './AppNav';
import Footer from './Footer';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}
