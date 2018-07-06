const read = (req, res) => {
  req.app.get('db').get_inventory()
    .then(inventory => res.status(200).send(inventory))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
}

const create = (req, res) => {
  let {name, price, imgurl} = req.body;

  price = parseFloat(price);

  req.app.get('db').create_product([name, price, imgurl])
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
}

module.exports = {
  create,
  read
}