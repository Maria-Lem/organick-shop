import React from 'react';
import { Link } from 'react-router-dom';

import styles from './logo.module.css';

import logoIcon from '../../images/icons/logo.svg';

export function Logo() {
  return (
    <Link to='/' className={styles.logo}>
      <img src={logoIcon} alt="logo" className={styles.logoIcon} />
      <span className={styles.logoName}>Organick</span>
    </Link>
  )
}