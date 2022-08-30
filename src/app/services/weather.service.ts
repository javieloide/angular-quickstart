import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl: string = environment.apiUrl
  localApi: string = environment.localApi

  constructor(private http: HttpClient) {

  }

  getData(stationId: number, apiKey:string, unixTimestamp:number, apiSignature:string):Observable<any>{
    const httpOptions = {
 	 	  headers: new HttpHeaders()
	  }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.apiUrl + '/current/' + stationId + '?api-key=' + apiKey + '&t=' + unixTimestamp + '&api-signature=' + apiSignature, httpOptions);
  }

  getDataCustom(){
    const httpOptions = {
 	  	headers: new HttpHeaders()
	  }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');

    return this.http.get<any>(this.localApi+ '/sensors', httpOptions);
  }
}
