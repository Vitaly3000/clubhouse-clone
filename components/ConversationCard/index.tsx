import styles from './ConversationCard.module.scss';
import WhiteBlockStyles from '../WhiteBlock/WhiteBlock.module.scss';

import clsx from 'clsx';
import React from 'react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
interface ConversationCardProps {
  title: string;
  guests: string[];
  avatars: string[];
  guestsCount: number;
  speakersCount: number;
}
export const ConversationCard: React.FC<ConversationCardProps> = ({
  title,
  guests = [],
  avatars = [],
  guestsCount,
  speakersCount,
}) => {
  return (
    <>
      <div className={clsx(WhiteBlockStyles.block, styles.card, 'mc-30')}>
        <h4 className={styles.title}>{title}</h4>
        <div className={clsx('d-flex mt-10', styles.content)}>
          <div className={styles.avatars}>
            {avatars.map((url, index) => (
              <Avatar
                key={url}
                width="45px"
                height="45px"
                src={url}
                className={
                  avatars.length > 1 && index === avatars.length - 1
                    ? 'lastAvatar'
                    : ''
                }
              />
            ))}
          </div>
          <div className={clsx(styles.info, 'ml-10')}>
            <ul className={styles.guests}>
              {guests.map((name, index) => {
                return (
                  <li key={name + index}>
                    {name}{' '}
                    <img
                      width={14}
                      height={14}
                      src="/static/guest-dialog-icon.png"
                      alt="avatar"
                    />
                  </li>
                );
              })}
            </ul>
            <ul className={clsx(styles.details, 'd-flex')}>
              <li>
                {guestsCount}
                <img
                  width={12}
                  height={12}
                  src="/static/user-icon.png"
                  alt="User count"
                />
              </li>
              <li>
                {speakersCount}
                <img
                  width={12}
                  height={12}
                  src="/static/dialog-icon.png"
                  alt="User count"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
