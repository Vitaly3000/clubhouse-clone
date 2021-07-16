import styles from './GitHubStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import { StepInfo } from '../../StepInfo';
import clsx from 'clsx';
import React from 'react';
import { MainContext, UserData } from '../../../pages';
import Cookies from 'js-cookie';
export const GitHubStep: React.FC = () => {
  const { onNextStep, setUserData } = React.useContext(MainContext);
  const onCLickAuth = () => {
    const win = window.open(
      'http://localhost:3001/auth/github',
      'Auth',
      'width=400,height=400 status=yes,toolbar=no,menubar=no,location=no',
    );
  };

  React.useEffect(() => {
    window.addEventListener('message', ({ data }) => {
      const user: string = data;
      if (typeof user === 'string' && user.includes('avatarUrl')) {
        const json: UserData = JSON.parse(data);
        setUserData(json);
        onNextStep();
        Cookies.set('token', json.token);
      }
    });
  }, []);
  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/hand-wave.png"
        title="Do you want import from github"
      />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <b>AD</b>
        </div>
        <h2 className="mb-40"> Vitaly marg</h2>
        <div>
          <Button className={styles.btn} onClick={onCLickAuth}>
            <img className={styles['btn-img']} src="/static/GitHub-icon.svg" />
            Import from Github
            <img className={styles['btn-img']} src="/static/arrow-left.svg" />
          </Button>
        </div>
        <div className="link mt-20 cup d-ib">Enter my info manually</div>
      </WhiteBlock>
    </div>
  );
};
