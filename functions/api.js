const express = require('express');
const serverless = require('serverless-http');

const request = require("request");
const Crypto = require('crypto-js');
const cors = require('cors');

const app = express();
const router = express.Router();
//const http = require("http");
//var port = process.env.PORT || 8888

// Cors
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));


router.get('/sensors', (req, res) => {
  const stationId = 131898
  const apiKey = 'st19echieqzz9locx4sz17rbfvbupnej'
  const dateTime = Date.now();
  const timestamp = Math.floor(dateTime / 1000);
  const secretKey = 'trr8kdnrlzl05ej0hck0wfh1wuqmhldq';
  const preSignature = 'api-key'+apiKey+'station-id'+stationId+'t'+timestamp;

  const url = 'https://api.weatherlink.com/v2';

  // Convertimos a HMAC SHA256
  const signature = Crypto.HmacSHA256(preSignature,secretKey)
  var signature_str = signature.toString(Crypto.enc.Hex);

  const urlFormada = url + '/current/' + stationId + '?api-key=' + apiKey + '&t=' + timestamp + '&api-signature=' + signature_str


  request.get(urlFormada, (error, response, body) => {
    let json = JSON.parse(body);
    res.json(json);
  });
});

app.use('/.netlify/functions/api', router);



module.exports=app;
module.exports.handler = serverless(app);

