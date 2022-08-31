import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Sensor1 } from 'src/app/models/Sensor1';
import { Sensor0 } from 'src/app/models/Sensor0';
import { Sensor2 } from 'src/app/models/Sensor2';
import { Sensor3 } from 'src/app/models/Sensor3';
import * as moment from 'moment';

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

  seriesHum:any[]=[]
  seriesRainRate: any[]=[];
  ancho:number = 700
  alto:number = 300
  multi:any[] = []
  // options
  legend: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;

  colorScheme:any = {
    domain:['#006CFF', '#ffd60a', 'red']
  }
  message: any;
  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    const query3 = window.matchMedia("(max-width: 912px)")
    if (query3.matches) { // If media query matches
      this.ancho = 700
      this.alto = 300
    }
    const query0 = window.matchMedia("(max-width: 820px)")
    if (query0.matches) { // If media query matches
      this.ancho = 630
      this.alto = 300
    }
    const query1 = window.matchMedia("(max-width: 768px)")
    if (query1.matches) { // If media query matches
      this.ancho = 600
      this.alto = 300
    }
    const query5 = window.matchMedia("(max-width: 720px)")
    if (query5.matches) { // If media query matches
      this.ancho = 550
      this.alto = 300
    }
    const query6 = window.matchMedia("(max-width: 660px)")
    if (query6.matches) { // If media query matches
      this.ancho = 500
      this.alto = 300
    }

    const query7 = window.matchMedia("(max-width: 610px)")
    if (query7.matches) { // If media query matches
      this.ancho = 450
      this.alto = 300
    }

    const query8 = window.matchMedia("(max-width: 540px)")
    if (query8.matches) { // If media query matches
      this.ancho = 400
      this.alto = 300
    }

    const query9 = window.matchMedia("(max-width: 480px)")
    if (query9.matches) { // If media query matches
      this.ancho = 350
      this.alto = 300
    }
    const query2 = window.matchMedia("(max-width: 414px)")
    if (query2.matches) { // If media query matches
      this.ancho = 300
      this.alto = 300
    }

    const query4 = window.matchMedia("(max-width: 375px)")
    if (query4.matches) { // If media query matches
      this.ancho = 300
      this.alto = 300
    }

    this.obtenerDatos();
    this.intervalUpdate = setInterval(() => {
      this.obtenerDatos();
    }, 300000);
  }


  guardarLocalStorageHum(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHum')){
      a = JSON.parse(localStorage.getItem('seriesHum')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHum', JSON.stringify(a));
  }

  guardarLocalStorageRainRate(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainRate')){
      a = JSON.parse(localStorage.getItem('seriesRainRate')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainRate', JSON.stringify(a));
  }

  obtenerDatos() {
    // Inicializamos los sensores
    this.sensor0 = {}
    this.sensor1 = {}
    this.sensor2 = {}
    this.sensor3 = {}


    // Obtenemos los sensores
    this.weatherService.getDataCustom().subscribe(data => {
      console.log('data',data);
      if(data.message){
        this.message = data.message
      }
      this.sensor0 = data?.sensors ? data?.sensors[0]?.data[0]: null;
      this.sensor1 = data?.sensors ? data?.sensors[1]?.data[0]: null;
      this.sensor2 = data?.sensors ? data?.sensors[2]?.data[0]: null;
      this.sensor3 = data?.sensors ? data?.sensors[3]?.data[0]: null;

      let  date = new Date().toISOString();
      date = moment(date).format('HH:mm:ss')


      this.guardarLocalStorageHum({
        "name": date,
        "value": this.sensor0?.hum
      })
      /*this.guardarLocalStorageRainRate({
        "name": date,
        "value": this.sensor0?.rain_rate_hi_mm
      })*/
      let seriesJsonLocalStorageHum = JSON.parse(localStorage.getItem('seriesHum')!)
      this.seriesHum = seriesJsonLocalStorageHum
      //let seriesJsonLocalStorageRainRate = JSON.parse(localStorage.getItem('seriesRainRate')!)
      //this.seriesRainRate = seriesJsonLocalStorageRainRate
      this.multi =
      [
        {
          "name": "Humedad",
          "series": this.seriesHum
        },
        /*{
          "name": "Ratio de lluvia",
          "series": this.seriesRainRate
        }*/
      ]
      console.log(this.sensor0);
    })
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
