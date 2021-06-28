import styles from './Profile.module.scss';

import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
interface ProfileProps {
  fullname: string;
  username: string;
  avatarUrl: string;
  about: string;
}
export const Profile: React.FC<ProfileProps> = ({
  fullname,
  username,
  avatarUrl,
  about,
}) => {
  return (
    <>
      <Link href="/rooms">
        <div className={clsx('d-flex', ' cup', styles['back-btn'])}>
          <img
            className="mr-10"
            width="24"
            src="/static/back-arrow.svg"
            alt=""
          />
          <h3>Back</h3>
        </div>
      </Link>

      <div className="d-flex align-items-center  ">
        <div className="d-flex align-items-center ">
          <Avatar src={avatarUrl} width="100px" height="100px" />
          <div className="d-flex flex-column ml-30">
            <h2 className="mt-0 mb-0">{fullname}</h2>
            <h3 className={clsx(styles.username, 'mt-0 mb-0')}>@{username}</h3>
          </div>
        </div>
        <Button className={styles.followButton} color={'blue'}>
          Follow
        </Button>
      </div>
      <p className={styles.about}>{about}</p>
    </>
  );
};
