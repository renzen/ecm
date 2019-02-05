import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApplyNewServiceService {

  private _registerUrl = 'https://www.pldt.com.ph/mobility/dev/enterprisecare_svc/eccareservice.svc/webhttp/'; 

  constructor(private http: HttpClient) { }

  sendInformation(body): Observable<any> {
    var  httpOptions  =  {
    headers:  new  HttpHeaders({
     'Content-Type':  'application/json'
    })
    };
    console.log(this._registerUrl +'|'+ body +'|', httpOptions);
    return this.http.post(this._registerUrl + 'SendInformation/test', body, httpOptions)
    } 

  svc_checkServiceId(serviceId): Observable<any>{
    var  httpOptions  =  {
      headers:  new  HttpHeaders({
       'Content-Type':  'application/json'
      })
      };
      return this.http.post(this._registerUrl + 'SendInformation/test', serviceId, httpOptions)
  }









}
