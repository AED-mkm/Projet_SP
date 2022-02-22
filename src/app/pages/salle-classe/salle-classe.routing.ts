import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SalleClasseComponent} from "./salle-classe.component";

const routes: Routes = [
  {
    path: '',
    component: SalleClasseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalleClasseRoutingModule{}
