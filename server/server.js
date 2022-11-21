const express = require('express');
const routes = require('./controllers');
const sequelize = require('./lib/config/connection');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// turn on routes
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Now listening on port:', PORT );
  });
});