import styles from './StepInfo.module.scss';

import clsx from 'clsx';
interface StepInfoProps {
  title: string;
  description?: string;
  icon: string;
}
export const StepInfo: React.FC<StepInfoProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={(styles.block, 'text-center')}>
      <div>
        <img className={styles.handWaveImg} src={icon} alt="Step picture" />
      </div>
      <b className={styles.title}>{title}</b>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
