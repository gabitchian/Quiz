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
export default function App({ Component, pageProps, tema }) {
  const [quiz, setQuiz] = useState(tema.theme);

  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={quiz}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} quizId={tema.id} />
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = async ({ Component, pageProps, ctx }) => {
  const appProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  const http = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const dev = `${http}://${process.env.VERCEL_URL}`;
  const res = await fetch(`${dev}/api/quizes`).then(async (response) => {
    const json = await response.json();
    return json;
  });
  return { ...appProps, tema: res };
};
