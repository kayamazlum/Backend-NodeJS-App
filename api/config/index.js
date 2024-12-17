module.exports = {
  PORT: process.env.PORT || "4000",
  LOG_LEVEL: process.env.LOG_LEVEL,
  CONNECTION_STRING:
    process.env.CONNECTION_STRING ||
    "mongodb://localhost:27017/backend-nodejs-app-db",
  JWT: {
    SECRET: "123",
    EXPIRE_TIME: !isNaN(parseInt(process.env.TOKEN_EXPIRE_TIME))
      ? parseInt(process.env.TOKEN_EXPIRE_TIME)
      : 24 * 60 * 60,
  },
};
