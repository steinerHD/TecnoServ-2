import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { CrudServiceService } from '../service.service';

@Component({
  selector: 'app-prestado',
  templateUrl: './prestado.component.html',
  styleUrls: ['./prestado.component.css']
})
export class PrestadoComponent {
  formDatos: FormGroup<any>;
  dato: any;

  constructor(public form: FormBuilder,
    private service: CrudServiceService) {
      this.formDatos = this.form.group({
        "id": [''],
        "cliente_ID": [''],
        "empleado_ID": [''],
        "servicio_ID": [''],
        "fecha_servicio": [''],
        "descripcion_servicio": [''],
        "hoja_registro": ['']
      })
  }


  enviarDatos() {
    this.service.envioDatos(this.formDatos.value).subscribe(()=> {
      alert('Los datos han sido enviados correctamente');
    })
  }
}
