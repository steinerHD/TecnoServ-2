import { Component } from '@angular/core';
import { CrudServiceService } from '../service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  
  formUsuario:FormGroup<any>;
  usuario: any;

  constructor(public form: FormBuilder,
    public ruteador: Router,
    private CrudService: CrudServiceService) {
    this.formUsuario = this.form.group({
      "id": ['']
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendDatos() {
    this.CrudService.ObtenerUsuario(this.formUsuario.value.id).subscribe( (res) => {
      this.usuario = res;
    })
  }
}
