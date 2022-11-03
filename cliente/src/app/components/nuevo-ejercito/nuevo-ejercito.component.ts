import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';import { Ejercito } from 'src/app/models/ejercito';
import { EjercitoService } from 'src/app/service/ejercito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-ejercito',
  templateUrl: './nuevo-ejercito.component.html',
  styleUrls: ['./nuevo-ejercito.component.css']
})
export class NuevoEjercitoComponent implements OnInit {

  nombre = '';

  constructor(private ejercitoService:EjercitoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const ejercito = new Ejercito(this.nombre);
    this.ejercitoService.save(ejercito).subscribe({
      next:res=>{
        Swal.fire({
          title: 'Ejercito Creada',
          icon: 'success',
          showCloseButton:true,
          confirmButtonText:"Aceptar",
          confirmButtonColor: "#DD6B55",
        })
        this.router.navigate(['/listEjercitos']);
      },
      error:(err)=>{
        Swal.fire({
          title: 'Error en la creacion',
          text:err,
          icon: 'error',
          showCloseButton:true,
          confirmButtonText:"Aceptar",
          confirmButtonColor: "#DD6B55",
        })
        this.router.navigate(['/listEjercitos']);
      }
    });
  }

}
