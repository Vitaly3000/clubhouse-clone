import styles from './EnterPhoneStep.module.scss';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import { WhiteBlock } from '../../WhiteBlock';
import NumberFormat from 'react-number-format';
import clsx from 'clsx';
import React from 'react';
import { MainContext } from '../../../pages';

type InputValueState = {
  formattedValue: string;
  value: string;
};
export const EnterPhoneStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);

  const [inputValue, setInputValue] = React.useState<InputValueState>(
    {} as InputValueState,
  );
 
  const nextDisabled =
    !inputValue.formattedValue || inputValue.formattedValue.includes('_');

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/hand-wave.png"
        title="Enter your phone #"
        description="We will sent you a confirmation code"
      />
      <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
        <div className={clsx('mb-30', styles.input)}>
          <img src="/static/russian-flag.png" alt="flag" width={24} />
          <NumberFormat
            className="field"
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-22-11"
            value={inputValue.value}
            onValueChange={({ formattedValue, value }) =>
              setInputValue({ formattedValue, value })
            }></NumberFormat>
        </div>
        <Button className={styles.btn} onClick={onNextStep} disabled={nextDisabled}>
          Next
          <img className={styles['btn-img']} src="/static/arrow-left.svg" />
        </Button>
        <p>
          By entering your number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </WhiteBlock>
    </div>
  );
};
