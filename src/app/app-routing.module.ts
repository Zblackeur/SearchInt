import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {AppComponent} from "./app.component";

// Définissez les routes de votre application
const routes: Routes = [
  // Exemple de route vide pour la page d'accueil (à personnaliser selon votre besoin)
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path:'signin',loadChildren:() => import('./pages/signin/signin.module').then(m => m.SigninModule)},
  { path:'home',loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule)}

  // Ajoutez d'autres routes ici...
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
