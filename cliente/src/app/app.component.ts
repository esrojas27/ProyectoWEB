import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public loginService : AuthenticationService,private authService:AuthService,private router:Router) { }
  title = 'cliente';

  logout(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
