/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
// import useSWR from 'swr';

// import db from '../../db.json';
import QuizPage from '../../src/screens/Quiz';

// export default (props) => (<QuizPage db={db} name={props.match.params.name} />);

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

export default ({ db }) => {
  const router = useRouter();
  const { name } = router.query;
  return <QuizPage db={db} name={name} />;
};

export async function getServerSideProps(context) {
  try {
    const dev =
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://aluraquiz.gabitchian.vercel.app/';
    const db = await fetch(`${dev}/api/quizes/perguntas`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Falhar ao pegar os dados');
      })
      .then((resJson) => resJson);

    console.log('index ', db);

    return {
      props: {
        db,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
