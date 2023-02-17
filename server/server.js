const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const Sequelize = require('./lib/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,
    maxAge: parseInt(process.env.SESSION_MAX_AGE)
  },
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: Sequelize
  })
};

// session
app.use(session(sess));

// turn on routes
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// turn on connection to db and server
Sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Now listening on port:', PORT );
  });
});