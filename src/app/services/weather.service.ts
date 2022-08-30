import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) {

  }

  getData(stationId: number, apiKey:string, unixTimestamp:number, apiSignature:string):Observable<any>{
    //const peticion = 'https://api.weatherlink.com/v2/current/131898?api-key=st19echieqzz9locx4sz17rbfvbupnej&t=1661553055&api-signature=a6dc5603507dc9867559a58c424c45324a2cace87a78efad821f4edaf966b799';
    const httpOptions = {
 	 	headers: new HttpHeaders()
	}

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.apiUrl + '/current/' + stationId + '?api-key=' + apiKey + '&t=' + unixTimestamp + '&api-signature=' + apiSignature, httpOptions);
    //return this.http.get(peticion);
  }
}
