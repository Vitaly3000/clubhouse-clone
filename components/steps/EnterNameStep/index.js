import styles from './EnterNameStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import clsx from 'clsx';
export const EnterNameStep = () => {
  return (
    <div className={styles.block}>
      <StepInfo
        icon=""
        title="What's your full name?"
        description="People use real names on Clubhouse :) Thnx"
      />
      <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
        <div className={clsx('mb-30')}>
          <input className="filed" placeholder="Enter fullname" />
        </div>
        <Buttom>Next</Buttom>
      </WhiteBlock>
    </div>
  );
};
