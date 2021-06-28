import styles from './EnterCodeStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import clsx from 'clsx';
import React from 'react';
import { StepInfo } from '../../StepInfo';
import axios from '../../../core/axios';
import { useRouter } from 'next/dist/client/router';
export const EnterCodeStep = () => {
  const router = useRouter();
  const [codes, setCodes] = React.useState(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const nextDisabled = codes.some((v) => !v);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const value = event.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  };
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await axios.get('/todos');
      router.push('/rooms');
    } catch (error) {
      alert('Ошибка при активации!');
    }
    setIsLoading(false);
  };
  return (
    <div className={styles.block}>
      {!isLoading ? (
        <>
          <StepInfo
            icon="/static/hand-wave.png"
            title="What's your full name?"
          />
          <WhiteBlock className={clsx('m-auto', styles.whiteBlock, 'mt-30')}>
            <div className={clsx('mb-30', styles.codeInputs)}>
              {codes.map((code, index) => {
                return <input
                  key={index}
                  className="field"
                  type="tel"
                  placeholder="X"
                  maxLength={1}
                  id={String(index)}
                  onChange={handleChangeInput}
                  value={code}
                />;
              })}
              {/* <input
                className="field"
                type="tel"
                placeholder="X"
                maxLength={1}
                id="2"
                onChange={handleChangeInput}
                value={codes[1]}
              />
              <input
                className="field"
                type="tel"
                placeholder="X"
                maxLength={1}
                id="3"
                onChange={handleChangeInput}
                value={codes[2]}
              />
              <input
                className="field"
                type="tel"
                placeholder="X"
                maxLength={1}
                id="4"
                onChange={handleChangeInput}
                value={codes[3]}
              /> */}
            </div>
            <Button onClick={onSubmit} disabled={nextDisabled}>
              Next{' '}
              <img className={styles['btn-img']} src="/static/arrow-left.svg" />
            </Button>
          </WhiteBlock>
        </>
      ) : (
        <div className="text-center">
          <div className="loader"></div>
          <h3> Activation in progress ...</h3>
        </div>
      )}
    </div>
  );
};
