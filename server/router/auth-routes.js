const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3000/";

// when login is successful, retrieve user info
router.post("/login/success", (req, res) => {
  if (req.user && req.user.length > 0 ) {
    res.json({
      status: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }else{
    res.json({
      status: false,
      message: "user has failed authenticated"
    });
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

// auth with oauth2
router.get("/login", passport.authenticate("google", {scope: 'openid email profile'}));

// redirect to home page after successfully login via oauth
router.get(
  "/login/redirect",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login"
  })
);

module.exports = router;