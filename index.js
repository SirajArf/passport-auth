const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const connectDB = require("./config/db");
//const { engine } = require('express-handlebars');
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const methodOverride = require('method-override');
const path = require("path");

//.env config
require("dotenv").config({ path: "./config/config.env" });

//passport config
require("./config/passport")(passport);

//database connect
connectDB();

const port = process.env.PORT || 5000;

const app = express();

//body-parser

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//method override
app.use(methodOverride(function (req, res) {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {

    let method = req.body._method
    delete req.body._method
    return method
  }
}))


//logging

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


const { formatDate } = require('./helpers/dateFormat_utill')
const { ReduceStory } = require('./helpers/string_utill')
const { stripTags, selectOptions } = require('./helpers/html_utill')
const { editIcon } = require('./helpers/editIcon_utill')

//handlebars
app.engine(
  ".hbs",
  exphbs.engine({
    helpers: { formatDate, stripTags, ReduceStory, editIcon, selectOptions },
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//session middleware
app.use(
  session({
    secret: "passport",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

//Static folder
app.use(express.static(path.join(__dirname, "public")));

//routes

app.use("/", routes);
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

app.listen(port, (req, res) => {
  console.log(`server is in ${process.env.NODE_ENV} running at ${port}`);
});
