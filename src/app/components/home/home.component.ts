import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import * as moment from 'moment';
import { EstacionBadajoz } from 'src/app/models/EstacionBadajoz';
import { EstacionZarzaLaMayor } from 'src/app/models/EstacionZarzaLaMayor';
import { EstacionValenciaA } from 'src/app/models/EstacionValenciaA';
import { EstacionCedillo } from 'src/app/models/EstacionCedillo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  intervalBadajoz: any = null;
  intervalZarzaLaMayor: any = null;
  intervalCedillo: any = null;
  intervalValenciaA: any = null;

  estacionBadajoz: EstacionBadajoz = {
    sensor0: {},
    sensor1: {},
    sensor2: {},
    sensor3: {},
  };
  estacionZarzaLaMayor: EstacionZarzaLaMayor = {
    sensor0: {},
    sensor1: {},
    sensor2: {},
    sensor3: {},
  };
  estacionValenciaA: EstacionValenciaA = {
    sensor0: {},
    sensor1: {},
    sensor2: {},
    sensor3: {},
  }
  estacionCedillo: EstacionCedillo = {
    sensor0: {},
    sensor1: {},
    sensor2: {},
    sensor3: {},
  }

  seriesTempInBadajoz: any[]=[];
  seriesHumInBadajoz: any[]=[];
  seriesBarBadajoz: any[]=[];
  seriesTempBadajoz: any[]=[];
  seriesWindChillBadajoz:any[]=[];
  seriesHeatIndexBadajoz:any[]=[];
  seriesDewPointBadajoz: any[]=[];
  seriesWetBulbBadajoz: any[]=[];
  seriesRainYearBadajoz: any[]=[];
  seriesRainMonthBadajoz: any[]=[];
  seriesRainStormBadajoz: any[]=[];
  seriesRainRateBadajoz: any[]=[];
  seriesRainDailyBadajoz: any[]=[];

  seriesTempInZarza: any[]=[];
  seriesHumInZarza: any[]=[];
  seriesBarZarza: any[]=[];
  seriesTempZarza: any[]=[];
  seriesWindChillZarza:any[]=[];
  seriesHeatIndexZarza:any[]=[];
  seriesDewPointZarza: any[]=[];
  seriesWetBulbZarza: any[]=[];
  seriesRainYearZarza: any[]=[];
  seriesRainMonthZarza: any[]=[];
  seriesRainStormZarza: any[]=[];
  seriesRainRateZarza: any[]=[];
  seriesRainDailyZarza: any[]=[];

  seriesTempInCedillo: any[]=[];
  seriesHumInCedillo: any[]=[];
  seriesBarCedillo: any[]=[];
  seriesTempCedillo: any[]=[];
  seriesWindChillCedillo:any[]=[];
  seriesHeatIndexCedillo:any[]=[];
  seriesDewPointCedillo: any[]=[];
  seriesWetBulbCedillo: any[]=[];
  seriesRainYearCedillo: any[]=[];
  seriesRainMonthCedillo: any[]=[];
  seriesRainStormCedillo: any[]=[];
  seriesRainRateCedillo: any[]=[];
  seriesRainDailyCedillo: any[]=[];

  seriesTempInValenciaA: any[]=[];
  seriesHumInValenciaA: any[]=[];
  seriesBarValenciaA: any[]=[];
  seriesTempValenciaA: any[]=[];
  seriesWindChillValenciaA:any[]=[];
  seriesHeatIndexValenciaA:any[]=[];
  seriesDewPointValenciaA: any[]=[];
  seriesWetBulbValenciaA: any[]=[];
  seriesRainYearValenciaA: any[]=[];
  seriesRainMonthValenciaA: any[]=[];
  seriesRainStormValenciaA: any[]=[];
  seriesRainRateValenciaA: any[]=[];
  seriesRainDailyValenciaA: any[]=[];

  datosGrafica:any[] = []
  datosGraficaBar:any[] = []

  datosGraficaBarChart:any[]=[];
  datosGraficaBarChart2:any[]=[];
  datosGraficaBarChart3:any[]=[];
  datosGraficaBarChart4:any[]=[];
  message: any;

  selectedValue:any = 'badajoz';

  constructor(private weatherService: WeatherService) {
  }

  ngOnDestroy(): void {
    if(this.intervalBadajoz){clearInterval(this.intervalBadajoz)}
    if(this.intervalZarzaLaMayor){clearInterval(this.intervalZarzaLaMayor)}
    if(this.intervalCedillo){clearInterval(this.intervalCedillo)}
    if(this.intervalValenciaA) clearInterval(this.intervalValenciaA);
  }

  ngOnInit(): void {
    this.onChangeEstacion();
  }


  obtenerDatosGraficaLocalStorageBadajoz(){
    let seriesJsonLocalStorageTempIn = JSON.parse(localStorage.getItem('seriesTempInBadajoz')!)
    this.seriesTempInBadajoz = seriesJsonLocalStorageTempIn

    let seriesJsonLocalStorageBar = JSON.parse(localStorage.getItem('seriesBarBadajoz')!)
    this.seriesBarBadajoz = seriesJsonLocalStorageBar

    this.datosGrafica =
    [
      {
        "name": "Temperatura",
        "series": this.seriesTempInBadajoz
      }
    ]

    this.datosGraficaBar =
    [
      {
        "name": "Barometro (" + this.seriesBarBadajoz[this.seriesBarBadajoz.length-1].value + " hPa)",
        "series": this.seriesBarBadajoz
      }
    ]
  }
  obtenerDatosGraficaLocalStorageZarza(){
    let seriesJsonLocalStorageTempIn = JSON.parse(localStorage.getItem('seriesTempInZarza')!)
    this.seriesTempInZarza = seriesJsonLocalStorageTempIn

    let seriesJsonLocalStorageBar = JSON.parse(localStorage.getItem('seriesBarZarza')!)
    this.seriesBarZarza = seriesJsonLocalStorageBar

    this.datosGrafica =
    [
      {
        "name": "Temperatura",
        "series": this.seriesTempInZarza
      }
    ]
    this.datosGraficaBar =
    [
      {
        "name": "Barometro (" + this.seriesBarZarza[this.seriesBarZarza.length-1].value + " hPa)",
        "series": this.seriesBarZarza
      }
    ]
  }
  obtenerDatosGraficaLocalStorageValenciaA(){
    let seriesJsonLocalStorageTempIn = JSON.parse(localStorage.getItem('seriesTempInValenciaA')!)
    this.seriesTempInValenciaA = seriesJsonLocalStorageTempIn

    let seriesJsonLocalStorageBar = JSON.parse(localStorage.getItem('seriesBarValenciaA')!)
    this.seriesBarValenciaA = seriesJsonLocalStorageBar

    this.datosGrafica =
    [
      {
        "name": "Temperatura",
        "series": this.seriesTempInValenciaA
      }
    ]

    this.datosGraficaBar =
    [
      {
        "name": "Barometro (" + this.seriesBarValenciaA[this.seriesBarValenciaA.length-1].value + " hPa)",
        "series": this.seriesBarValenciaA
      }
    ]
  }

  convertirFaToCentigrados(faValue: number): number{
      if(faValue){
        return Number(((faValue - 32) * 5/9).toFixed(2))
      } else {
        return Number((-32 * 5/9).toFixed(2))
      }
   }

  obtenerDatosToGraficaBarrasValenciaA(){
    let seriesJsonLocalStorageTempIn = JSON.parse(localStorage.getItem('seriesTempInValenciaA')!)
    this.seriesTempInValenciaA = seriesJsonLocalStorageTempIn

    let seriesJsonLocalStorageHumIn = JSON.parse(localStorage.getItem('seriesHumInValenciaA')!)
    this.seriesHumInValenciaA = seriesJsonLocalStorageHumIn

    let seriesJsonLocalStorageTemp = JSON.parse(localStorage.getItem('seriesTempValenciaA')!)
    this.seriesTempValenciaA = seriesJsonLocalStorageTemp

    let seriesJsonLocalStorageWindChill = JSON.parse(localStorage.getItem('seriesWindChillValenciaA')!)
    this.seriesWindChillValenciaA = seriesJsonLocalStorageWindChill

    let seriesJsonLocalStorageHeatIndex= JSON.parse(localStorage.getItem('seriesHeatIndexValenciaA')!)
    this.seriesHeatIndexValenciaA = seriesJsonLocalStorageHeatIndex

    let seriesJsonLocalStorageDewPoint= JSON.parse(localStorage.getItem('seriesDewPointValenciaA')!)
    this.seriesDewPointValenciaA = seriesJsonLocalStorageDewPoint

    let seriesJsonLocalStorageWetBulb= JSON.parse(localStorage.getItem('seriesWetBulbValenciaA')!)
    this.seriesWetBulbValenciaA = seriesJsonLocalStorageWetBulb

    this.datosGraficaBarChart =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Temperatura C?? interior (" + this.convertirFaToCentigrados(this.seriesTempInValenciaA[this.seriesTempInValenciaA?.length - 1]?.value) + ")" ,
            "value": this.convertirFaToCentigrados(this.seriesTempInValenciaA[this.seriesTempInValenciaA?.length - 1]?.value)
          },
          {
            "name": "Humedad % interior ("+this.seriesHumInValenciaA[this.seriesHumInValenciaA?.length - 1]?.value+")",
            "value": this.seriesHumInValenciaA[this.seriesHumInValenciaA?.length - 1]?.value
          }
        ]
      },
    ]

    this.datosGraficaBarChart2 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Temperatura exterior C?? (" + this.convertirFaToCentigrados(this.seriesTempValenciaA[this.seriesTempValenciaA?.length - 1]?.value) + ")" ,
            "value": this.convertirFaToCentigrados(this.seriesTempValenciaA[this.seriesTempValenciaA?.length - 1]?.value)
          },
          {
            "name": "Viento fr??o ("+this.convertirFaToCentigrados(this.seriesWindChillValenciaA[this.seriesWindChillValenciaA?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesWindChillValenciaA[this.seriesWindChillValenciaA?.length - 1]?.value)
          },
          {
            "name": "??ndice Calor??fico ("+this.convertirFaToCentigrados(this.seriesHeatIndexValenciaA[this.seriesHeatIndexValenciaA?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesHeatIndexValenciaA[this.seriesHeatIndexValenciaA?.length - 1]?.value)
          },
          {
            "name": "Punto de roc??o ("+this.convertirFaToCentigrados(this.seriesDewPointValenciaA[this.seriesDewPointValenciaA?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesDewPointValenciaA[this.seriesDewPointValenciaA?.length - 1]?.value)
          },
          {
            "name": "Bulbo h??medo ("+this.convertirFaToCentigrados(this.seriesWetBulbValenciaA[this.seriesWetBulbValenciaA?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesWetBulbValenciaA[this.seriesWetBulbValenciaA?.length - 1]?.value)
          },
        ]
      },
    ]
    console.log('this.seriesWetBulbValenciaA', this.seriesWetBulbValenciaA);

  }
  obtenerDatosToGraficaBarrasBadajoz(){
    let seriesJsonLocalStorageTempIn = JSON.parse(localStorage.getItem('seriesTempInBadajoz')!)
    let seriesJsonLocalStorageHumIn = JSON.parse(localStorage.getItem('seriesHumInBadajoz')!)
    this.seriesTempInBadajoz= seriesJsonLocalStorageTempIn
    this.seriesHumInBadajoz = seriesJsonLocalStorageHumIn

    let seriesJsonLocalStorageTemp = JSON.parse(localStorage.getItem('seriesTempBadajoz')!)
    this.seriesTempBadajoz = seriesJsonLocalStorageTemp

    let seriesJsonLocalStorageWindChill = JSON.parse(localStorage.getItem('seriesWindChillBadajoz')!)
    this.seriesWindChillBadajoz = seriesJsonLocalStorageWindChill

    let seriesJsonLocalStorageHeatIndex= JSON.parse(localStorage.getItem('seriesHeatIndexBadajoz')!)
    this.seriesHeatIndexBadajoz = seriesJsonLocalStorageHeatIndex

    let seriesJsonLocalStorageDewPoint= JSON.parse(localStorage.getItem('seriesDewPointBadajoz')!)
    this.seriesDewPointBadajoz = seriesJsonLocalStorageDewPoint

    let seriesJsonLocalStorageWetBulb= JSON.parse(localStorage.getItem('seriesWetBulbBadajoz')!)
    this.seriesWetBulbBadajoz = seriesJsonLocalStorageWetBulb

    let seriesJsonLocalStorageRainYear= JSON.parse(localStorage.getItem('seriesRainYearBadajoz')!)
    this.seriesRainYearBadajoz = seriesJsonLocalStorageRainYear

    let seriesJsonLocalStorageRainMonth= JSON.parse(localStorage.getItem('seriesRainMonthBadajoz')!)
    this.seriesRainMonthBadajoz = seriesJsonLocalStorageRainMonth

    let seriesJsonLocalStorageRainStorm= JSON.parse(localStorage.getItem('seriesRainStormBadajoz')!)
    this.seriesRainStormBadajoz = seriesJsonLocalStorageRainStorm

    let seriesJsonLocalStorageRainRate= JSON.parse(localStorage.getItem('seriesRainRateBadajoz')!)
    this.seriesRainRateBadajoz = seriesJsonLocalStorageRainRate

    let seriesJsonLocalStorageRainDaily= JSON.parse(localStorage.getItem('seriesRainDailyBadajoz')!)
    this.seriesRainDailyBadajoz = seriesJsonLocalStorageRainDaily
    this.datosGraficaBarChart4 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Diario("+this.seriesRainDailyBadajoz[this.seriesRainDailyBadajoz?.length - 1]?.value+" mm)" ,
            "value": this.seriesRainDailyBadajoz[this.seriesRainDailyBadajoz?.length - 1]?.value
          },
          {
            "name": "Tormenta("+this.seriesRainStormBadajoz[this.seriesRainStormBadajoz?.length - 1]?.value+" mm)"  ,
            "value": this.seriesRainStormBadajoz[this.seriesRainStormBadajoz?.length - 1]?.value
          },
          {
            "name": "Tasa("+this.seriesRainRateBadajoz[this.seriesRainRateBadajoz?.length - 1]?.value+" mm)" ,
            "value": this.seriesRainRateBadajoz[this.seriesRainRateBadajoz?.length - 1]?.value
          },
        ]
      },
    ]
    this.datosGraficaBarChart3 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Luvia anual("+this.seriesRainYearBadajoz[this.seriesRainYearBadajoz?.length - 1]?.value+" mm)"  ,
            "value": this.seriesRainYearBadajoz[this.seriesRainYearBadajoz?.length - 1]?.value
          },
          {
            "name": "Luvia mensual("+this.seriesRainMonthBadajoz[this.seriesRainMonthBadajoz?.length - 1]?.value+" mm)" ,
            "value": this.seriesRainMonthBadajoz[this.seriesRainMonthBadajoz?.length - 1]?.value
          },
        ]
      },
    ]
    this.datosGraficaBarChart =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Temperatura C?? interior (" + this.convertirFaToCentigrados(this.seriesTempInBadajoz[this.seriesTempInBadajoz?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesTempInBadajoz[this.seriesTempInBadajoz?.length - 1]?.value)
          },
          {
            "name": "Humedad % interior (" + this.seriesHumInBadajoz[this.seriesHumInBadajoz?.length - 1]?.value+")",
            "value": this.seriesHumInBadajoz[this.seriesHumInBadajoz?.length - 1]?.value
          }
        ]
      },
    ]

    this.datosGraficaBarChart2 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Temperatura exterior C?? (" + this.convertirFaToCentigrados(this.seriesTempBadajoz[this.seriesTempBadajoz?.length - 1]?.value) + ")" ,
            "value": this.convertirFaToCentigrados(this.seriesTempBadajoz[this.seriesTempBadajoz?.length - 1]?.value)
          },
          {
            "name": "Viento fr??o ("+this.convertirFaToCentigrados(this.seriesWindChillBadajoz[this.seriesWindChillBadajoz?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesWindChillBadajoz[this.seriesWindChillBadajoz?.length - 1]?.value)
          },
          {
            "name": "??ndice Calor??fico ("+this.convertirFaToCentigrados(this.seriesHeatIndexBadajoz[this.seriesHeatIndexBadajoz?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesHeatIndexBadajoz[this.seriesHeatIndexBadajoz?.length - 1]?.value)
          },
          {
            "name": "Punto de roc??o ("+this.convertirFaToCentigrados(this.seriesDewPointBadajoz[this.seriesDewPointBadajoz?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesDewPointBadajoz[this.seriesDewPointBadajoz?.length - 1]?.value)
          },
          {
            "name": "Bulbo h??medo ("+this.convertirFaToCentigrados(this.seriesWetBulbBadajoz[this.seriesWetBulbBadajoz?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesWetBulbBadajoz[this.seriesWetBulbBadajoz?.length - 1]?.value)
          },
        ]
      },
    ]

  }

  obtenerDatosToGraficaBarrasZarza(){
    let seriesJsonLocalStorageTempIn = JSON.parse(localStorage.getItem('seriesTempInZarza')!)
    let seriesJsonLocalStorageHumIn = JSON.parse(localStorage.getItem('seriesHumInZarza')!)
    this.seriesTempInZarza= seriesJsonLocalStorageTempIn
    this.seriesHumInZarza = seriesJsonLocalStorageHumIn

    let seriesJsonLocalStorageTemp = JSON.parse(localStorage.getItem('seriesTempZarza')!)
    this.seriesTempZarza = seriesJsonLocalStorageTemp

    let seriesJsonLocalStorageWindChill = JSON.parse(localStorage.getItem('seriesWindChillZarza')!)
    this.seriesWindChillZarza = seriesJsonLocalStorageWindChill

    let seriesJsonLocalStorageHeatIndex= JSON.parse(localStorage.getItem('seriesHeatIndexZarza')!)
    this.seriesHeatIndexZarza = seriesJsonLocalStorageHeatIndex

    let seriesJsonLocalStorageDewPoint= JSON.parse(localStorage.getItem('seriesDewPointZarza')!)
    this.seriesDewPointZarza = seriesJsonLocalStorageDewPoint

    let seriesJsonLocalStorageWetBulb= JSON.parse(localStorage.getItem('seriesWetBulbZarza')!)
    this.seriesWetBulbZarza = seriesJsonLocalStorageWetBulb

    let seriesJsonLocalStorageRainYear= JSON.parse(localStorage.getItem('seriesRainYearZarza')!)
    this.seriesRainYearZarza = seriesJsonLocalStorageRainYear

    let seriesJsonLocalStorageRainMonth= JSON.parse(localStorage.getItem('seriesRainMonthZarza')!)
    this.seriesRainMonthZarza = seriesJsonLocalStorageRainMonth

    let seriesJsonLocalStorageRainStorm= JSON.parse(localStorage.getItem('seriesRainStormZarza')!)
    this.seriesRainStormZarza = seriesJsonLocalStorageRainStorm

    let seriesJsonLocalStorageRainRate= JSON.parse(localStorage.getItem('seriesRainRateZarza')!)
    this.seriesRainRateZarza = seriesJsonLocalStorageRainRate

    let seriesJsonLocalStorageRainDaily= JSON.parse(localStorage.getItem('seriesRainDailyZarza')!)
    this.seriesRainDailyZarza = seriesJsonLocalStorageRainDaily
    this.datosGraficaBarChart4 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Diario("+this.seriesRainDailyZarza[this.seriesRainDailyZarza?.length - 1]?.value+" mm)" ,
            "value": this.seriesRainDailyZarza[this.seriesRainDailyZarza?.length - 1]?.value
          },
          {
            "name": "Tormenta("+this.seriesRainStormZarza[this.seriesRainStormZarza?.length - 1]?.value+" mm)"  ,
            "value": this.seriesRainStormZarza[this.seriesRainStormZarza?.length - 1]?.value
          },
          {
            "name": "Tasa("+this.seriesRainRateZarza[this.seriesRainRateZarza?.length - 1]?.value+" mm)" ,
            "value": this.seriesRainRateZarza[this.seriesRainRateZarza?.length - 1]?.value
          },
        ]
      },
    ]
    this.datosGraficaBarChart3 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Luvia anual("+this.seriesRainYearZarza[this.seriesRainYearZarza?.length - 1]?.value+" mm)" ,
            "value": this.seriesRainYearZarza[this.seriesRainYearZarza?.length - 1]?.value
          },
          {
            "name": "Luvia mensual("+this.seriesRainMonthZarza[this.seriesRainMonthZarza?.length - 1]?.value+" mm)",
            "value": this.seriesRainMonthZarza[this.seriesRainMonthZarza?.length - 1]?.value
          },
        ]
      },
    ]
    this.datosGraficaBarChart =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Temperatura C?? interior ("+this.convertirFaToCentigrados(this.seriesTempInZarza[this.seriesTempInZarza?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesTempInZarza[this.seriesTempInZarza?.length - 1]?.value)
          },
          {
            "name": "Humedad % interior (" + this.seriesHumInZarza[this.seriesHumInZarza?.length - 1]?.value+")",
            "value": this.seriesHumInZarza[this.seriesHumInZarza?.length - 1]?.value
          }
        ]
      },
    ]

    this.datosGraficaBarChart2 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Temperatura exterior C?? (" + this.convertirFaToCentigrados(this.seriesTempZarza[this.seriesTempZarza?.length - 1]?.value) + ")" ,
            "value": this.convertirFaToCentigrados(this.seriesTempZarza[this.seriesTempZarza?.length - 1]?.value)
          },
          {
            "name": "Viento fr??o ("+this.convertirFaToCentigrados(this.seriesWindChillZarza[this.seriesWindChillZarza?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesWindChillZarza[this.seriesWindChillZarza?.length - 1]?.value)
          },
          {
            "name": "??ndice Calor??fico ("+this.convertirFaToCentigrados(this.seriesHeatIndexZarza[this.seriesHeatIndexZarza?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesHeatIndexZarza[this.seriesHeatIndexZarza?.length - 1]?.value)
          },
          {
            "name": "Punto de roc??o ("+this.convertirFaToCentigrados(this.seriesDewPointZarza[this.seriesDewPointZarza?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesDewPointZarza[this.seriesDewPointZarza?.length - 1]?.value)
          },
          {
            "name": "Bulbo h??medo ("+this.convertirFaToCentigrados(this.seriesWetBulbZarza[this.seriesWetBulbZarza?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesWetBulbZarza[this.seriesWetBulbZarza?.length - 1]?.value)
          },
        ]
      },
    ]
  }
  obtenerDatosGraficaLocalStorageCedillo(){
    let seriesJsonLocalStorageTempIn = JSON.parse(localStorage.getItem('seriesTempInCedillo')!)
    this.seriesTempInCedillo = seriesJsonLocalStorageTempIn

    this.datosGrafica =
    [
      {
        "name": "Temperatura",
        "series": this.seriesTempInCedillo
      }
    ]
  }

  obtenerDatosToGraficaBarrasCedillo(){
    let seriesJsonLocalStorageTempIn = JSON.parse(localStorage.getItem('seriesTempInCedillo')!)
    let seriesJsonLocalStorageHumIn = JSON.parse(localStorage.getItem('seriesHumInCedillo')!)
    this.seriesTempInCedillo= seriesJsonLocalStorageTempIn
    this.seriesHumInCedillo = seriesJsonLocalStorageHumIn

    let seriesJsonLocalStorageTemp = JSON.parse(localStorage.getItem('seriesTempCedillo')!)
    this.seriesTempCedillo = seriesJsonLocalStorageTemp

    let seriesJsonLocalStorageWindChill = JSON.parse(localStorage.getItem('seriesWindChillCedillo')!)
    this.seriesWindChillCedillo = seriesJsonLocalStorageWindChill

    let seriesJsonLocalStorageHeatIndex= JSON.parse(localStorage.getItem('seriesHeatIndexCedillo')!)
    this.seriesHeatIndexCedillo = seriesJsonLocalStorageHeatIndex

    let seriesJsonLocalStorageDewPoint= JSON.parse(localStorage.getItem('seriesDewPointCedillo')!)
    this.seriesDewPointCedillo = seriesJsonLocalStorageDewPoint

    let seriesJsonLocalStorageWetBulb= JSON.parse(localStorage.getItem('seriesWetBulbCedillo')!)
    this.seriesWetBulbCedillo = seriesJsonLocalStorageWetBulb

    let seriesJsonLocalStorageRainYear= JSON.parse(localStorage.getItem('seriesRainYearCedillo')!)
    this.seriesRainYearCedillo = seriesJsonLocalStorageRainYear

    let seriesJsonLocalStorageRainMonth= JSON.parse(localStorage.getItem('seriesRainMonthCedillo')!)
    this.seriesRainMonthCedillo = seriesJsonLocalStorageRainMonth

    let seriesJsonLocalStorageRainStorm= JSON.parse(localStorage.getItem('seriesRainStormCedillo')!)
    this.seriesRainStormCedillo = seriesJsonLocalStorageRainStorm

    let seriesJsonLocalStorageRainRate= JSON.parse(localStorage.getItem('seriesRainRateCedillo')!)
    this.seriesRainRateCedillo = seriesJsonLocalStorageRainRate

    let seriesJsonLocalStorageRainDaily= JSON.parse(localStorage.getItem('seriesRainDailyCedillo')!)
    this.seriesRainDailyCedillo = seriesJsonLocalStorageRainDaily

    this.datosGraficaBarChart4 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Diario("+this.seriesRainDailyCedillo[this.seriesRainDailyCedillo?.length - 1]?.value+" mm)" ,
            "value": this.seriesRainDailyCedillo[this.seriesRainDailyCedillo?.length - 1]?.value
          },
          {
            "name": "Tormenta("+this.seriesRainStormCedillo[this.seriesRainStormCedillo?.length - 1]?.value+" mm)"  ,
            "value": this.seriesRainStormCedillo[this.seriesRainStormCedillo?.length - 1]?.value
          },
          {
            "name": "Tasa("+this.seriesRainRateCedillo[this.seriesRainRateCedillo?.length - 1]?.value+" mm)" ,
            "value": this.seriesRainRateCedillo[this.seriesRainRateCedillo?.length - 1]?.value
          },
        ]
      },
    ]
    this.datosGraficaBarChart3 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Luvia anual("+this.seriesRainYearCedillo[this.seriesRainYearCedillo?.length - 1]?.value+" mm)" ,
            "value": this.seriesRainYearCedillo[this.seriesRainYearCedillo?.length - 1]?.value
          },
          {
            "name": "Luvia mensual("+this.seriesRainMonthCedillo[this.seriesRainMonthCedillo?.length - 1]?.value+" mm)",
            "value": this.seriesRainMonthCedillo[this.seriesRainMonthCedillo?.length - 1]?.value
          },
        ]
      },
    ]

    this.datosGraficaBarChart =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Temperatura C?? interior (" + this.convertirFaToCentigrados(this.seriesTempInCedillo[this.seriesTempInCedillo?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesTempInCedillo[this.seriesTempInCedillo?.length - 1]?.value)
          },
          {
            "name": "Humedad % interior(" + this.seriesHumInCedillo[this.seriesHumInCedillo?.length - 1]?.value + ")",
            "value": this.seriesHumInCedillo[this.seriesHumInCedillo?.length - 1]?.value
          }
        ]
      },
    ]

    this.datosGraficaBarChart2 =
    [
      {
        "name": "",
        "series": [
          {
            "name": "Temperatura exterior C?? (" + this.convertirFaToCentigrados(this.seriesTempZarza[this.seriesTempZarza?.length - 1]?.value) + ")" ,
            "value": this.convertirFaToCentigrados(this.seriesTempCedillo[this.seriesTempZarza?.length - 1]?.value)
          },
          {
            "name": "Viento fr??o ("+this.convertirFaToCentigrados(this.seriesWindChillCedillo[this.seriesWindChillCedillo?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesWindChillCedillo[this.seriesWindChillCedillo?.length - 1]?.value)
          },
          {
            "name": "??ndice Calor??fico ("+this.convertirFaToCentigrados(this.seriesHeatIndexCedillo[this.seriesHeatIndexCedillo?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesHeatIndexCedillo[this.seriesHeatIndexCedillo?.length - 1]?.value)
          },
          {
            "name": "Punto de roc??o ("+this.convertirFaToCentigrados(this.seriesDewPointCedillo[this.seriesDewPointCedillo?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesDewPointCedillo[this.seriesDewPointCedillo?.length - 1]?.value)
          },
          {
            "name": "Bulbo h??medo ("+this.convertirFaToCentigrados(this.seriesWetBulbCedillo[this.seriesWetBulbCedillo?.length - 1]?.value)+")",
            "value": this.convertirFaToCentigrados(this.seriesWetBulbCedillo[this.seriesWetBulbCedillo?.length - 1]?.value)
          },
        ]
      },
    ]
  }

  guardarLocalStorageTempInBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesTempInBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesTempInBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesTempInBadajoz', JSON.stringify(a));
  }

  guardarLocalStorageTempBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesTempBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesTempBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesTempBadajoz', JSON.stringify(a));
  }
  guardarLocalStorageWindChillBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWindChillBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesWindChillBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWindChillBadajoz', JSON.stringify(a));
  }
  guardarLocalStorageHeatIndexBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHeatIndexBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesHeatIndexBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHeatIndexBadajoz', JSON.stringify(a));
  }

  guardarLocalStorageDewPointBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesDewPointBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesDewPointBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesDewPointBadajoz', JSON.stringify(a));
  }

  guardarLocalStorageWetBulbBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWetBulbBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesWetBulbBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWetBulbBadajoz', JSON.stringify(a));
  }

  guardarLocalStorageHumInBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHumInBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesHumInBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHumInBadajoz', JSON.stringify(a));
  }

  guardarLocalStorageBarBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesBarBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesBarBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesBarBadajoz', JSON.stringify(a));
  }

  guardarLocalStorageRainMonthBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainMonthBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesRainMonthBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainMonthBadajoz', JSON.stringify(a));
  }

  guardarLocalStorageRainStormBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainStormBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesRainStormBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainStormBadajoz', JSON.stringify(a));
  }
  guardarLocalStorageRainRateBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainRateBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesRainRateBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainRateBadajoz', JSON.stringify(a));
  }
  guardarLocalStorageRainDailyBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainDailyBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesRainDailyBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainDailyBadajoz', JSON.stringify(a));
  }

  guardarLocalStorageRainYearBadajoz(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainYearBadajoz')){
      a = JSON.parse(localStorage.getItem('seriesRainYearBadajoz')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainYearBadajoz', JSON.stringify(a));
  }

  guardarLocalStorageTempInZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesTempInZarza')){
      a = JSON.parse(localStorage.getItem('seriesTempInZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesTempInZarza', JSON.stringify(a));
  }

  guardarLocalStorageTempZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesTempZarza')){
      a = JSON.parse(localStorage.getItem('seriesTempZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesTempZarza', JSON.stringify(a));
  }
  guardarLocalStorageWindChillZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWindChillZarza')){
      a = JSON.parse(localStorage.getItem('seriesWindChillZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWindChillZarza', JSON.stringify(a));
  }
  guardarLocalStorageHeatIndexZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHeatIndexZarza')){
      a = JSON.parse(localStorage.getItem('seriesHeatIndexZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHeatIndexZarza', JSON.stringify(a));
  }

  guardarLocalStorageDewPointZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesDewPointZarza')){
      a = JSON.parse(localStorage.getItem('seriesDewPointZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesDewPointZarza', JSON.stringify(a));
  }

  guardarLocalStorageWetBulbZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWetBulbZarza')){
      a = JSON.parse(localStorage.getItem('seriesWetBulbZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWetBulbZarza', JSON.stringify(a));
  }

  guardarLocalStorageHumInZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHumInZarza')){
      a = JSON.parse(localStorage.getItem('seriesHumInZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHumInZarza', JSON.stringify(a));
  }

  guardarLocalStorageBarZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesBarZarza')){
      a = JSON.parse(localStorage.getItem('seriesBarZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesBarZarza', JSON.stringify(a));
  }

  guardarLocalStorageRainMonthZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainMonthZarza')){
      a = JSON.parse(localStorage.getItem('seriesRainMonthZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainMonthZarza', JSON.stringify(a));
  }


  guardarLocalStorageRainYearZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainYearZarza')){
      a = JSON.parse(localStorage.getItem('seriesRainYearZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainYearZarza', JSON.stringify(a));
  }

  guardarLocalStorageRainStormZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainStormZarza')){
      a = JSON.parse(localStorage.getItem('seriesRainStormZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainStormZarza', JSON.stringify(a));
  }
  guardarLocalStorageRainRateZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainRateZarza')){
      a = JSON.parse(localStorage.getItem('seriesRainRateZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainRateZarza', JSON.stringify(a));
  }
  guardarLocalStorageRainDailyZarza(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainDailyZarza')){
      a = JSON.parse(localStorage.getItem('seriesRainDailyZarza')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainDailyZarza', JSON.stringify(a));
  }

  guardarLocalStorageTempInValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesTempInValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesTempInValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesTempInValenciaA', JSON.stringify(a));
  }

  guardarLocalStorageTempValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesTempValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesTempValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesTempValenciaA', JSON.stringify(a));
  }
  guardarLocalStorageWindChillValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWindChillValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesWindChillValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWindChillValenciaA', JSON.stringify(a));
  }
  guardarLocalStorageHeatIndexValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHeatIndexValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesHeatIndexValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHeatIndexValenciaA', JSON.stringify(a));
  }

  guardarLocalStorageDewPointValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesDewPointValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesDewPointValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesDewPointValenciaA', JSON.stringify(a));
  }

  guardarLocalStorageWetBulbValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWetBulbValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesWetBulbValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWetBulbValenciaA', JSON.stringify(a));
  }

  guardarLocalStorageBarValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesBarValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesBarValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesBarValenciaA', JSON.stringify(a));
  }

  guardarLocalStorageHumInValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHumInValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesHumInValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHumInValenciaA', JSON.stringify(a));
  }

  guardarLocalStorageRainMonthValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainMonthValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesRainMonthValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainMonthValenciaA', JSON.stringify(a));
  }


  guardarLocalStorageRainYearValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainYearValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesRainYearValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainYearValenciaA', JSON.stringify(a));
  }

  guardarLocalStorageRainStormValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainStormValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesRainStormValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainStormValenciaA', JSON.stringify(a));
  }
  guardarLocalStorageRainRateValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainRateValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesRainRateValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainRateValenciaA', JSON.stringify(a));
  }
  guardarLocalStorageRainDailyValenciaA(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainDailyValenciaA')){
      a = JSON.parse(localStorage.getItem('seriesRainDailyValenciaA')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainDailyValenciaA', JSON.stringify(a));
  }

  guardarLocalStorageTempInCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesTempInCedillo')){
      a = JSON.parse(localStorage.getItem('seriesTempInCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesTempInCedillo', JSON.stringify(a));
  }

  guardarLocalStorageTempCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesTempCedillo')){
      a = JSON.parse(localStorage.getItem('seriesTempCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesTempCedillo', JSON.stringify(a));
  }
  guardarLocalStorageWindChillCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWindChillCedillo')){
      a = JSON.parse(localStorage.getItem('seriesWindChillCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWindChillCedillo', JSON.stringify(a));
  }
  guardarLocalStorageHeatIndexCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHeatIndexCedillo')){
      a = JSON.parse(localStorage.getItem('seriesHeatIndexCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHeatIndexCedillo', JSON.stringify(a));
  }

  guardarLocalStorageDewPointCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesDewPointCedillo')){
      a = JSON.parse(localStorage.getItem('seriesDewPointCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesDewPointCedillo', JSON.stringify(a));
  }

  guardarLocalStorageWetBulbCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesWetBulbCedillo')){
      a = JSON.parse(localStorage.getItem('seriesWetBulbCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesWetBulbCedillo', JSON.stringify(a));
  }

  guardarLocalStorageHumInCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesHumInCedillo')){
      a = JSON.parse(localStorage.getItem('seriesHumInCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesHumInCedillo', JSON.stringify(a));
  }
  guardarLocalStorageBarCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesBarCedillo')){
      a = JSON.parse(localStorage.getItem('seriesBarCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesBarCedillo', JSON.stringify(a));
  }

  guardarLocalStorageRainMonthCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainMonthCedillo')){
      a = JSON.parse(localStorage.getItem('seriesRainMonthCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainMonthCedillo', JSON.stringify(a));
  }


  guardarLocalStorageRainYearCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainYearVCedillo')){
      a = JSON.parse(localStorage.getItem('seriesRainYearCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainYearCedillo', JSON.stringify(a));
  }

  guardarLocalStorageRainStormCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainStormCedillo')){
      a = JSON.parse(localStorage.getItem('seriesRainStormCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainStormCedillo', JSON.stringify(a));
  }
  guardarLocalStorageRainRateCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainRateCedillo')){
      a = JSON.parse(localStorage.getItem('seriesRainRateCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainRateCedillo', JSON.stringify(a));
  }
  guardarLocalStorageRainDailyCedillo(serieVal:any){
    var a = []
    if(localStorage.getItem('seriesRainDailyCedillo')){
      a = JSON.parse(localStorage.getItem('seriesRainDailyCedillo')!)
    }
    while(a.length >= 5){
      a.shift()
    }
    a.push(serieVal);
    localStorage.setItem('seriesRainDailyCedillo', JSON.stringify(a));
  }

  obtenerBadajozDatos() {
    console.log('obtenerBadajozDatos');

    // Obtenemos los sensores
    this.weatherService.getEstacionBadajoz().subscribe(data => {
      if(data.message){
        this.message = data.message
      }
      this.estacionBadajoz.sensor0 = data?.sensors ? data?.sensors[0]?.data[0]: null;
      this.estacionBadajoz.sensor1 = data?.sensors ? data?.sensors[1]?.data[0]: null;
      this.estacionBadajoz.sensor2 = data?.sensors ? data?.sensors[2]?.data[0]: null;
      this.estacionBadajoz.sensor3 = data?.sensors ? data?.sensors[3]?.data[0]: null;

      let  date = new Date().toISOString();
      date = moment(date).format('HH:mm:ss')

      this.guardarLocalStorageTempInBadajoz({
        "name": date,
        "value": this.estacionBadajoz.sensor1?.temp_in ?? 0
      })
      this.guardarLocalStorageTempBadajoz({
        "name": date,
        "value": this.estacionBadajoz.sensor0?.temp ?? 0
      })
      this.guardarLocalStorageWindChillBadajoz({
        "name": date,
        "value": this.estacionBadajoz.sensor0?.wind_chill ?? 0
      })
      this.guardarLocalStorageHeatIndexBadajoz({
        "name": date,
        "value": this.estacionBadajoz.sensor0?.heat_index ?? 0
      })
      this.guardarLocalStorageDewPointBadajoz({
        "name": date,
        "value": this.estacionBadajoz.sensor0?.dew_point ?? 0
      })
      this.guardarLocalStorageWetBulbBadajoz({
        "name": date,
        "value": this.estacionBadajoz.sensor0?.wet_bulb ?? 0
      })
      this.guardarLocalStorageHumInBadajoz({
        "name": date,
        "value": this.estacionBadajoz.sensor1?.hum_in ?? 0
      })
    console.log('this.estacionBadajoz', this.estacionBadajoz);

      this.guardarLocalStorageBarBadajoz({
        "name": date,
        "value": this.convertirPulgadasMercurioToHPa(this.estacionBadajoz.sensor2?.bar_absolute) ?? 0
      })

      this.guardarLocalStorageRainYearBadajoz({
        "name": date,
        "value":this.estacionBadajoz.sensor0.rainfall_year_mm
      })

      this.guardarLocalStorageRainMonthBadajoz({
        "name": date,
        "value":this.estacionBadajoz.sensor0.rainfall_monthly_mm
      })
      this.guardarLocalStorageRainStormBadajoz({
        "name": date,
        "value":this.estacionBadajoz.sensor0.rain_storm_mm
      })
      this.guardarLocalStorageRainRateBadajoz({
        "name": date,
        "value":this.estacionBadajoz.sensor0.rain_rate_hi_mm
      })
      this.guardarLocalStorageRainDailyBadajoz({
        "name": date,
        "value":this.estacionBadajoz.sensor0.rainfall_daily_mm
      })

      this.obtenerDatosGraficaLocalStorageBadajoz();
      this.obtenerDatosToGraficaBarrasBadajoz();
    })
  }

  obtenerZarzaDatos() {
    console.log('obtenerZarzaDatos');

    // Obtenemos los sensores
    this.weatherService.getEstacionZarzaLaMayor().subscribe(data => {
      if(data.message){
        this.message = data.message
      }
      this.estacionZarzaLaMayor.sensor0 = data?.sensors ? data?.sensors[3]?.data[0]: null;
      this.estacionZarzaLaMayor.sensor1 = data?.sensors ? data?.sensors[2]?.data[0]: null;
      this.estacionZarzaLaMayor.sensor2 = data?.sensors ? data?.sensors[1]?.data[0]: null;
      this.estacionZarzaLaMayor.sensor3 = data?.sensors ? data?.sensors[0]?.data[0]: null;

      let  date = new Date().toISOString();
      date = moment(date).format('HH:mm:ss')

      this.guardarLocalStorageTempInZarza({
        "name": date,
        "value": this.estacionZarzaLaMayor.sensor1.temp_in ?? 0
      })
      this.guardarLocalStorageTempZarza({
        "name": date,
        "value": this.estacionZarzaLaMayor.sensor0?.temp ?? 0
      })
      this.guardarLocalStorageWindChillZarza({
        "name": date,
        "value": this.estacionZarzaLaMayor.sensor0?.wind_chill ?? 0
      })
      this.guardarLocalStorageHeatIndexZarza({
        "name": date,
        "value": this.estacionZarzaLaMayor.sensor0?.heat_index ?? 0
      })
      this.guardarLocalStorageDewPointZarza({
        "name": date,
        "value": this.estacionZarzaLaMayor.sensor0?.dew_point ?? 0
      })
      this.guardarLocalStorageWetBulbZarza({
        "name": date,
        "value": this.estacionZarzaLaMayor.sensor0?.wet_bulb ?? 0
      })
      this.guardarLocalStorageHumInZarza({
        "name": date,
        "value": this.estacionZarzaLaMayor.sensor1.hum_in ?? 0
      })
      this.guardarLocalStorageBarZarza({
        "name": date,
        "value": this.convertirPulgadasMercurioToHPa(this.estacionZarzaLaMayor.sensor2?.bar_absolute) ?? 0
      })
      this.guardarLocalStorageRainYearZarza({
        "name": date,
        "value":this.estacionZarzaLaMayor.sensor0.rainfall_year_mm
      })
      this.guardarLocalStorageRainMonthZarza({
        "name": date,
        "value":this.estacionZarzaLaMayor.sensor0.rainfall_monthly_mm
      })

      this.guardarLocalStorageRainStormZarza({
        "name": date,
        "value":this.estacionZarzaLaMayor.sensor0.rain_storm_mm
      })
      this.guardarLocalStorageRainRateZarza({
        "name": date,
        "value":this.estacionZarzaLaMayor.sensor0.rain_rate_hi_mm
      })
      this.guardarLocalStorageRainDailyZarza({
        "name": date,
        "value":this.estacionZarzaLaMayor.sensor0.rainfall_daily_mm
      })
      this.obtenerDatosGraficaLocalStorageZarza();
      this.obtenerDatosToGraficaBarrasZarza()
    })
  }

  convertirPulgadasMercurioToHPa(pulgadasMercurio: number):number {
    return Number((pulgadasMercurio * 33.86).toFixed(2));
  }

  obtenerValenciaADatos() {

    console.log('obtenerValenciaADatos');

    // Obtenemos los sensores
    this.weatherService.getValenciaAlcantara().subscribe(data => {
      if(data.message){
        this.message = data.message
      }
      this.estacionValenciaA.sensor0 = data?.sensors ? data?.sensors[3]?.data[0]: null;
      this.estacionValenciaA.sensor1 = data?.sensors ? data?.sensors[2]?.data[0]: null;
      this.estacionValenciaA.sensor2 = data?.sensors ? data?.sensors[1]?.data[0]: null;
      this.estacionValenciaA.sensor3 = data?.sensors ? data?.sensors[0]?.data[0]: null;

      let  date = new Date().toISOString();
      date = moment(date).format('HH:mm:ss')


      this.guardarLocalStorageTempInValenciaA({
        "name": date,
        "value": this.estacionValenciaA.sensor1.temp_in ?? 0
      })
      this.guardarLocalStorageTempValenciaA({
        "name": date,
        "value": this.estacionValenciaA.sensor0?.temp ?? 0
      })
      this.guardarLocalStorageWindChillValenciaA({
        "name": date,
        "value": this.estacionValenciaA.sensor0?.wind_chill ?? 0
      })
      this.guardarLocalStorageHeatIndexValenciaA({
        "name": date,
        "value": this.estacionValenciaA.sensor0?.heat_index ?? 0
      })
      this.guardarLocalStorageDewPointValenciaA({
        "name": date,
        "value": this.estacionValenciaA.sensor0?.dew_point ?? 0
      })
      this.guardarLocalStorageWetBulbValenciaA({
        "name": date,
        "value": this.estacionValenciaA.sensor0?.wet_bulb ?? 0
      })
      this.guardarLocalStorageHumInValenciaA({
        "name": date,
        "value": this.estacionValenciaA.sensor1.hum_in ?? 0
      })
      this.guardarLocalStorageBarValenciaA({
        "name": date,
        "value": this.convertirPulgadasMercurioToHPa(this.estacionValenciaA.sensor2?.bar_absolute) ?? 0
      })
      this.guardarLocalStorageRainYearValenciaA({
        "name": date,
        "value":this.estacionValenciaA.sensor0.rainfall_year_mm
      })
      this.guardarLocalStorageRainMonthValenciaA({
        "name": date,
        "value":this.estacionValenciaA.sensor0.rainfall_monthly_mm
      })


      this.guardarLocalStorageRainStormValenciaA({
        "name": date,
        "value":this.estacionValenciaA.sensor0.rain_storm_mm
      })
      this.guardarLocalStorageRainRateValenciaA({
        "name": date,
        "value":this.estacionValenciaA.sensor0.rain_rate_hi_mm
      })
      this.guardarLocalStorageRainDailyValenciaA({
        "name": date,
        "value":this.estacionValenciaA.sensor0.rainfall_daily_mm
      })

      this.obtenerDatosGraficaLocalStorageValenciaA();
      this.obtenerDatosToGraficaBarrasValenciaA();
    })
  }
  obtenerCedilloDatos() {
    console.log('obtenerCedilloDatos');

    // Obtenemos los sensores
    this.weatherService.getEstacionCedillo().subscribe(data => {
      if(data.message){
        this.message = data.message
      }
      this.estacionCedillo.sensor0 = data?.sensors ? data?.sensors[3]?.data[0]: null;
      this.estacionCedillo.sensor1 = data?.sensors ? data?.sensors[2]?.data[0]: null;
      this.estacionCedillo.sensor2 = data?.sensors ? data?.sensors[1]?.data[0]: null;
      this.estacionCedillo.sensor3 = data?.sensors ? data?.sensors[0]?.data[0]: null;

      let  date = new Date().toISOString();
      date = moment(date).format('HH:mm:ss')


      this.guardarLocalStorageTempInCedillo({
        "name": date,
        "value": this.estacionCedillo.sensor1.temp_in ?? 0
      })
      this.guardarLocalStorageTempCedillo({
        "name": date,
        "value": this.estacionCedillo.sensor0?.temp ?? 0
      })
      this.guardarLocalStorageWindChillCedillo({
        "name": date,
        "value": this.estacionCedillo.sensor0?.wind_chill ?? 0
      })
      this.guardarLocalStorageHeatIndexCedillo({
        "name": date,
        "value": this.estacionCedillo.sensor0?.heat_index ?? 0
      })

      this.guardarLocalStorageDewPointCedillo({
        "name": date,
        "value": this.estacionCedillo.sensor0?.dew_point ?? 0
      })

      this.guardarLocalStorageWetBulbCedillo({
        "name": date,
        "value": this.estacionCedillo.sensor0?.wet_bulb ?? 0
      })
      this.guardarLocalStorageHumInCedillo({
        "name": date,
        "value": this.estacionCedillo.sensor1.hum_in ?? 0
      })
      this.guardarLocalStorageBarCedillo({
        "name": date,
        "value": this.convertirPulgadasMercurioToHPa(this.estacionCedillo.sensor2?.bar_absolute) ?? 0
      })
      this.guardarLocalStorageRainYearCedillo({
        "name": date,
        "value":this.estacionCedillo.sensor0.rainfall_year_mm
      })
      this.guardarLocalStorageRainMonthCedillo({
        "name": date,
        "value":this.estacionCedillo.sensor0.rainfall_monthly_mm
      })

      this.guardarLocalStorageRainStormCedillo({
        "name": date,
        "value":this.estacionCedillo.sensor0.rain_storm_mm
      })
      this.guardarLocalStorageRainRateCedillo({
        "name": date,
        "value":this.estacionCedillo.sensor0.rain_rate_hi_mm
      })
      this.guardarLocalStorageRainDailyCedillo({
        "name": date,
        "value":this.estacionCedillo.sensor0.rainfall_daily_mm
      })
      this.obtenerDatosGraficaLocalStorageCedillo();
      this.obtenerDatosToGraficaBarrasCedillo();
    })
  }

  hiloBadajoz(){
    this.obtenerBadajozDatos();
    this.intervalBadajoz = setInterval(() => {
      this.obtenerBadajozDatos();
    }, 5000);
  }

  hiloZarzaLaMayor(){
    this.obtenerZarzaDatos();
    this.intervalZarzaLaMayor = setInterval(() => {
      this.obtenerZarzaDatos();
    }, 5000);
  }

  hiloValenciaA(){
    this.obtenerValenciaADatos();
    this.intervalValenciaA = setInterval(() => {
      this.obtenerValenciaADatos();
    }, 5000);
  }

  hiloCedillo(){
    this.obtenerCedilloDatos();
    this.intervalCedillo = setInterval(() => {
      this.obtenerCedilloDatos();
    }, 5000);
  }

  onChangeEstacion(){
    if(this.selectedValue){
    switch(this.selectedValue){
      case 'zarza':
        if(this.intervalBadajoz){clearInterval(this.intervalBadajoz)}
        if(this.intervalZarzaLaMayor){clearInterval(this.intervalZarzaLaMayor)}
        if(this.intervalCedillo){clearInterval(this.intervalCedillo)}
        if(this.intervalValenciaA) clearInterval(this.intervalValenciaA);
        this.hiloZarzaLaMayor();
        break;
      case 'valenciaA':
        if(this.intervalBadajoz){clearInterval(this.intervalBadajoz)}
        if(this.intervalZarzaLaMayor){clearInterval(this.intervalZarzaLaMayor)}
        if(this.intervalCedillo){clearInterval(this.intervalCedillo)}
        if(this.intervalValenciaA) clearInterval(this.intervalValenciaA);

        this.hiloValenciaA();
        break;
      case 'cedillo':
        if(this.intervalBadajoz){clearInterval(this.intervalBadajoz)}
        if(this.intervalZarzaLaMayor){clearInterval(this.intervalZarzaLaMayor)}
        if(this.intervalCedillo){clearInterval(this.intervalCedillo)}
        if(this.intervalValenciaA) clearInterval(this.intervalValenciaA);

        this.hiloCedillo();
        break;
      case 'badajoz':
        if(this.intervalBadajoz){clearInterval(this.intervalBadajoz)}
        if(this.intervalZarzaLaMayor){clearInterval(this.intervalZarzaLaMayor)}
        if(this.intervalCedillo){clearInterval(this.intervalCedillo)}
        if(this.intervalValenciaA) clearInterval(this.intervalValenciaA);
        this.hiloBadajoz();
        break;
      default:
        break;
      }
    }
  }
}
