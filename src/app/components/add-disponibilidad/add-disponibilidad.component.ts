import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CicloService } from 'src/app/services/ciclo.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  lstUsuarios:Usuario[]=[];
  lstCiclo:Ciclo[]=[];

   disponibilidad:Disponibilidad={
    
    horaInicio:"",
    horaFin: "", 
    dia:"",
    ciclo:{
      idCiclo:0,

    },
    usuario:{
      idUsuario:0,
    }
   
     


   }


  constructor(private UsuarioService:UsuarioService, private cicloService:CicloService, private diponibilidadService:DisponibilidadService) {
    this.UsuarioService.listaUsuario().subscribe(
     usuarios=>{
       this.lstUsuarios=usuarios;
     }

    );
    this.cicloService.listaCiclo().subscribe(
      ciclos=>{
        this.lstCiclo=ciclos;
      }

    );


   }

   registraDisp(){
     console.log(">>> registraDisp() ");
     console.log(this.disponibilidad);

    this.diponibilidadService.registraDisponibilidad(this.disponibilidad).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error => {
        console.log(error);
      },


    );

   }

  ngOnInit(): void {
  }

}
