import styles from './ChooseAvatarStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import { Avatar } from '../../Avatar';
import { StepInfo } from '../../StepInfo';
import clsx from 'clsx';
import React from 'react';
import { MainContext } from '../../../pages';
export const ChooseAvatarStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);

  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = React.useState<string>(
    'https://html5css.ru/w3css/img_avatar3.png',
  );

  const handleChangeImage = (event: Event): void => {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };
  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener('change', handleChangeImage);
    }
  }, []);
  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/hand-wave.png"
        title="Okay, vitaly marg!"
        description="How's this photo?"
      />
      <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar width="120px" height="120px" src={avatarUrl} />
        </div>
        <div className="link mt-20 cup d-ib mb-30">
          <label className="link cup" htmlFor="image">
            Choose a different photo
          </label>
        </div>
        <input id="image" ref={inputFileRef} type="file" hidden></input>
        <Button className={styles.btn} onClick={onNextStep}>
          Next
          <img className={styles['btn-img']} src="/static/arrow-left.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
