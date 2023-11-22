import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from './objetos/usuario';
import { datos } from './objetos/datos';
import { Datos2 } from './objetos/prestado';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  APIserv:string = 'http://localhost/TecnoServ/Servicios/';
  APIsol:string = 'http://localhost/TecnoServ/Solicitar/';
  APIpres:string = 'http://localhost/TecnoServ/Prestado/'

  constructor(private HttpUsuario:HttpClient) {
   }


   AgregarDatos(datosUsuario:datos):Observable<any> {
      return this.HttpUsuario.post(this.APIsol + "?insertar=1", datosUsuario);
  }

  envioDatos(datosUsuario:Datos2):Observable<any> {
    return this.HttpUsuario.post(this.APIpres + "?insertar=1", datosUsuario);
}
  ObtenerDatos() {
    return this.HttpUsuario.get(this.APIsol);
  }

  ObtenerUsuario(id:any) {
    return this.HttpUsuario.get(this.APIserv + "?consultar="+id)
  }

  BorrarDatos(id:number) {
    return this.HttpUsuario.get(this.APIsol + "?borrar="+ id)
  }
}
