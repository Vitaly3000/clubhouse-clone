import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import styles from './profile.module.scss';
export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <Header />
      <div className={'container'}>
        <Profile
          fullname="Vitaly Marg"
          username="marg"
          about="About meAbout meAbout meAbout meAbout me"
          avatarUrl="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
        />
      </div>
    </>
  );
}
