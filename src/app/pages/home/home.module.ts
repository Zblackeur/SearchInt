import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SigninComponent} from "../signin/signin.component";
import {HomeComponent} from "./home.component";
import { NavbarModule } from "../../components/navbar/navbar.module";

const routes : Routes =[
  {
    path:'', component:HomeComponent
  }
];


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule
  ]
})
export class HomeModule { }
