import fire from '../../../config/fire-config';

export default (req, res) => {
  fire
    .firestore()
    .collection('quiz')
    .onSnapshot(async (snap) => {
      const quizes = await snap.docs.map((doc) => ({
        id: doc.id,
        // questions: perguntas,
        ...doc.data(),
      }));
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.send(quizes);
    });
};

export const config = {
  api: {
    externalResolver: true,
  },
};
