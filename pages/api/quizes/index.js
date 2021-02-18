import fire from '../../../config/fire-config';

export default function handler(req, res) {
  let ps = {};
  fire
    .firestore()
    .collection('quiz')
    .onSnapshot((snap) => {
      const quizes = snap.docs.map((doc) => ({
        id: doc.id,
        // questions: perguntas,
        ...doc.data(),
      }));
      ps = quizes[0];
    });

  console.log(ps);

  res.json(ps);
}
