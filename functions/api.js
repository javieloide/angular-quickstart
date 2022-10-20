const express = require('express');
const serverless = require('serverless-http');
const axios = require('axios');
const cheerio = require('cheerio');
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


router.get('/sensors-badajoz', (req, res) => {
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

router.get('/sensors-zarza', (req, res) => {
  const stationId = 139487
  const apiKey = 'tfvjqrinabmclgo2lscdaglhg1ywotya'
  const dateTime = Date.now();
  const timestamp = Math.floor(dateTime / 1000);
  const secretKey = 'm9pzzv3rapyvj9fvgobnul5hobszh3ra';
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

router.get('/sensors-cedillo', (req, res) => {
  const stationId = 139542
  const apiKey = 'fkzouqupzx4ihug38xiime4w2mabnzrw'
  const dateTime = Date.now();
  const timestamp = Math.floor(dateTime / 1000);
  const secretKey = 'kn5q2ch8xzwo6iukrxaa1pgpj1drfttr';
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

router.get('/sensors-valenciaA', (req, res) => {
  const stationId = 141344
  const apiKey = 'kyfs7hcddzczsbwgq0sebxweqphrdszu'
  const dateTime = Date.now();
  const timestamp = Math.floor(dateTime / 1000);
  const secretKey = 'kr1xpuhydpydgtaonmtzfcxt7tjiib3q';
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

router.get('/fotometro-zarza', (req, res) => {
  const device = 'LPL16_001';
  const url = 'https://data.eelabs.eu';
  const query = '/api/devices/'+device+'/data?interval=24h';

  const urlFormada = url + query;

  request.get(urlFormada, (error, response, body) => {
    let json = JSON.parse(body);
    res.json(json);
  });
});

router.get('/fotometro-herreruela', (req, res) => {
  const device = 'LPL16_003';
  const url = 'https://data.eelabs.eu';
  const query = '/api/devices/'+device+'/data?interval=24h';

  const urlFormada = url + query;

  request.get(urlFormada, (error, response, body) => {
    let json = JSON.parse(body);
    res.json(json);
  });
});

router.get('/fotometro-valenciaA', (req, res) => {
  const device = 'LPL15_015';
  const url = 'https://data.eelabs.eu';
  const query = '/api/devices/'+device+'/data?interval=24h';

  const urlFormada = url + query;

  request.get(urlFormada, (error, response, body) => {
    let json = JSON.parse(body);
    res.json(json);
  });
});

router.get('/fotometro-santiagoA', (req, res) => {
  const device = 'LPL15_004';
  const url = 'https://data.eelabs.eu';
  const query = '/api/devices/'+device+'/data?interval=24h';

  const urlFormada = url + query;

  request.get(urlFormada, (error, response, body) => {
    let json = JSON.parse(body);
    res.json(json);
  });
});

router.get('/fotometro-badajoz', (req, res) => {
  const device = 'UEX1_001';
  const url = 'https://data.eelabs.eu';
  const query = '/api/devices/'+device+'/data?interval=24h';

  const urlFormada = url + query;

  request.get(urlFormada, (error, response, body) => {
    let json = JSON.parse(body);
    res.json(json);
  });
});

router.get('/scrap', (req, res) => {
  let url = 'https://www.eltiempo.es/aeropuerto-badajoz-talavera-la-real-bjz.html?v=detallada'

  axios(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      const textos = [];
      const headers = [];
      const valoresColumna=[]
      const valoresOtros=[]
      $('div .m_table_weather_day_date', html).each(function () {
        const texto = $(this).text().trim();
        textos.push({
          texto
        })
      })

      $('div .m_table_weather_day_wrapper div .m_table_weather_day_temp_wrapper', html).each(function () {
        const texto = $(this).text().trim();
        valoresColumna.push({
          texto,
      })
    })
    $('div .m_table_weather_day_header div', html).each(function () {
      const header = $(this).text().trim();
        headers.push({
            header,
          })
      })

      $('div .m_table_weather_day_child.m_table_weather_day_storm.m_tables_hidden', html).each(function () {
        const header = $(this).text().trim();
        valoresOtros.push({
              header,
            })
        })
      const dato = {headers, valoresColumna, valoresOtros};
      res.json({textos, dato});
    }).catch(error => {
      res.json(error);
    })
})



app.use('/.netlify/functions/api', router);

module.exports=app;
module.exports.handler = serverless(app);

