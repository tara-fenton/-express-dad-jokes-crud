const router = express.Router();
// require the Todo model
const Joke = require("../models/joke");

router.get("/", function (req, res) {
  res.render("jokes/index", {
    jokes: Joke.getAll(),
  });
});
