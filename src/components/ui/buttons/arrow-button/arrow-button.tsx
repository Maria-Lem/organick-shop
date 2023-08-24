import styles from './arrow-button.module.css';

import ArrowIcon from '../../../../images/icons/arrow-icon.svg';
import { GREEN_COLOR, YELLOW_COLOR } from '../../../../utils/constants/colors';

interface IProps {
  text: string;
  btnColor: string;
  extraClass?: string;
}
// Yellow btn
// Green btn
// White btn
export const ArrowButton: React.FC<IProps> = ({ text, btnColor, extraClass = '' }) => {
  const className = btnColor === YELLOW_COLOR ? `${styles.yellowBtn}` : btnColor === GREEN_COLOR ? `${styles.greenBtn}` : `${styles.whiteBtn}`;

  return (
    <button className={`${styles.button} ${className} ${extraClass}`}>
      <span className={styles.buttonName}>{text}</span>
      <img src={ArrowIcon} alt="arrow icon" className={styles.arrowIcon}  />
    </button>
  );
};