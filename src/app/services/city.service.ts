import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../Models/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  url='http://localhost:53557/api/City';
  constructor(private httpclient:HttpClient) { }

  getAllCities():Observable<City[]>{
    return this.httpclient.get<City[]>(this.url);
  }
}