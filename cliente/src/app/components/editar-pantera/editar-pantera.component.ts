import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pantera } from 'src/app/models/pantera';
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

  constructor(private panteraService:PanteraService,private activatedRoute: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.panteraService.detail(Number(this.id)).subscribe({
      next:res=>{
        this.pantera=res;
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
    this.panteraService.update(Number(this.id), this.pantera).subscribe({
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
