import { Axios } from '../core/axios';
import Link from 'next/link';
import React from 'react';
import { Button } from '../components/Button';
import { ConversationCard } from '../components/ConversationCard';
import { Header } from '../components/Header';

export default function RoomsPage({ rooms = [] }) {
  return (
    <>
      <Header />
      <div className="container mt-35  align-items-center justify-content-between d-flex">
        <h1>All conversation</h1>
        <Button color="green">+ Start room</Button>
      </div>
      <div className="d-flex justify-content-center flex-wrap  container">
        {rooms.map((obj) => (
          <Link key={obj.id} href={`/rooms/${obj.id}`}>
            <a className="mb-20 mr-20">
              <ConversationCard
                title={obj.title}
                avatars={obj.avatars}
                guests={obj.guests}
                guestsCount={obj.guestsCount}
                speakersCount={obj.speakersCount}
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await Axios.get('/rooms.json');
    return {
      props: {
        rooms: data,
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
