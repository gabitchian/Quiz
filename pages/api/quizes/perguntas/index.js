import fire from '../../../../config/fire-config';

export default (req, res) => {
  fire
    .firestore()
    .collection('quiz')
    .get(req.query.quizId)
    .then(async (snap) => {
      const quizes = await snap.docs.map(async (doc) => {
        const pergs = await fire
          .firestore()
          .collection(`quiz/${doc.id}/perguntas`)
          .get()
          .then(async (result) => {
            const perguntas = await result.docs.map((perg) => ({
              id: perg.id,
              ...perg.data(),
            }));

            return perguntas;
          });

        const obj = {
          id: doc.id,
          questions: pergs,
          ...doc.data(),
        };

        console.log(obj);
        return obj;
      });

      console.log('quizes ', quizes[0]);

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
