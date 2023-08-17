import React from 'react';

import styles from './app.module.css';
import { Header } from '../app-header/app-header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
