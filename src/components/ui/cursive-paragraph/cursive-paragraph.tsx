import { ReactNode } from 'react';
import styles from './cursive-paragraph.module.css';
import { ItalicTextColor } from '../../../types/italic-text-color';

interface IProps {
  extraClass?: String;
  children: ReactNode;
  textColor: ItalicTextColor;
}

export const CursiveParagraph: React.FC<IProps> = ({ extraClass = '', children, textColor }) => {
  const color = textColor === ItalicTextColor.LightGreen ? `${styles.greenColorText}` : `${styles.whiteColorText}`;

  return (
    <p className={`${styles.cursiveParagraph} ${styles.extraClass} ${color}`}>{children}</p>
  );
};