const GOOGLE_TOKENS = {
    GOOGLE_CLIENT_ID: "937325286956-2508g7r86m143gc7te2r7h1eqsgri1gt.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GOOGLE_ACCESS_TOKEN: "SOME ACCESS TOKEN",
    GOOGLE_TOKEN_SECRET: "SOME TOKEN SECRET"
  };
  
  const DB_USER = "SOME USER";
  const DB_PASSWORD = "SOME PASSWPORD";
  const MONGODB = {
    MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds<SOME_DOMAIN>.mlab.com:<PORT>/<PROJECT_NAME>`
  };
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
  };
  
  const KEYS = {
    ...GOOGLE_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;