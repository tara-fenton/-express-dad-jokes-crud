const Joke = require("../models/joke");

module.exports = {
  index,
  show,
  new: newJoke,
  create,
  deleteJoke,
  edit,
  update,
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

function deleteJoke(req, res) {
  Joke.deleteOne(req.params.id);
  res.redirect("/jokes");
}

function edit(req, res) {
  res.render("jokes/edit", {
    joke: Joke.getOne(req.params.id),
  });
}

function update(req, res) {
  req.body.funny = req.body.funny === "on";
  Joke.update(req.params.id, req.body);
  res.redirect("/jokes");
}
