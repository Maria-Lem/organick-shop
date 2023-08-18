import { ReactNode } from 'react';
import styles from './cursive-paragraph.module.css';

interface IProps {
  extraClass?: String;
  children: ReactNode;
}

export const CursiveParagraph: React.FC<IProps> = ({ extraClass = '', children }) => {
  return (
    <p className={`${styles.cursiveParagraph} ${styles.extraClass}`}>{children}</p>
  );
};