const jokes = [
  {
    id: 125223,
    joke: "What did the shy pebble wish for? That she was a little boulder.",
    funny: true,
  },
  {
    id: 127904,
    joke: "I'll call you later. Dont call me later, call me Dad.",
    funny: false,
  },
  {
    id: 139608,
    joke: "'Hey, dad, did you get a haircut?' 'No, I got them all cut.'",
    funny: true,
  },
  {
    id: 134358,
    joke: "What kind of music do planets listen to? Nep-tunes.",
    funny: true,
  },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getAll() {
  return jokes;
}
function getOne(id) {
  // Use the Array.prototype.find iterator method
  return jokes.find((joke) => joke.id === parseInt(id));
}

function create(joke) {
  joke.id = Date.now() % 1000000;
  joke.funny = true;
  jokes.push(joke);
}
function deleteOne(id) {
  const idx = jokes.findIndex((joke) => joke.id === parseInt(id));
  jokes.splice(idx, 1);
}
function update(id) {
  const idx = jokes.findIndex((joke) => joke.id === parseInt(id));
  jokes.splice(idx, 1);
}
