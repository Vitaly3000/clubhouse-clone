import styles from './TwitterStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import { StepInfo } from '../../StepInfo';
import clsx from 'clsx';
import React from 'react';
import { MainContext } from '../../../pages';

export const TwitterStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/hand-wave.png"
        title="Do you want import from twitter"
      />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <b>AD</b>
        </div>
        <h2 className="mb-40"> Vitaly marg</h2>
        <div>
          <Button className={styles.btn} onClick={onNextStep}>
            <img className={styles['btn-img']} src="/static/twitter-icon.svg" />
            Import from Twitter{' '}
            <img className={styles['btn-img']} src="/static/arrow-left.svg" />
          </Button>
        </div>
        <div className="link mt-20 cup d-ib">Enter my info manually</div>
      </WhiteBlock>
    </div>
  );
};
