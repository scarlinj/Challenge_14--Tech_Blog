const path = require('path');
// import express
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes/');
const app = express();

const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    // secrets are 
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({
    helpers
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/'));

// turn on connection to db and server - "sync" means Sequelize takes models and connects them to associate database tables.
// if this doesn't find a table, it will create one
// use backticks, not apostrophes, below

sequelize.sync({
    // force: true to tell Sequelize to use new tables.  Use force: false normally to save session data
    force: false
}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}.`));
});