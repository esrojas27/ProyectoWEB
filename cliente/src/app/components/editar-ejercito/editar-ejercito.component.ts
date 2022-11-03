import { Component, OnInit } from '@angular/core';import { ActivatedRoute, Router } from '@angular/router';
import { Ejercito } from 'src/app/models/ejercito';
import { EjercitoService } from 'src/app/service/ejercito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-ejercito',
  templateUrl: './editar-ejercito.component.html',
  styleUrls: ['./editar-ejercito.component.css']
})
export class EditarEjercitoComponent implements OnInit {
  ejercito: Ejercito = {};
  id:string='';

  constructor(private ejercitoService:EjercitoService,private activatedRoute: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.ejercitoService.detail(Number(this.id)).subscribe({
      next:res=>{
        this.ejercito=res;
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
        this.router.navigate(['/']);
      }
    })
  }

  onUpdate(): void {
    this.ejercitoService.update(Number(this.id), this.ejercito).subscribe({
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
