import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public authenticate(usuario:any, password:any): Observable<any>{
    return this.http.get<boolean>(this.url + 'auth' + "/" + usuario + "/" + password);
  }
/*
  authenticate(username : any, password : any) {
    if (username === "javainuse" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }*/

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}