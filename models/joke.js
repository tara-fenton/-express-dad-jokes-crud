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
    joke: "'Hey, dad, did you get a haircut?' 'No, I got them all cut.'",
    funny: true,
  },
];

module.exports = {
  getAll,
};

function getAll() {
  return jokes;
}
