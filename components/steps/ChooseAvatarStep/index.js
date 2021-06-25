import styles from './EnterNameStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import clsx from 'clsx';
import React from 'react';
export const EnterNameStep = () => {
  const [codes, setCodes] = React.useState([]);
  const nextDisabled = codes.some((v) => !v || codes.length < 4);
  const handleChangeInput = (e) => {
    const id = Number(e.target.getAttribute('id')) - 1;
    const value = e.target.value;
    setCodes((PREV) => {
      const newArr = [...prev];
      newArr[id] = value;
      return newArr;
    });
    if (e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
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
