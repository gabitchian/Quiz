/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import styled from 'styled-components';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import User from '../src/components/User';
import Link from '../src/components/Link';

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
` */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <Head>
        <meta property="og:title" content="Quiz de Scala" />
        <meta property="og:description" content="Projeto criado durante o curso de Imersão React Next.js" />
        <meta property="og:type" content="quiz" />
        <meta property="og:url" content="https://aluraquiz-git-main.gabitchian.vercel.app/" />
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <Input
                  name="name"
                  onChange={(input) => setName(input.target.value)}
                  placeholder="Diz ai seu nome"
                  value={name}
                />
                <Button
                  type="submit"
                  disabled={name.length === 0}
                  as={motion.button}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget
            as={motion.section}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <ul>
                {db.external.map((externalQuiz) => {
                  const [projectName, githubUser] = externalQuiz
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');
                  return (
                    <li key={externalQuiz}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}?name=${name}`}
                        disabled={name.length === 0}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget>
          <Footer
            as={motion.footer}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          />
          <User
            as={motion.footer}
            transition={{ delay: 1.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/gabitchian/aluraquiz" />
      </QuizBackground>
    </>
  );
}
