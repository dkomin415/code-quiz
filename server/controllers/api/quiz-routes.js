const router = require('express').Router();
const { Quiz, User, Question, Option } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Quiz.findAll({
    attributes: [
      "id",
      "title",
      "user_id",
      "created_at"
    ],
    include: [
      {
        model: Question,
        attributes: [
          "id",
          "title",
          "quiz_id"
        ],
        include: {
          model: Option,
          attributes: [
            "id",
            "option",
            "correct",
            "question_id"
          ]
        }
      },
      {
        model: User,
        attributes: ["username"],
      }
    ]
  })
    .then((dbQuizData) => res.json(dbQuizData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Quiz.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      "id",
      "title",
      "user_id",
      "created_at"
    ],
    include: [
      {
        model: Question,
        attributes: [
          "id",
          "title",
          "quiz_id"
        ],
        include: {
          model: Option,
          attributes: [
            "id",
            "option",
            "correct",
            "question_id"
          ]
        }
      },
      {
        model: User,
        attributes: ["username"],
      }
    ]
  })
    .then((dbQuizData) => {
      if (!dbQuizData) {

        res.status(404).json({ message: "No quiz found with this id" });
        return;
      }
      res.json(dbQuizData);
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/', withAuth, (req, res) => {
  Quiz.create(
    {
      title: req.body.title,
      user_id: req.body.user_id
    })
    .then((dbQuizData) => res.json(dbQuizData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Quiz.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      }
    }
  )
    .then((dbQuizData) => {
      if (!dbQuizData) {
        res.status(404).json({ message: "No quiz found with this id" });
        return;
      }
      res.json(dbQuizData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Quiz.destroy({
    where: {
      id: req.params.id,
    }
  })
    .then((dbQuizData) => {
      if (!dbQuizData) {
        res.status(404).json({ message: "No quiz found with this id" });
        return;
      }
      res.json(dbQuizData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;