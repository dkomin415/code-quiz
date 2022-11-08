const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./html');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send();
});

module.exports = router;