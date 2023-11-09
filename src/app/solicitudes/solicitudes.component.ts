import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../service.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  Datos:any;

  constructor( public service: CrudServiceService) {

  }

  ngOnInit(): void {
    this.service.ObtenerDatos().subscribe((respuesta: any) => {
      this.Datos = respuesta;
    })
  }

  borrarDatos(id:number, iControl:any) {
    if (window.confirm("¿Deseas eliminar realmente a este empleado?")) {
      this.service.BorrarDatos(id).subscribe(() => {
        this.Datos.splice(iControl,1);
      })
    }
  }
}
