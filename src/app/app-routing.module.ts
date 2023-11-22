import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { OrderComponent } from './order/order.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { PrestadoComponent } from './prestado/prestado.component';

const routes: Routes = [
  {'path': 'list', component: ListComponent},
  {'path': 'order', component: OrderComponent},
  {'path': 'request', component: SolicitudesComponent},
  {'path': 'serv-register', component: PrestadoComponent},
  {'path': '', redirectTo: '/list', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
