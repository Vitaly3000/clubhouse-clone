import styles from './ChooseAvatarStep.module.scss';
import { Button } from '../../Button';
import { WhiteBlock } from '../../WhiteBlock';
import { Avatar } from '../../Avatar';
import { StepInfo } from '../../StepInfo';
import clsx from 'clsx';
import React from 'react';
import { MainContext } from '../../../pages';
import { Axios } from '../../../core/axios';

const uploadFile = async (file: File): Promise<{ url: string }> => {
  const formData = new FormData();
  formData.append('photo', file);
  const { data } = await Axios({
    method: 'POST',
    url: '/upload',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
export const ChooseAvatarStep: React.FC = () => {
  const { onNextStep, setFieldValue, userData } = React.useContext(MainContext);

  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = React.useState<string>(
    'https://html5css.ru/w3css/img_avatar3.png',
  );

  const handleChangeImage = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
      const data = await uploadFile(file);
      target.value = '';
      setAvatarUrl(data.url);
      setFieldValue('avatarUrl', data.url);
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
        title={`Okay, ${userData.fullname}!`}
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
