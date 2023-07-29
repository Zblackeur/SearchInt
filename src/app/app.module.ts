import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from './components/navbar/navbar.module';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/compat/auth";
import { HomeComponent } from './pages/home/home.component'; // Importez RouterModule et Routes

// Définissez les routes de votre application
const routes: Routes = [
  // Exemple de route vide pour la page d'accueil (à personnaliser selon votre besoin)
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path:'signin',loadChildren:() => import('./pages/signin/signin.module').then(m => m.SigninModule)},
  { path:'home',loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule)}

  // Ajoutez d'autres routes ici...
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, // Définissez les routes avec forRoot
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB9CF2vo4FO8AuGe1VVETXFAyrR-ZBGP2w",
      authDomain: "searchint-1bace.firebaseapp.com",
      projectId: "searchint-1bace",
      storageBucket: "searchint-1bace.appspot.com",
      messagingSenderId: "188830708502",
      appId: "1:188830708502:web:ae2fdc68bb9e64292d5637",
      measurementId: "G-YMK86LBLT4"
    }),
    AngularFireAuthModule,
    //NavbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
