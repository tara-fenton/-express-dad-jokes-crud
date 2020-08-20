const Joke = require("../models/joke");

module.exports = {
  index,
  show,
  new: newJoke,
  create,
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

function newJoke(req, res) {
  res.render("jokes/new");
}

function create(req, res) {
  Joke.create(req.body);
  res.redirect("/jokes");
}
