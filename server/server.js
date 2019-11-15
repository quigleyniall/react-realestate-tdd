const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const api = express();

api.use(cors())
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json({ limit: '5mb' }));

api.get('/:type/:location', async (req, res) => {
  const { type, location } = req.params;
  const { priceMax, priceMin, bathMin, bathMax, bedMax, bedMin } = req.query;
  const request = await axios.get(`
    https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=${type}&place_name=${location}&price_min=${priceMin}&price_max=${priceMax}&bedroom_min=${bedMin}&bedroom_max=${bedMax}&bathroom_min=${bathMin}&bathroom_max=${bathMax}
  `);

  const response = await request.data;
  return res.json(response);
})

api.listen(8080, () => {
  console.log("Running")
})