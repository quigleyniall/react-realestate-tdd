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
  const request = await axios.get(`
    https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=${type}&place_name=${location}
  `);
  const response = await request.data;
  return res.json(response);
})

api.listen(8080, () => {
  console.log("Running")
})