module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL,
  CONNECTION_STRING:
    process.env.CONNECTION_STRING ||
    "mongodb://localhost:27017/backend-nodejs-app-db",
};
