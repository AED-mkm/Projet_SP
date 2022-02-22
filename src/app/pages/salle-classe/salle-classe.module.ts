import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalleClasseRoutingModule} from "./salle-classe.routing";
import {SalleClasseComponent} from "./salle-classe.component";
import {PrimengModule} from "../../shared/primeng/primeng.module";
@NgModule({
  declarations: [
    SalleClasseComponent
  ],
  imports: [
    CommonModule,
    SalleClasseRoutingModule,
    PrimengModule
  ]
})
export class SalleClasseModule {}
