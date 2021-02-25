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

export async function getServerSideProps() {
  const http = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const dev = `${http}://${process.env.VERCEL_URL}`;
  const resPerguntas = await fetch(
    `${dev}/api/quizes/perguntas/?quizId=eqjxssw9Mxhmug3ohr4V`
  );
  const perguntas = await resPerguntas.json();

  const resQuiz = await fetch(`${dev}/api/quizes`);
  const quiz = await resQuiz.json();

  const db = { ...quiz, questions: perguntas };

  return {
    props: {
      db,
    },
  };
}
