import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebFormComponent } from './web-form/web-form.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UsersViewComponent } from './users-view/users-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [WebFormComponent, LoginComponent, UsersViewComponent, RegisterComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule
  ],
  exports: [WebFormComponent, LoginComponent, UsersViewComponent, RegisterComponent],
})
export class ComponentsModule {}
