const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require("./keys");
// const User = require("../models/user-model");

passport.use(new GoogleStrategy({
        clientID:keys.GOOGLE_CLIENT_ID,
        clientSecret:keys.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/auth/login/redirect",
        passReqToCallback   : true
    },
    async (request, accessToken, refreshToken, profile, done) => {
      // find current user in UserModel
      console.log("reach google strategy");
      return done(null, accessToken);
    }
));

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((accessToken, done) => {
    done(null, accessToken);
  });
  
  // deserialize the cookieUserId to user in the database
  passport.deserializeUser((accessToken, done) => {
    done(null, accessToken);
  });