const express = require('express');
const {json} = require('body-parser');
const app = express();
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const PORT = 5000;

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });

app.use(json());

app.get('/api/inventory', controller.read);
app.post('/api/product', controller.create);
app.delete('/api/product/:id', controller.remove);
app.put('/api/product/:id', controller.update);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});