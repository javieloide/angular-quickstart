import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { FotometroItem } from 'src/app/models/FotometroItem';
import { WeatherService } from 'src/app/services/weather.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import * as moment from 'moment';

@Component({
  selector: 'app-fotometros',
  templateUrl: './fotometros.component.html',
  styleUrls: ['./fotometros.component.css']
})
export class FotometrosComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selectedValue:any = 'zarza';
  fotometroSelected: FotometroItem[]=[];
  displayedColumns:string[] = [];
  itemsGrafica:any[]=[]
  dataSource=new MatTableDataSource<FotometroItem>([]);
  datosGrafica: any;
  loading: boolean;
  disponible: boolean;
  constructor(private weatherService: WeatherService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.onChangeFotometro();
  }

  getFotometroZarza(){
    this.fotometroSelected=[];
    this.itemsGrafica=[];
    this.displayedColumns = [];
    this.weatherService.getFotometroZarzaLaMayor().subscribe(res => {
      this.displayedColumns = ['time', 'battery', 'mag', 'mag_err', 'tamb', 'tsky'];
      for (let index = 0; index < res?.result?.data?.length; index++) {

        const fotoItem:FotometroItem = {
          time: moment(res?.result?.data[index][0]).format('YYYY-MM-DD HH:mm'),
          battery: res?.result?.data[index][1],
          id: res?.result?.data[index][2],
          mag: res?.result?.data[index][3],
          mag_err: res?.result?.data[index][4],
          name: res?.result?.data[index][5],
          signal: res?.result?.data[index][6],
          tamb: res?.result?.data[index][7],
          tsky: res?.result?.data[index][8]
        }
        this.itemsGrafica.push(
          {
            "value":  res?.result?.data[index][3]>=10.5 ? res?.result?.data[index][3] : 0,
            "name": moment(res?.result?.data[index][0]).format('HH:mm')
          }
        )

        this.fotometroSelected.push(fotoItem);
      }
      this.datosGrafica = [
        {
          "name": "Mag",
          "series": this.itemsGrafica
        },
      ]
      console.log('FotometroZarza',this.fotometroSelected);
      this.dataSource.data = this.fotometroSelected;
      this.loading=false
    })
  }

  getFotometroHerreruela(){
    this.fotometroSelected=[];
    this.displayedColumns=[];
    this.itemsGrafica=[];

    this.weatherService.getFotometroHerreruela().subscribe(res => {
      this.displayedColumns = ['time', 'battery', 'mag', 'mag_err', 'tamb', 'tsky'];

      for (let index = 0; index < res?.result?.data?.length; index++) {

        const fotoItem:FotometroItem = {
          time: moment(res?.result?.data[index][0]).format('YYYY-MM-DD HH:mm'),
          battery: res?.result?.data[index][1],
          id: res?.result?.data[index][2],
          mag: res?.result?.data[index][3],
          mag_err: res?.result?.data[index][4],
          name: res?.result?.data[index][5],
          signal: res?.result?.data[index][6],
          tamb: res?.result?.data[index][7],
          tsky: res?.result?.data[index][8]
        }

        this.itemsGrafica.push(
          {
            "value": res?.result?.data[index][3]>=10.5 ? res?.result?.data[index][3] : 0,
            "name": moment(res?.result?.data[index][0]).format('HH:mm')
          }
        )

        this.fotometroSelected.push(fotoItem);
      }

      this.datosGrafica = [
        {
          "name": "Mag",
          "series": this.itemsGrafica
        },
      ]
      console.log('FotometroHerreruela',this.fotometroSelected);
      this.dataSource.data = this.fotometroSelected;
      this.loading=false
    })
  }

  getFotometroValenciaAlcantara(){
    this.fotometroSelected=[];
    this.displayedColumns=[];
    this.itemsGrafica=[];

    this.weatherService.getFotometroValenciaAlcantara().subscribe(res => {
      this.displayedColumns = ['time', 'battery', 'mag', 'mag_err', 'tamb', 'tsky'];

      for (let index = 0; index < res?.result?.data?.length; index++) {
        const fotoItem:FotometroItem = {
          time: moment(res?.result?.data[index][0]).format('YYYY-MM-DD HH:mm'),
          battery: res?.result?.data[index][1],
          id: res?.result?.data[index][2],
          mag: res?.result?.data[index][3],
          mag_err: res?.result?.data[index][4],
          name: res?.result?.data[index][5],
          signal: res?.result?.data[index][6],
          tamb: res?.result?.data[index][7],
          tsky: res?.result?.data[index][8]
        }
        this.itemsGrafica.push(
          {
            "value": res?.result?.data[index][3]>=10.5 ? res?.result?.data[index][3] : 0,
            "name": moment(res?.result?.data[index][0]).format('HH:mm')
          }
        )

        this.fotometroSelected.push(fotoItem);
      }
      this.datosGrafica = [
        {
          "name": "Mag",
          "series": this.itemsGrafica
        },
      ]
      console.log('FotometroValenciaAlcantara',this.fotometroSelected);
      this.dataSource.data = this.fotometroSelected;
      this.loading=false
    })
  }

  getFotometroSantiagoAlcantara(){
    this.fotometroSelected=[];
    this.displayedColumns=[];
    this.itemsGrafica=[];

    this.weatherService.getFotometroSantiagoAlcantara().subscribe(res => {

      this.displayedColumns = ['time', 'battery', 'mag', 'mag_err', 'tamb', 'tsky'];

      console.log('getFotometroSantiagoAlcantara',res)
      for (let index = 0; index < res?.result?.data?.length; index++) {
        console.log(res?.result?.data[index][2]);

        const fotoItem:FotometroItem = {
          time: moment(res?.result?.data[index][0]).format('YYYY-MM-DD HH:mm'),
          battery: res?.result?.data[index][1],
          fail: res?.result?.data[index][2],
          mag: res?.result?.data[index][4],
          mag_err: res?.result?.data[index][5],
          name: res?.result?.data[index][6],
          tamb: res?.result?.data[index][7],
          tsky: res?.result?.data[index][8]
        }
        this.itemsGrafica.push(
          {
            "value":  res?.result?.data[index][4]>=10.5 ? res?.result?.data[index][4] : 0,
            "name": moment(res?.result?.data[index][0]).format('HH:mm')
          }
        )
        this.fotometroSelected.push(fotoItem);
      }
      this.datosGrafica = [
        {
          "name": "Mag",
          "series": this.itemsGrafica
        },
      ]
      console.log('FotometroSantiagoAlcantara',this.fotometroSelected);
      this.dataSource.data = this.fotometroSelected;
      this.loading=false
    })
  }

  getFotometroBadajoz(){
    this.fotometroSelected=[];
    this.displayedColumns=[];
    this.itemsGrafica=[];

    this.weatherService.getFotometroBadajoz().subscribe(res => {
      console.log('getFotometroBadajoz',res);

      this.displayedColumns = ['time', 'battery', 'mag', 'mag_err', 'tamb', 'tsky'];
      for (let index = 0; index < res?.result?.data?.length; index++) {

        const fotoItem:FotometroItem = {
          time: moment(res?.result?.data[index][0]).format('YYYY-MM-DD HH:mm'),
          battery: res?.result?.data[index][1],
          fail: res?.result?.data[index][2],
          id: res?.result?.data[index][3],
          mag: res?.result?.data[index][4],
          mag_err: res?.result?.data[index][5],
          name: res?.result?.data[index][6],
          reset:res?.result?.data[index][7],
          signal: res?.result?.data[index][8],
          tamb: res?.result?.data[index][9],
          tsky: res?.result?.data[index][10]
        }
        this.itemsGrafica.push(
          {
            "value": res?.result?.data[index][4]>=10.5 ? res?.result?.data[index][4] : 0,
            "name": moment(res?.result?.data[index][0]).format('HH:mm')
          }
        )
        this.fotometroSelected.push(fotoItem);
      }
      this.datosGrafica = [
        {
          "name": "Mag",
          "series": this.itemsGrafica
        },
      ]
      console.log('FotometroBadajoz',this.fotometroSelected);
      this.dataSource.data = this.fotometroSelected;
      this.loading=false
    })
  }

  onChangeFotometro(){
    this.loading=true;
    if(this.selectedValue){
      switch(this.selectedValue){
        case 'zarza':
          this.disponible=true;
          this.getFotometroZarza();
        break;
        case 'alcantara':
          this.disponible=false;
        break;
        case 'brozas':
          this.disponible=false;
        break;
        case 'herreruela':
          this.disponible=true;
          this.getFotometroHerreruela();
        break;
        case 'salorino':
          this.disponible=false;
        break;
        case 'membrio':
          this.disponible=false;
        break;
        case 'valenciaA':
          this.disponible=true;
          this.getFotometroValenciaAlcantara();
        break;
        case 'carbajo':
          this.disponible=false;
        break;
        case 'santiagoA':
          this.disponible=true;
          this.getFotometroSantiagoAlcantara();
        break;
        case 'herreraA':
          this.disponible=false;
        break;
        case 'cedillo':
          this.disponible=false;
        break;
        case 'pampilhosa':
          this.disponible=false;
        break;
        case 'badajoz':
          this.disponible=true;
          this.getFotometroBadajoz();
        break;
      }
    }
  }
}
