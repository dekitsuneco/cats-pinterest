import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${styles.container} ${styles.navbar}`}>
      <ul className={styles['navbar-list']}>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles['link--active']}`
                : `${styles.link}`
            }
          >
            Все котики
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/liked'
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles['link--active']}`
                : `${styles.link}`
            }
          >
            Любимые котики
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export { Navbar };
