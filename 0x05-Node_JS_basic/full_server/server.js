import express from 'express';

/*
*express http
*/

const app = express();
const port = 1245;

app.get('/', (request, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;
