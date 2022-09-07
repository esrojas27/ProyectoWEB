import { Component, OnInit } from '@angular/core';
import { Pantera } from 'src/app/models/pantera';
import { PanteraService } from 'src/app/service/pantera.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-panteras',
  templateUrl: './list-panteras.component.html',
  styleUrls: ['./list-panteras.component.css']
})
export class ListPanterasComponent implements OnInit {

  panteras: Pantera[] = [];

  constructor(private panteraService:PanteraService) { }

  ngOnInit(): void {
    this.cargarPanteras()
  }

  cargarPanteras(){
    this.panteraService.lista().subscribe({
      next:res=>{
        this.panteras=res;
        console.log(this.panteras);
      },
      error:(err)=>console.log(err)
    })
  }

  borrar(id: any) {
    Swal.fire({
      title: 'Desea eliminar la pantera',
      icon: 'warning',
      showCloseButton:true,
      confirmButtonText:"Aceptar",
      confirmButtonColor: "#DD6B55",
    })
    .then((result)=>{
      if(result.value){
        this.panteraService.delete(id).subscribe({
          next:res=>{
            this.cargarPanteras();
            Swal.fire({
              title: 'Pantera Eliminada',
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
