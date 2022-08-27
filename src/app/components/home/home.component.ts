import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';
import * as Crypto from 'crypto-js';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  intervalUpdate: any = null;
  data: any[]=[];
  timer: any;
  @ViewChild(MatPaginator) paginator: any;

  ELEMENT_DATA: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];

  datos:any[] = []

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  constructor(private weatherService: WeatherService) {
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.intervalUpdate = setInterval(() => {
      this.obtenerDatos();
    }, 5000);
  }

  obtenerDatos() {
    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);

    const apiKey = environment.apiKey

    const stationId = 131898;

    const secretKey = environment.secretKey;

    const preSignature = 'api-key'+apiKey+'station-id'+stationId+'t'+timestamp;

    const signature = Crypto.HmacSHA256(preSignature,secretKey)
    var signature_str = signature.toString(Crypto.enc.Hex);

    this.weatherService.getData(stationId,apiKey,timestamp,signature_str).subscribe(data => {
      this.datos = [];
      for (var i = 0; i < data.sensors.length; i++) {
        console.log('Sensor '+i, data.sensors[i].data[0])
        this.datos.push(data.sensors[i].data[0])
      }

    })
  }

}
