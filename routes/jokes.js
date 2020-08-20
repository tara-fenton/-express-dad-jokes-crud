var express = require("express");
var router = express.Router();

const jokeCtrl = require("../controllers/jokes");

/* GET users listing. */
router.get("/", jokeCtrl.index);
router.get("/new", jokeCtrl.new);
router.get("/:id", jokeCtrl.show);
router.post("/", jokeCtrl.create);
router.delete("/:id", jokeCtrl.deleteJoke);
router.get("/:id/edit", jokeCtrl.edit);
router.put("/:id", jokeCtrl.update);

module.exports = router;
