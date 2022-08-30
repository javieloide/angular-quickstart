import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
//import { environment } from 'src/environments/environment';
//import * as Crypto from 'crypto-js';
import { Sensor1 } from 'src/app/models/Sensor1';
import { Sensor0 } from 'src/app/models/Sensor0';
import { Sensor2 } from 'src/app/models/Sensor2';
import { Sensor3 } from 'src/app/models/Sensor3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  intervalUpdate: any = null;
  sensor0: Sensor0 = {};
  sensor1: Sensor1 = {};
  sensor2: Sensor2 = {};
  sensor3: Sensor3 = {};

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.intervalUpdate = setInterval(() => {
      this.obtenerDatos();
    }, 300000);
  }
  obtenerDatos() {
    // Obtenemos t en unidades unix timestamp
    /*const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);

    const apiKey = environment.apiKey

    const stationId = 131898;

    const secretKey = environment.secretKey;

    const preSignature = 'api-key'+apiKey+'station-id'+stationId+'t'+timestamp;

    // Convertimos a HMAC SHA256
    const signature = Crypto.HmacSHA256(preSignature,secretKey)
    var signature_str = signature.toString(Crypto.enc.Hex);*/

    // Inicializamos los sensores
    this.sensor0 = {}
    this.sensor1 = {}
    this.sensor2 = {}
    this.sensor3 = {}

    // Obtenemos los sensores
    this.weatherService.getDataCustom().subscribe(data => {
      this.sensor0 = data.sensors[0].data[0];
      this.sensor1 = data.sensors[1].data[0];
      this.sensor2 = data.sensors[2].data[0];
      this.sensor3 = data.sensors[3].data[0];
      console.log(this.sensor0);
    })

  }
}
