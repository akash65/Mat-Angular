import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LoginRoute } from './login-routing.module';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
<<<<<<< HEAD
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule, MatSidenavModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
>>>>>>> origin/master

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    LoginRoute,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
>>>>>>> origin/master
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
<<<<<<< HEAD
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSidenavModule
=======
    MatProgressSpinnerModule
>>>>>>> origin/master
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
<<<<<<< HEAD
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSidenavModule
=======
    MatProgressSpinnerModule
>>>>>>> origin/master
  ]
})
export class LoginModule { }
