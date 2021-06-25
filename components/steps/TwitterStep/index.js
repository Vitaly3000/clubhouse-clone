import styles from './TwitterStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import clsx from 'clsx';
export const TwitterStep = () => {
  return (
    <div className={styles.block}>
      <StepInfo icon="" title="Do you want import from twitter" />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <b>AD</b>
        </div>
        <h2 className="mb-40"> Vitaly marg</h2>
        <Button></Button>
        <div className="link mt-20 cup d-ib">Enter my info manually</div>
      </WhiteBlock>
    </div>
  );
};
