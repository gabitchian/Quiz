import { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { QuizContext, QuizesProvider } from '../context/QuizContext';
import '../styles/globals.css';

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

function MyApp({ Component, pageProps }) {
  
  return (
    <QuizesProvider>
      <ThemeProvider theme={() => {
        const { db } = useContext(QuizContext);
        return db.theme;
      }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QuizesProvider>
  )
}

export default MyApp
