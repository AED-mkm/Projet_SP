import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfesseurComponent} from "./professeur.component";
import {ProfesseurRoutingModule} from "./professeur.routing";



@NgModule({
  declarations: [
    ProfesseurComponent
  ],
  imports: [
    CommonModule,
    ProfesseurRoutingModule
  ]
})
export class ProfesseurModule {}
