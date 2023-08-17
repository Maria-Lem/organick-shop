import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import styles from './app-header.module.css';
import { Logo } from '../logo/logo';
import searchIcon from '../../images/icons/search-icon.svg'
import cartIcon from '../../images/icons/cart-icon.svg'

export function Header() {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.navBar}>
          <ul className={styles.nav}>
            <li className={styles.navItem}><Link to="/" className={styles.link}>Home</Link></li>
            <li className={styles.navItem}><Link to="/" className={styles.link}>About</Link></li>
            <li className={styles.navItem}><Link to="/" className={styles.link}>Pages</Link></li>
            <li className={styles.navItem}><Link to="/" className={styles.link}>Shop</Link></li>
            <li className={styles.navItem}><Link to="/" className={styles.link}>Projects</Link></li>
            <li className={styles.navItem}><Link to="/" className={styles.link}>News</Link></li>
          </ul>
        </nav>
        <form className={styles.form} id='form' onSubmit={handleSubmit}>
          <input className={styles.input} type='search' id='searchInput' name="search" />
          <button className={styles.searchBtn} type='submit'>
            <img className={styles.searchIcon} src={searchIcon} alt='search icon' />
          </button>
        </form>
        <button className={styles.cartBtn}>
          <img className={styles.cartIcon} src={cartIcon} alt='cart icon' />
          Cart (0)
        </button>
      </div>
    </header>
  )
}