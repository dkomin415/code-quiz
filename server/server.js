const express = require('express');
const routes = require('./controllers');
const sequelize = require('./lib/config/connection');
const promptUser = require('./lib/utils/prompt-user');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Now listening on port:', PORT );
    // promptUser();
  });
});