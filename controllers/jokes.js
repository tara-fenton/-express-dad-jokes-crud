const Joke = require("../models/joke");

module.exports = {
  index,
};

function index(req, res) {
  res.render("jokes/index", {
    jokes: Joke.getAll(),
  });
}
