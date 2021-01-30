/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';

import db from '../../db.json';
import QuizPage from '../../src/screens/Quiz';

// export default (props) => (<QuizPage db={db} name={props.match.params.name} />);
export default () => {
  const router = useRouter();
  const { name } = router.query;
  return (<QuizPage db={db} name={name} />);
};
