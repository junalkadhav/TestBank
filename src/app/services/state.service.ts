import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../Models/State';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  url='http://localhost:53557/api/States';
  constructor(private httpclient:HttpClient) { }

  getAllStates():Observable<State[]>{
    return this.httpclient.get<State[]>(this.url);
  }
}