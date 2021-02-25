/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import QuizPage from '../../components/screens/Quiz';
import { QuizContext } from '../../context/QuizContext';

export default () => {
  const { db, setUserName } = useContext(QuizContext);
  const router = useRouter();
  const { name } = router.query;

  setUserName(name);

  return (
      <QuizPage db={db} />
    );
};
