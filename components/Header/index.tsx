import styles from './Header.module.scss';
import clsx from 'clsx';
import React from 'react';
import { Avatar } from '../Avatar';
import Link from 'next/link';
interface HeaderProps {}
export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.header}>
      <div
        className={clsx(
          'container',
          'd-flex',
          'justify-content-between',
          'align-items-center',
        )}>
        <div className={clsx(styles.container, 'd-flex', 'align-items-center')}>
          <img
            className={styles.handWaveImg}
            width={50}
            src="/static/hand-wave.png"
            alt="Logo"
          />
          <h3>Clubhouse</h3>
        </div>
        <Link href="/profile/1">
          <div className={clsx('d-flex', 'align-items-center', 'cup')}>
            <b className="mr-5">Vitaly marg</b>
            <Avatar
              src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
              width="50px "
              height="50px"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
