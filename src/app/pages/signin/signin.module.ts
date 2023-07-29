import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import {RouterModule, Routes} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const routes : Routes =[
  {
  path:'', component:SigninComponent
 }
];

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule, // Ajoutez le module MatProgressSpinnerModule dans la section imports
    MatSnackBarModule,
    FormsModule, // Assurez-vous que FormsModule est inclus ici
    ReactiveFormsModule // Assurez-vous que ReactiveFormsModule est inclus ici

  ]
})
export class SigninModule { }
