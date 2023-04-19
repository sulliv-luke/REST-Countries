const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

// enable CORS for cross-origin requests
app.use(cors());

// create a route to handle the API request
app.get('/countries/:name', async (req, res) => {
  const name = req.params.name;
  try {
    const response = await axios.get(`https://restcountries.com/v2/name/${name}`);
    const data = response.data;
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching country data');
  }
});

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
