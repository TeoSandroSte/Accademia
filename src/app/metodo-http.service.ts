import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matricole } from './matricole';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetodoHttpService {

  private _url: string = "/assets/db.json";

  getDb(): Observable<Matricole[]> {
    return this.http.get<Matricole[]>(this._url)
  }

  constructor(private http: HttpClient) { }
}
