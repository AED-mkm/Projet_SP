import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatiereRoutingModule} from "./matiere.routing";
import {MatiereComponent} from "./matiere.component";
import {PrimengModule} from "../../shared/primeng/primeng.module";



@NgModule({
  declarations: [
    MatiereComponent
  ],
  imports: [
    CommonModule,
    MatiereRoutingModule,
    PrimengModule
  ]
})
export class MatiereModule { }
