import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { BackButton } from '../../components/BackButton';
import Axios from '../../core/axios';
import { Header } from '../../components/Header';
import { Room } from '../../components/Room';

export default function RoomPage({ room }) {
  return (
    <>
      <Header />
      <div className={clsx('container mt-10')}>
        <BackButton title="All rooms" href="/rooms" />
        <Room title={room.title} />
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const roomId = ctx.query.id;
    const { data } = await Axios.get('/rooms.json');
    const room = data.find((obj) => obj.id === roomId);

    return {
      props: {
        room,
      },
    };
  } catch (error) {
    return {
      props: {
        rooms: [],
      },
    };
  }
};
