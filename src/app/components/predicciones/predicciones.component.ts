import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  selectedValue:any = 'option1';

  zarzaMayorIframeUrl:SafeResourceUrl | undefined;
  displayIframeZarzaMayor = false;

  piedrasAlbasIframeUrl: SafeResourceUrl | undefined;
  displayIframePiedrasAlbas: boolean = false;

  displayIframeAlcantara: boolean = false;
  alcantaraIframeUrl:SafeResourceUrl | undefined;

  displayIframeBrozas: boolean = false;
  brozasIframeUrl:SafeResourceUrl | undefined;

  displayIframeHerreruela: boolean = false;
  herreruelaIframeUrl:SafeResourceUrl | undefined;

  displayIframeSalorino: boolean = false;
  salorinoIframeUrl:SafeResourceUrl | undefined;

  displayIframeMembrio: boolean = false;
  membrioIframeUrl:SafeResourceUrl | undefined;

  displayIframeValenciaAlcantara: boolean = false;
  valenciaAlcantaraIframeUrl:SafeResourceUrl | undefined;

  displayIframeSantiagoAlcantara: boolean = false;
  santiagoAlcantaraIframeUrl:SafeResourceUrl | undefined;

  displayIframeHerreraAlcantara: boolean = false;
  herreraAlcantaraIframeUrl:SafeResourceUrl | undefined;

  displayIframeCedillo: boolean = false;
  cedilloIframeUrl:SafeResourceUrl | undefined;

  displayIframeCarbajo: boolean = false;
  carbajoIframeUrl:SafeResourceUrl | undefined;

  constructor(private weatherService: WeatherService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    //this.getScrappingData();
    this.onOpenIFrameZarzaMayor();
  }

  onOpenIFrameZarzaMayor(){
    this.zarzaMayorIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6284/ca5');

    this.displayIframeZarzaMayor = true;
    this.displayIframePiedrasAlbas = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = false;
  }

  onOpenIFramePiedrasAlbas(){
    this.piedrasAlbasIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6358/ca5');

    this.displayIframePiedrasAlbas = true;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = false;
  }

  onOpenIFrameAlcantara(){
    this.alcantaraIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6493/ca5');

    this.displayIframePiedrasAlbas = false;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = true;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = false;
  }

  onOpenIFrameBrozas(){
    this.brozasIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6470/ca5');

    this.displayIframePiedrasAlbas = false;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = true;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = false;
  }

  onOpenIFrameHerreruela(){
    this.herreruelaIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6408/ca5');

    this.displayIframePiedrasAlbas = false;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = true;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = false;
  }

  onOpenIFrameSalorino(){
    this.salorinoIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6340/ca5');

    this.displayIframePiedrasAlbas = false;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = true;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = false;
  }

  onOpenIFrameMembrio(){
    this.membrioIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6383/ca5');

    this.displayIframePiedrasAlbas = false;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = true;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = false;
  }

  onOpenIFrameValenciaAlcantara(){
    this.valenciaAlcantaraIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6299/ca5');

    this.displayIframePiedrasAlbas = false;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = true;
  }

  onOpenIFrameSantiagoAlcantara(){
    this.santiagoAlcantaraIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6333/ca5');

    this.displayIframePiedrasAlbas = false;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = true;
    this.displayIframeValenciaAlcantara = false;
  }

  onOpenIFrameHerreraAlcantara(){
    this.herreraAlcantaraIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6409/ca5');

    this.displayIframePiedrasAlbas = false;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = false;
    this.displayIframeHerreraAlcantara = true;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = false;
  }

  onOpenIFrameCedillo(){
    this.cedilloIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.tutiempo.net/s-widget/full/6440/ca5');

    this.displayIframePiedrasAlbas = false;
    this.displayIframeZarzaMayor = false;
    this.displayIframeAlcantara = false;
    this.displayIframeBrozas = false;
    this.displayIframeCarbajo = false;
    this.displayIframeCedillo = true;
    this.displayIframeHerreraAlcantara = false;
    this.displayIframeHerreruela = false;
    this.displayIframeMembrio = false;
    this.displayIframeSalorino = false;
    this.displayIframeSantiagoAlcantara = false;
    this.displayIframeValenciaAlcantara = false;
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
