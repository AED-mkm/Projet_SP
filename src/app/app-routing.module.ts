import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'salle-classe',
    loadChildren:() => import('src/app/pages/salle-classe/salle-classe.module')
      .then(m => m.SalleClasseModule)
  },

  {
    path:'matiere',
    loadChildren:()=> import('src/app/pages/matiere/matiere.module')
      .then(mt => mt.MatiereModule)
  },

  {
    path:'professeur',
    loadChildren:()=> import('src/app/pages/professeur/professeur.module')
      .then(prof => prof.ProfesseurModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
