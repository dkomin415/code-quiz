const router = require('express').Router();

const userRoutes = require('./user-routes');
const quizRoutes = require('./quiz-routes');
const questionRoutes = require('./question-routes')

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/question', questionRoutes);

module.exports = router;