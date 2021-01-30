/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizPage from '../../src/screens/Quiz';

export default function QuizDaGalera({ dbExterno, name }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizPage db={dbExterno} name={name} />
    </ThemeProvider>
  );
}

/* const getServerSideProps = async (context) => {
    return {
        props: {}
    }
}; */

export async function getServerSideProps(context) {
  const { name } = context.query;
  const [projectName, githubUser] = context.query.id
    .split('___');
  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Falhar ao pegar os dados');
      })
      .then((resJson) => resJson);

    return {
      props: {
        dbExterno,
        name,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
