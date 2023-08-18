import styles from './main-title.module.css';

interface IProps {
  title: string;
  extraClass?: string;
}

export const MainTitle: React.FC<IProps> = ({ title, extraClass = '' }) => {
  return (
    <h1 className={`${styles.title} ${extraClass}`}>{title}</h1>
  );
};