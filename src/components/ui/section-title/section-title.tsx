import styles from './section-title.module.css';

interface IProps {
  children: React.ReactNode;
  extraClass?: string;
}

export const SectionTitle: React.FC<IProps> = ({ children, extraClass = '' }) => {
  return (
    <h2 className={`${styles.title} ${extraClass}`}>{children}</h2>
  );
};