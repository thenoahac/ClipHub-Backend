const express = require("express");
const session = require("express-session");
const cors = require("cors");
const { sequelize } = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();

const sess = {
    secret: process.env.SESS_SECRET,
    cookie: {maxAge: 20000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
// app.set('trust proxy', 1)
app.use(session(sess));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors({credentials: true}));

app.use('/api', require("./routes"));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    sequelize.sync({ force: false });
}) 