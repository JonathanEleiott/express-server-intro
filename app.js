import bunnies from '#db/bunnies';

import express from  'express';
const app = express();

app.route('/').get((req, res) => {
  res.send('<h1>WELCOME</h1>');
});

app.route('/bunnies').get((req, res) => {
  res.send(`<h1>Bunnies!</h1>`);
});

app.route('/api/v1/bunnies').get((req, res) => {
  res.send(bunnies);
});

app.get('/api/v1/bunnies/favBunny', (req, res) => {
  res.send(`My favorite bunny is ${bunnies[0].name}!`);
});

app.get('/api/v1/bunnies/:bunnyId', (req, res) => {
  const { bunnyId } = req.params;

  const foundBunny = bunnies.find((bunny) => {
    return bunny.id === Number(bunnyId);
  });

  if(!foundBunny) {
    res.status(404).send('Bunny not found');
  }

  res.send(`You picked bunny ${foundBunny.name}`);
});

// app.get('/api/v1/bunnies/:name', (req, res) => {
//   const { name } = req.params;
//   res.send(`You picked the bunny named ${name}`);
// });

export default app;