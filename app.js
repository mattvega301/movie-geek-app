const axios = require('axios');
const express = require('express');
require('dotenv').config();


const app = express();

app.use(express.static('public'));






const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Starting server on port: ${PORT}`);
});