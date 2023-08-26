import styles from './about-us.module.css';

import { CursiveParagraph } from '../../ui/cursive-paragraph/cursive-paragraph';
import { Paragraph } from '../../ui/paragraph/paragraph';
import { SectionTitle } from '../../ui/section-title/section-title';
import aboutUsImage from '../../../images/main-page/about-us.png';
import { ItalicTextColor } from '../../../types/italic-text-color';
import { ArrowButton } from '../../ui/buttons/arrow-button/arrow-button';
import { GREEN_COLOR } from '../../../utils/constants/colors';

export const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUsContent}>
        <img className={styles.aboutUsImage} src={aboutUsImage} alt='A lot of citrus fruit cut in half' />
        <div className={styles.container}>
          <CursiveParagraph textColor={ItalicTextColor.LightGreen}>About Us</CursiveParagraph>
          <SectionTitle extraClass={styles.title}>We Believe in Working Accredited Farmers</SectionTitle>
          <Paragraph>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.</Paragraph>
          <div></div>
          <ArrowButton text={'Shop Now'} btnColor={GREEN_COLOR} />
        </div>
      </div>
    </section>
  );
};