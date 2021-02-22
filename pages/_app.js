import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import LoadingWidget from '../src/components/Spinner/Spinner';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
    };
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

// const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  // const [quiz, setQuiz] = useState(tema.theme);

  /* useEffect(() => {
    fire
      .firestore()
      .collection('quiz')
      .onSnapshot((snap) => {
        const quizes = snap.docs.map((doc) => ({
          id: doc.id,
          // questions: perguntas,
          ...doc.data(),
        }));
        setQuiz(quizes[0]);
      });
  }, []); */

  // console.log(quiz);

  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

/*
App.getInitialProps = async (appContext) => {
  const { data } = await axios.get('http://localhost:3000/api/quizes');

  console.log(data);
  return {
    ...appContext,
    theme: data,
  };
}; */

/*App.getInitialProps = async ({ pageProps }) => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/quizes`).then(
    async (response) => {
      const json = await response.json();
      return json;
    }
  );
  return { ...pageProps, tema: res[0] };
};*/
