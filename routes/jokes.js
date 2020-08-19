var express = require("express");
var router = express.Router();

const jokeCtrl = require("../controllers/jokes");

/* GET users listing. */
router.get("/", jokeCtrl.index);

module.exports = router;
