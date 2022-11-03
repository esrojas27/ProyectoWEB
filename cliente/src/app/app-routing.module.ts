import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePanteraComponent } from './components/detalle-pantera/detalle-pantera.component';
import { EditarPanteraComponent } from './components/editar-pantera/editar-pantera.component';
import { ListPanterasComponent } from './components/list-panteras/list-panteras.component';
import { NuevaPanteraComponent } from './components/nueva-pantera/nueva-pantera.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { SignupComponent } from './components/signup/signup.component';
import { NuevoEjercitoComponent } from './components/nuevo-ejercito/nuevo-ejercito.component';
import { DetalleEjercitoComponent } from './components/detalle-ejercito/detalle-ejercito.component';
import { EditarEjercitoComponent } from './components/editar-ejercito/editar-ejercito.component';
import { ListEjercitoComponent } from './components/list-ejercito/list-ejercito.component';

const routes: Routes = [
  {
    path:'',
    component:ListPanterasComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path:'listEjercitos',
    component:ListEjercitoComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path:'detalle/:id',
    component:DetallePanteraComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path:'detalleEjercito/:id',
    component:DetalleEjercitoComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path:'nuevo',
    component:NuevaPanteraComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path:'nuevoEjercito',
    component:NuevoEjercitoComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path:'editar/:id',
    component:EditarPanteraComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path:'editarEjercito/:id',
    component:EditarEjercitoComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
