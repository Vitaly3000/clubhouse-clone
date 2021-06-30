import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import styles from './BackButton.module.scss';

type BackButtonProps = {
  title: string;
  href: string;
};
export const BackButton: React.FC<BackButtonProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <a>
        <div className={clsx('d-flex', ' cup', styles['back-btn'])}>
          <img
            className="mr-10"
            width="24"
            src="/static/back-arrow.svg"
            alt=""
          />
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  );
};
