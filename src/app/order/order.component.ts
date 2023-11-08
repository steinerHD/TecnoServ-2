import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudServiceService } from '../service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  formDatos:FormGroup<any>
  dato: any;

  constructor(public form:FormBuilder,
    ruteador:Router,
    private service:CrudServiceService) {
      this.formDatos = this.form.group({
        "nombre": [''],
        "email": [''],
        "telefono": [''],
        "tipo_servicio": [''],
        "descripcion": ['']
      })

    }

  enviarDatos() {
    this.service.AgregarDatos(this.formDatos.value).subscribe(()=> {
      alert('Los datos han sido enviados correctamente');
    })
  }
}
