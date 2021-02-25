import fire from '../../../config/fire-config';

export default (req, res) => {
  fire
    .firestore()
    .collection('quiz')
    .get()
    .then(async (snap) => {
      const quizes = await snap.docs.map((doc) => ({
        id: doc.id,
        // questions: perguntas,
        ...doc.data(),
      }));
      res.status(200);
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      // res.json(quizes);
      res.status(200).json(quizes[0]);
    });
};

export const config = {
  api: {
    externalResolver: true,
  },
};
