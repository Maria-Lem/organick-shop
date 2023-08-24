import styles from './hero.module.css';

import { CursiveParagraph } from '../../ui/cursive-paragraph/cursive-paragraph';
import { MainTitle } from '../../ui/main-title/main-title';
import { ArrowButton } from '../../ui/buttons/arrow-button/arrow-button';
import { YELLOW_COLOR } from '../../../utils/constants/colors';
import { ItalicTextColor } from '../../../types/italic-text-color';

export const MainPageHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <CursiveParagraph textColor={ItalicTextColor.LightGreen}>100% Natural Food</CursiveParagraph>
        <MainTitle title='Choose the healthiest way of life' extraClass={styles.title} />
        <ArrowButton text='Explore Now' btnColor={YELLOW_COLOR} />
      </div>
    </section>
  );
};