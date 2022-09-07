import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pantera } from 'src/app/models/pantera';
import { PanteraService } from 'src/app/service/pantera.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-pantera',
  templateUrl: './detalle-pantera.component.html',
  styleUrls: ['./detalle-pantera.component.css']
})
export class DetallePanteraComponent implements OnInit {

  pantera :Pantera= {};
  id:string='';

  constructor(private panteraService:PanteraService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.panteraService.detail(Number(this.id)).subscribe({
      next:res=>{
        this.pantera=res;
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
    this.router.navigate(['/']);
  }

}
