import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //user$=  this.authenticationService.
  userEmail: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer les informations de l'utilisateur depuis les paramètres d'URL
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];
    });
  }

}
