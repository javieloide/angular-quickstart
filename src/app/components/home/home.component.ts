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
  seriesTempIn: any[]=[];
  ancho:number = 2450
  alto:number = 450
  multi:any[] = []
  multi2:any[] = []

  // options
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;

  colorScheme:any = {
    domain:['blue', 'yellow', 'red', 'green']
  }
  colorScheme2:any = {
    domain:['red','yellow', 'blue', 'green']
  }
  message: any;
  seriesWind2Minutes: any;
  seriesWind10Minutes: any;
  seriesHumIn: any;
  seriesDewPointIn: any;
  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    const query48= window.matchMedia("(max-width: 3600px)")
    if (query48.matches) { // If media query matches
      this.ancho = 2750
      this.alto = 550
    }
    const query47= window.matchMedia("(max-width: 3500px)")
    if (query47.matches) { // If media query matches
      this.ancho = 2750
      this.alto = 550
    }
    const query46= window.matchMedia("(max-width: 3400px)")
    if (query46.matches) { // If media query matches
      this.ancho = 2750
      this.alto = 450
    }
    const query45= window.matchMedia("(max-width: 3300px)")
    if (query45.matches) { // If media query matches
      this.ancho = 2650
      this.alto = 450
    }
    const query44= window.matchMedia("(max-width: 3200px)")
    if (query44.matches) { // If media query matches
      this.ancho = 2550
      this.alto = 450
    }
    const query43= window.matchMedia("(max-width: 3100px)")
    if (query43.matches) { // If media query matches
      this.ancho = 2450
      this.alto = 450
    }
    const query42 = window.matchMedia("(max-width: 3000px)")
    if (query42.matches) { // If media query matches
      this.ancho = 2400
      this.alto = 450
    }
    const query41 = window.matchMedia("(max-width: 2900px)")
    if (query41.matches) { // If media query matches
      this.ancho = 2300
      this.alto = 450
    }
    const query40 = window.matchMedia("(max-width: 2800px)")
    if (query40.matches) { // If media query matches
      this.ancho = 2200
      this.alto = 450
    }
    const query39 = window.matchMedia("(max-width: 2700px)")
    if (query39.matches) { // If media query matches
      this.ancho = 2150
      this.alto = 450
    }
    const query38 = window.matchMedia("(max-width: 2600px)")
    if (query38.matches) { // If media query matches
      this.ancho = 2100
      this.alto = 450
    }

    const query37 = window.matchMedia("(max-width: 2500px)")
    if (query37.matches) { // If media query matches
      this.ancho = 2000
      this.alto = 450
    }

    const query36 = window.matchMedia("(max-width: 2400px)")
    if (query36.matches) { // If media query matches
      this.ancho = 1900
      this.alto = 450
    }
    const query35 = window.matchMedia("(max-width: 2300px)")
    if (query35.matches) { // If media query matches
      this.ancho = 1800
      this.alto = 450
    }

    const query34 = window.matchMedia("(max-width: 2200px)")
    if (query34.matches) { // If media query matches
      this.ancho = 1750
      this.alto = 450
    }

    const query33 = window.matchMedia("(max-width: 2100px)")
    if (query33.matches) { // If media query matches
      this.ancho = 1650
      this.alto = 450
    }
    const query32 = window.matchMedia("(max-width: 2000px)")
    if (query32.matches) { // If media query matches
      this.ancho = 1550
      this.alto = 450
    }

    const query31 = window.matchMedia("(max-width: 1950px)")
    if (query31.matches) { // If media query matches
      this.ancho = 1500
      this.alto = 450
    }
    const query30 = window.matchMedia("(max-width: 1900px)")
    if (query30.matches) { // If media query matches
      this.ancho = 1450
      this.alto = 450
    }
    const query29 = window.matchMedia("(max-width: 1850px)")
    if (query29.matches) { // If media query matches
      this.ancho = 1450
      this.alto = 350
    }

    const query28 = window.matchMedia("(max-width: 1800px)")
    if (query28.matches) { // If media query matches
      this.ancho = 1400
      this.alto = 450
    }

    const query27 = window.matchMedia("(max-width: 1750px)")
    if (query27.matches) { // If media query matches
      this.ancho = 1350
      this.alto = 450
    }

    const query26 = window.matchMedia("(max-width: 1700px)")
    if (query26.matches) { // If media query matches
      this.ancho = 1350
      this.alto = 450
    }

    const query25 = window.matchMedia("(max-width: 1650px)")
    if (query25.matches) { // If media query matches
      this.ancho = 1350
      this.alto = 450
    }
    const query24 = window.matchMedia("(max-width: 1600px)")
    if (query24.matches) { // If media query matches
      this.ancho = 1300
      this.alto = 350
    }
    const query23 = window.matchMedia("(max-width: 1550px)")
    if (query23.matches) { // If media query matches
      this.ancho = 1250
      this.alto = 350
    }
    const query22 = window.matchMedia("(max-width: 1500px)")
    if (query22.matches) { // If media query matches
      this.ancho = 1200
      this.alto = 350
    }
    const query21 = window.matchMedia("(max-width: 1450px)")
    if (query21.matches) { // If media query matches
      this.ancho = 1150
      this.alto = 300
    }
    const query20 = window.matchMedia("(max-width: 1400px)")
    if (query20.matches) { // If media query matches
      this.ancho = 1100
      this.alto = 300
    }
    const query19 = window.matchMedia("(max-width: 1350px)")
    if (query19.matches) { // If media query matches
      this.ancho = 1080
      this.alto = 300
    }
    const query18 = window.matchMedia("(max-width: 1300px)")
    if (query18.matches) { // If media query matches
      this.ancho = 1000
      this.alto = 300
    }
    const query17 = window.matchMedia("(max-width: 1250px)")
    if (query17.matches) { // If media query matches
      this.ancho = 970
      this.alto = 300
    }
    const query16 = window.matchMedia("(max-width: 1200px)")
    if (query16.matches) { // If media query matches
      this.ancho = 950
      this.alto = 300
    }
    const query15 = window.matchMedia("(max-width: 1150px)")
    if (query15.matches) { // If media query matches
      this.ancho = 900
      this.alto = 300
    }
    const query14 = window.matchMedia("(max-width: 1100px)")
    if (query14.matches) { // If media query matches
      this.ancho = 900
      this.alto = 300
    }
    const query13 = window.matchMedia("(max-width: 1050px)")
    if (query13.matches) { // If media query matches
      this.ancho = 900
      this.alto = 300
    }
    const query12 = window.matchMedia("(max-width: 1050px)")
    if (query12.matches) { // If media query matches
      this.ancho = 800
      this.alto = 300
    }
    const query11 = window.matchMedia("(max-width: 1000px)")
    if (query11.matches) { // If media query matches
      this.ancho = 770
      this.alto = 300
    }
    const query10 = window.matchMedia("(max-width: 950px)")
    if (query10.matches) { // If media query matches
      this.ancho = 750
      this.alto = 300
    }
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

    this.obtenerDatosGraficaLocalStorage();
    this.intervalUpdate = setInterval(() => {
      this.obtenerDatos();
    }, 300000);
  }


  obtenerDatosGraficaLocalStorage(){
    let seriesJsonLocalStorageHum = JSON.parse(localStorage.getItem('seriesHum')!)
    this.seriesHum = seriesJsonLocalStorageHum

    let seriesJsonLocalStorageWind2Minutes = JSON.parse(localStorage.getItem('seriesWind2Minutes')!)
    this.seriesWind2Minutes = seriesJsonLocalStorageWind2Minutes

    let seriesJsonLocalStorageWind10Minutes = JSON.parse(localStorage.getItem('seriesWind10Minutes')!)
    this.seriesWind10Minutes = seriesJsonLocalStorageWind10Minutes

    let seriesJsonLocalStorageTempIn = JSON.parse(localStorage.getItem('seriesTempIn')!)
    this.seriesTempIn = seriesJsonLocalStorageTempIn

    let seriesJsonLocalStorageHumIn = JSON.parse(localStorage.getItem('seriesHumIn')!)
    this.seriesHumIn = seriesJsonLocalStorageHumIn

    let seriesJsonLocalStorageDewPointIn = JSON.parse(localStorage.getItem('seriesDewPointIn')!)
    this.seriesDewPointIn = seriesJsonLocalStorageDewPointIn


    this.multi =
    [
      {
        "name": "Humedad",
        "series": this.seriesHum
      },
      {
        "name": "Viento 2 min",
        "series": this.seriesWind2Minutes
      },
      {
        "name": "Viento 10 min",
        "series": this.seriesWind10Minutes
      },
    ]
    this.multi2 =
    [
      {
        "name": "Temperatura",
        "series": this.seriesTempIn
      },
      {
        "name": "Humedad",
        "series": this.seriesHumIn
      },
      {
        "name": "Punto de rocío",
        "series": this.seriesDewPointIn
      }
    ]
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

  guardarLocalStorageWind2Minutes(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWind2Minutes')){
      a = JSON.parse(localStorage.getItem('seriesWind2Minutes')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWind2Minutes', JSON.stringify(a));
  }

  guardarLocalStorageWind10Minutes(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWind10Minutes')){
      a = JSON.parse(localStorage.getItem('seriesWind10Minutes')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWind10Minutes', JSON.stringify(a));
  }


  guardarLocalStorageTempIn(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesTempIn')){
      a = JSON.parse(localStorage.getItem('seriesTempIn')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesTempIn', JSON.stringify(a));
  }

  guardarLocalStorageHumIn(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHumIn')){
      a = JSON.parse(localStorage.getItem('seriesHumIn')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHumIn', JSON.stringify(a));
  }

  guardarLocalStorageDewPointIn(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesDewPointIn')){
      a = JSON.parse(localStorage.getItem('seriesDewPointIn')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesDewPointIn', JSON.stringify(a));
  }

  obtenerDatos() {
    // Inicializamos los sensores
    this.sensor0 = {}
    this.sensor1 = {}
    this.sensor2 = {}
    this.sensor3 = {}


    // Obtenemos los sensores
    this.weatherService.getDataCustom().subscribe(data => {
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

      this.guardarLocalStorageWind2Minutes({
        "name": date,
        "value": this.sensor0?.wind_speed_avg_last_2_min
      })

      this.guardarLocalStorageWind10Minutes({
        "name": date,
        "value": this.sensor0?.wind_speed_avg_last_10_min
      })

      this.guardarLocalStorageTempIn({
        "name": date,
        "value": this.sensor1?.temp_in
      })
      this.guardarLocalStorageHumIn({
        "name": date,
        "value": this.sensor1?.hum_in
      })

      this.guardarLocalStorageDewPointIn({
        "name": date,
        "value": this.sensor1?.dew_point_in
      })

      this.obtenerDatosGraficaLocalStorage();
      //console.log(this.sensor0);
    })
  }

  onSelect(data:any): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
