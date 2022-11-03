import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pantera } from 'src/app/models/pantera';
import { EjercitoService } from 'src/app/service/ejercito.service';
import { PanteraService } from 'src/app/service/pantera.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-pantera',
  templateUrl: './editar-pantera.component.html',
  styleUrls: ['./editar-pantera.component.css']
})
export class EditarPanteraComponent implements OnInit {

  pantera: Pantera = {};
  id:string='';

  ejercitos:any=[];

  idEjercito:string='';

  constructor(private panteraService:PanteraService,private ejercitoService:EjercitoService,private activatedRoute: ActivatedRoute,private router: Router ) {

   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.ejercitoService.lista().subscribe({
      next:res=>{
        this.ejercitos = res;
        this.panteraService.detail(Number(this.id)).subscribe({
          next:res=>{
            this.pantera=res;
            console.log('pantera: ', this.pantera);
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
      },
      error:(err)=>{
        console.log(err);
      }
    });
    
  }

  onUpdate(): void {
    this.panteraService.update(Number(this.id), this.pantera).subscribe({
      next:res=>{
        Swal.fire({
          title: 'Pantera Actualizada',
          icon: 'success',
          showCloseButton:true,
          confirmButtonText:"Aceptar",
          confirmButtonColor: "#DD6B55",
        })
        this.router.navigate(['/']);
      },
      error:(err)=>{
        Swal.fire({
          title: 'Error en la Actualizacion',
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

  definirIdEjer(idEjer:any){
    this.pantera.idEjercito=idEjer.target.value;
  }

}
