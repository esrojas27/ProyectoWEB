import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePanteraComponent } from './components/detalle-pantera/detalle-pantera.component';
import { EditarPanteraComponent } from './components/editar-pantera/editar-pantera.component';
import { ListPanterasComponent } from './components/list-panteras/list-panteras.component';
import { NuevaPanteraComponent } from './components/nueva-pantera/nueva-pantera.component';

const routes: Routes = [
  {
    path:'',
    component:ListPanterasComponent
  },
  {
    path:'detalle/:id',
    component:DetallePanteraComponent
  },
  {
    path:'nuevo',
    component:NuevaPanteraComponent
  },
  {
    path:'editar/:id',
    component:EditarPanteraComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
