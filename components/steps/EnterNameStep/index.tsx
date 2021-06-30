import styles from './EnterNameStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import { StepInfo } from '../../StepInfo';
import clsx from 'clsx';
import React from 'react';
import { MainContext } from '../../../pages';
export const EnterNameStep = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const { onNextStep } = React.useContext(MainContext);
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const nextDisabled = !inputValue;
  const onClickNextStep = () => {
    if (inputValue) {
      onNextStep();
    }
  };
  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/hand-wave.png"
        title="What's your full name?"
        description="People use real names on Clubhouse :) Thnx"
      />
      <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
        <div className={clsx('mb-30')}>
          <input
            onChange={handleChangeInput}
            value={inputValue}
            className="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button className={styles.btn} disabled={nextDisabled} onClick={onClickNextStep}>
          Next{' '}
          <img className={styles['btn-img']} src="/static/arrow-left.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
