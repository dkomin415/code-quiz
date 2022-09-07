const router = require('express').Router();
const { Question, Option } = require('../../models');

router.get('/', (req, res) => {
  Question.findAll({
    attributes: [
      "id",
      "title",
      "quiz_id"
    ],
    include: [
      {
        model: Option,
        attributes: [
          "id",
          "option",
          "correct",
          "question_id"
        ]
      }
    ]
  })
    .then((dbQuestionData) => res.json(dbQuestionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Question.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      "id",
      "title",
      "quiz_id"
    ],
    include: [
      {
        model: Option,
        attributes: [
          "id",
          "option",
          "correct",
          "question_id"
        ]
      }
    ]
  })
    .then((dbQuestionData) => {
      if (!dbQuestionData) {
        res.status(404).json({ message: "No question found with this id" });
        return;
      }
      res.json(dbQuestionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Question.create({
    title: req.body.title,
    quiz_id: req.body.quiz_id
  })
    .then(dbQuestionData => res.json(dbQuestionData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Question.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((dbQuestionData) => {
      if (!dbQuestionData) {
        res.status(404).json({ message: "No question found with this id" });
        return;
      }
      res.json(dbQuestionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Question.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((dbQuestionData) => {
      if (!dbQuestionData) {
        res.status(404).json({ message: "No question found with this id" });
        return;
      }
      res.json(dbQuestionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;