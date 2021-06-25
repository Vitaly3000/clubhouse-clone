import styles from './StepInfo.module.scss';

import clsx from 'clsx';

export const StepInfo = ({ title, description, icon }) => {
  return (
    <div className={(styles.block, 'text-center')}>
      <div>
        <img className={styles.img} src={icon} alt="Step picture" />
      </div>
      <b className={style.title}>{title}</b>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
