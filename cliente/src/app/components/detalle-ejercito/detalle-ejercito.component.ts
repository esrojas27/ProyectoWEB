import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ejercito } from 'src/app/models/ejercito';
import { EjercitoService } from 'src/app/service/ejercito.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detalle-ejercito',
  templateUrl: './detalle-ejercito.component.html',
  styleUrls: ['./detalle-ejercito.component.css']
})
export class DetalleEjercitoComponent implements OnInit {

  ejercito :Ejercito= {};
  id:string='';

  constructor(private ejercitoService:EjercitoService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.ejercitoService.detail(Number(this.id)).subscribe({
      next:res=>{
        this.ejercito=res;
      },
      error:(err)=>{
        Swal.fire({
          title: 'Error',
          text:err,
          icon: 'error',
          showCloseButton:true,
          confirmButtonText:"Aceptar",
          confirmButtonColor: "#DD6B55",
        })
        this.volver();
      }
    })
  }

  volver(): void {
    this.router.navigate(['/listEjercitos']);
  }

}
