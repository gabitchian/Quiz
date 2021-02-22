/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
// import useSWR from 'swr';

import dbJson from '../../db.json';
import QuizPage from '../../src/screens/Quiz';

export default ({ db }) => {
  const router = useRouter();
  const { name } = router.query;
  return <QuizPage db={db} name={name} />;
};

export async function getServerSideProps(context) {
  const http = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const dev = `${http}://${process.env.VERCEL_URL}`;
  const res = await fetch(`${dev}/api/quizes/perguntas`);
  const db = await res.json();

  console.log('index ', db);

  if (!db) {
    return {
      props: {
        db: dbJson,
      },
    };
  }

  return {
    props: {
      db,
    },
  };
}
