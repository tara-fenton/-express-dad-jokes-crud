const Joke = require("../models/joke");

module.exports = {
  index,
  show,
};

function index(req, res) {
  res.render("jokes/index", {
    jokes: Joke.getAll(),
  });
}

function show(req, res) {
  res.render("jokes/show", {
    joke: Joke.getOne(req.params.id),
  });
}
