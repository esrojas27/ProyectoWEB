import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pantera } from 'src/app/models/pantera';
import { PanteraService } from 'src/app/service/pantera.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-pantera',
  templateUrl: './nueva-pantera.component.html',
  styleUrls: ['./nueva-pantera.component.css']
})
export class NuevaPanteraComponent implements OnInit {

  nombre = '';

  constructor(private panteraService:PanteraService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pantera = new Pantera(this.nombre);
    this.panteraService.save(pantera).subscribe({
      next:res=>{
        Swal.fire({
          title: 'Pantera Creada',
          icon: 'success',
          showCloseButton:true,
          confirmButtonText:"Aceptar",
          confirmButtonColor: "#DD6B55",
        })
        this.router.navigate(['/']);
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
    });
  }

}