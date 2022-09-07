import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPanterasComponent } from './components/list-panteras/list-panteras.component';
import { DetallePanteraComponent } from './components/detalle-pantera/detalle-pantera.component';
import { NuevaPanteraComponent } from './components/nueva-pantera/nueva-pantera.component';
import { EditarPanteraComponent } from './components/editar-pantera/editar-pantera.component';

//Externos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' 
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component' 
import { TokenInterceptorService } from './service/token-interceptor.service';
import { SignupComponent } from './components/signup/signup.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListPanterasComponent,
    DetallePanteraComponent,
    NuevaPanteraComponent,
    EditarPanteraComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
