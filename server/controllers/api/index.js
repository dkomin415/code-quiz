const router = require('express').Router();

const userRoutes = require('./user-routes');
const quizRoutes = require('./quiz-routes');

router.use('/users', userRoutes);

module.exports = router;