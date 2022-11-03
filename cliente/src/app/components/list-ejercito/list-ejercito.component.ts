import { Component, OnInit } from '@angular/core';
import { Ejercito } from 'src/app/models/ejercito';
import { EjercitoService } from 'src/app/service/ejercito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-ejercito',
  templateUrl: './list-ejercito.component.html',
  styleUrls: ['./list-ejercito.component.css']
})
export class ListEjercitoComponent implements OnInit {

  ejercitos: Ejercito[] = [];
  page: number = 1;

  constructor(private ejercitoService:EjercitoService) { }

  ngOnInit(): void {
    this.cargarEjercitos()
  }

  cargarEjercitos(){
    this.ejercitoService.lista().subscribe({
      next:res=>{
        this.ejercitos=res;
        console.log(this.ejercitos);
      },
      error:(err)=>console.log(err)
    })
  }

  borrar(id: any) {
    Swal.fire({
      title: 'Desea eliminar la ejercito',
      icon: 'warning',
      showCloseButton:true,
      confirmButtonText:"Aceptar",
      confirmButtonColor: "#DD6B55",
    })
    .then((result)=>{
      if(result.value){
        this.ejercitoService.delete(id).subscribe({
          next:res=>{
            this.cargarEjercitos();
            Swal.fire({
              title: 'Ejercito Eliminada',
              icon: 'success',
              showCloseButton:true,
              confirmButtonText:"Aceptar",
              confirmButtonColor: "#DD6B55",
            });
          }
        });
      }
    });
  }


}
