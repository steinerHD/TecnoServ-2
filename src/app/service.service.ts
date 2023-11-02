import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  API:string = 'http://localhost/TecnoServ/PHP/'

  constructor(private HttpUsuario:HttpClient) {
   }


   AgregarEmpleados(datosUsuario:usuario):Observable<any> {
      return this.HttpUsuario.post(this.API + "?insertar=1", datosUsuario);
  }

  ObtenerEmpleados() {
    return this.HttpUsuario.get(this.API);
  }

  ObtenerUsuario(id:any) {
    return this.HttpUsuario.get(this.API + "?consultar="+id)
  }
}
