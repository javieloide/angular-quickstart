import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-predicciones',
  templateUrl: './predicciones.component.html',
  styleUrls: ['./predicciones.component.css']
})
export class PrediccionesComponent implements OnInit {
  scrappingData: any;
  tbodyTable: any;
  fechasTable: any;
  valoresColumnaTable:any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    //this.getScrappingData();

  }

  getScrappingData(){
    this.weatherService.getScrapping().subscribe(res => {
      console.log(res);
      this.scrappingData = res
      let headers:any[]=this.scrappingData?.dato?.headers;
      let fechas:any[]=this.scrappingData?.textos
      headers.shift();
      fechas.shift();
      this.fechasTable = fechas;
      this.tbodyTable = headers;
      let valoresColumna = this.scrappingData?.dato?.valoresColumna
      for (let index = 0; index < valoresColumna.length; index++) {
        const element = valoresColumna[index];

      }
    })
  }

}
