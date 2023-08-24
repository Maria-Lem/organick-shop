import { ItalicTextColor } from '../../../types/italic-text-color';
import { CursiveParagraph } from '../../ui/cursive-paragraph/cursive-paragraph';
import styles from './intro-section.module.css';

export const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContent}>
        <div className={`${styles.introItem} ${styles.introItemNatural}`}>
          <CursiveParagraph textColor={ItalicTextColor.White}>Natural!!</CursiveParagraph>
          <p className={`${styles.cardTitle} ${styles.cardTitleNatural}`}>Get Garden Fresh Fruits</p>
        </div>
        <div className={`${styles.introItem} ${styles.introItemOffer}`}>
          <CursiveParagraph textColor={ItalicTextColor.LightGreen}>Offer!!</CursiveParagraph>
          <p className={`${styles.cardTitle} ${styles.cardTitleOffer}`}>Get 10% off
  on Vegetables</p>
        </div>
      </div>
    </section>
  );
} ;