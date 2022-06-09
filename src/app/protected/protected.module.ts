import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterUsuarioComponent } from './administrador/register-usuario/register-usuario.component';
import { EditUsuarioComponent } from './administrador/edit-usuario/edit-usuario/edit-usuario.component';
import { DeleteUsuarioComponent } from './administrador/delete-usuario/delete-usuario/delete-usuario.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RegisterUsuarioComponent,
    DeleteUsuarioComponent,
    EditUsuarioComponent,
    DeleteUsuarioComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
