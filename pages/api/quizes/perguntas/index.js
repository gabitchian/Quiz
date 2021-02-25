import fire from '../../../../config/fire-config';

export default (req, res) => {
  const { quizId } = req.query;
  fire
    .firestore()
    .collection(`quiz/${quizId}/perguntas`)
    .get()
    .then(async (snap) => {
      const perguntas = await snap.docs.map((perg) => ({
        id: perg.id,
        ...perg.data(),
      }));

      res.status(200);
      res.setHeader('Access-Control-Allow-Credentials', true);

      res.json(perguntas);
    });
};

export const config = {
  api: {
    externalResolver: true,
  },
};
