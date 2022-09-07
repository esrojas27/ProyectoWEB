import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pantera } from '../models/pantera';

@Injectable({
  providedIn: 'root'
})


export class PanteraService {
  

  panteraURL = 'http://localhost:8080/pantera/';

  constructor(private http: HttpClient) { }

  public lista(): Observable<Pantera[]>{
    return this.http.get<Pantera[]>(this.panteraURL+'lista');
  }

  public detail(id:number): Observable<Pantera>{
    return this.http.get<Pantera>(this.panteraURL+`detail/${id}`);
  }

  public save(pantera:Pantera):Observable<any> {
    return this.http.post<any>(this.panteraURL+'create',pantera);
  }

  public update(id:number,pantera:Pantera):Observable<any> {
    return this.http.put<any>(this.panteraURL+`update/${id}`,pantera);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.panteraURL+`delete/${id}`);
  }
}
