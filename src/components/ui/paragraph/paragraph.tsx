import styles from './paragraph.module.css';

interface IProps {
  children: React.ReactNode;
}

export const Paragraph: React.FC<IProps> = ({ children }) => {
  return (
    <p className={styles.paragraph}>{children}</p>
  );
};