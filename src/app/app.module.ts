import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { OrderComponent } from './order/order.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { PrestadoComponent } from './prestado/prestado.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    OrderComponent,
    SolicitudesComponent,
    PrestadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
