import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  localApi: string = environment.localApi

  constructor(private http: HttpClient) {

  }

  getEstacionBadajoz(){
    const httpOptions = {
 	  	headers: new HttpHeaders()
	  }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');

    return this.http.get<any>(this.localApi+ '/sensors-badajoz', httpOptions);
  }
  getEstacionZarzaLaMayor(){
    const httpOptions = {
 	  	headers: new HttpHeaders()
	  }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');

    return this.http.get<any>(this.localApi+ '/sensors-zarza', httpOptions);
  }
  getEstacionCedillo(){
    const httpOptions = {
 	  	headers: new HttpHeaders()
	  }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');

    return this.http.get<any>(this.localApi+ '/sensors-cedillo', httpOptions);
  }

  getValenciaAlcantara(){
    const httpOptions = {
 	  	headers: new HttpHeaders()
	  }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');

    return this.http.get<any>(this.localApi+ '/sensors-valenciaA', httpOptions);
  }


  getScrapping(){
    const httpOptions = {
      headers: new HttpHeaders()
   }

   httpOptions.headers.append('Access-Control-Allow-Origin', '*');
   httpOptions.headers.append('Content-Type', 'application/json');

   return this.http.get<any>(this.localApi+ '/scrap', httpOptions);
  }
}
