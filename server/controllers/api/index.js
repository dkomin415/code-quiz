const router = require('express').Router();

const userRoutes = require('./user-routes');
const quizRoutes = require('./quiz-routes');
const questionRoutes = require('./question-routes')
const optionRoutes = require('./option-routes')

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/question', questionRoutes);
router.use('/option', optionRoutes);

module.exports = router;