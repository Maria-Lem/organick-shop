import React from 'react';

import styles from './app.module.css';
import { Header } from '../app-header/app-header';
import { MainPageHero } from '../main-page/hero/hero';
import { IntroSection } from '../main-page/intro-section/intro-section';
import { AboutUs } from '../main-page/about-us/about-us';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainPageHero />
      <IntroSection />
      <AboutUs />
    </div>
  );
}

export default App;
