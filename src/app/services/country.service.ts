import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url='http://localhost:53557/api/Country';
  constructor(private httpclient:HttpClient) { }

  getAllCountries():Observable<Country[]>{
    return this.httpclient.get<Country[]>(this.url);
  }
}
