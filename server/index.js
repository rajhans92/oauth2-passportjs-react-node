const express = require("express");
const app = express();
const port = 4000;
const passport = require("passport");
const passportSetup = require("./config/passport-setup.js");
const session = require("express-session");
const authRoutes = require("./router/auth-routes");
const keys = require("./config/keys");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header
const cookieSession = require("cookie-session");
// const mongoose = require("mongoose");

// connect to mongodb
// mongoose.connect(keys.MONGODB_URI, () => {
//   console.log("connected to mongo db");
// });

//https://medium.com/free-code-camp/how-to-set-up-twitter-oauth-using-passport-js-and-reactjs-9ffa6f49ef0

app.use(
    cookieSession({
      name: "session",
      keys: [keys.COOKIE_KEY],
      maxAge: 24 * 60 * 60 * 100
    })
  );
  
  // parse cookies
  app.use(cookieParser());
  
  // initalize passport
  app.use(passport.initialize());
  // deserialize cookie from the browser
  app.use(passport.session());
  

// set up cors to allow us to accept requests from our client
app.use(
    cors({
      origin: "http://localhost:3000", // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true // allow session cookie from browser to pass through
    })
  );

  
  const authCheck = (req, res, next) => {
    if (!req.user) {
      res.status(401).json({
        authenticated: false,
        message: "user has not been authenticated"
      });
    } else {
      next();
    }
  };

app.use("/auth", authRoutes);

app.get("/", authCheck, (req, res) => {
    res.status(200).json({
        authenticated: true,
        message: "user successfully authenticated",
        user: req.user,
        cookies: req.cookies
      });
});

// connect react to nodejs express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));