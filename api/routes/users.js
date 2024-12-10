var express = require("express");
const Users = require("../db/models/Users");
const Response = require("../lib/Response");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    let users = await Users.find({});

    res.json(Response.successResponse(users));
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});

router.post("/add", async (req, res) => {
  try {
  } catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse);
  }
});

module.exports = router;
