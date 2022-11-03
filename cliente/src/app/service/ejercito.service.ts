import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ejercito } from '../models/ejercito';

@Injectable({
  providedIn: 'root'
})
export class EjercitoService {

  ejercitoURL = 'http://localhost:8080/ejercito/';

  constructor(private http: HttpClient) { }

  public lista(): Observable<Ejercito[]>{
    return this.http.get<Ejercito[]>(this.ejercitoURL+'lista');
  }

  public detail(id:number): Observable<Ejercito>{
    return this.http.get<Ejercito>(this.ejercitoURL+`detail/${id}`);
  }

  public save(ejercito:Ejercito):Observable<any> {
    return this.http.post<any>(this.ejercitoURL+'create',ejercito);
  }

  public update(id:number,ejercito:Ejercito):Observable<any> {
    return this.http.put<any>(this.ejercitoURL+`update/${id}`,ejercito);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.ejercitoURL+`delete/${id}`);
  }
}
