import React from 'react';

import styles from './app.module.css';
import { Header } from '../app-header/app-header';
import { MainPageHero } from '../main-page/hero/hero';
import { Offers } from '../main-page/offers/offers';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainPageHero />
      <Offers />
    </div>
  );
}

export default App;
