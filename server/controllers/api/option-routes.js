const router = require('express').Router();
const { Option } = require('../../models');

router.get('/', (req, res) => {
  Option.findAll({
    attributes: [
      "id",
      "option",
      "correct",
      "question_id"
    ]
  })
    .then((dbOptionData) => res.json(dbOptionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Option.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      "id",
      "option",
      "correct",
      "question_id"
    ]
  })
    .then((dbOptionData) => {
      if (!dbOptionData) {
        res.status(404).json({ message: "No option found with this id" });
        return;
      }
      res.json(dbOptionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Option.create({
    option: req.body.option,
    correct: req.body.correct,
    question_id: req.body.question_id
  })
    .then((dbOptionData) => res.json(dbOptionData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Option.update(
    {
      option: req.body.option,
      correct: req.body.correct
    },
    {
      where: {
        id: req.params.id,
      }
    }
  )
    .then((dbOptionData) => {
      if (!dbOptionData) {
        res.status(404).json({ message: "No option found with this id" });
        return;
      }
      res.json(dbOptionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Option.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((dbOptionData) => {
      if (!dbOptionData) {
        res.status(404).json({ message: "No option found with this id" });
        return;
      }
      res.json(dbOptionData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;