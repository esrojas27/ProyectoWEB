import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  nombre:string ='';
  nombreUsuario: string = '';
  email:string='';
  password: string = '';

  nuevoUsaurio:NuevoUsuario = new NuevoUsuario("","","","");


  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  crearCuenta(){
    this.nuevoUsaurio = new NuevoUsuario(this.nombre,this.nombreUsuario,this.email,this.password);
    this.authService.nuevo(this.nuevoUsaurio).subscribe({
      next:res=>{
        Swal.fire({
          title: 'Usuario Creado',
          icon: 'success',
          showCloseButton:true,
          confirmButtonText:"Aceptar",
          confirmButtonColor: "#DD6B55",
        })
        this.router.navigate(['/login']);
      }
    })

  }

}
