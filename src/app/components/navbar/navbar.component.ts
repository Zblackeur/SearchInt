import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationService} from "../services/authentification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  userEmail: string | undefined;




  ngOnInit(): void {
    // Récupérer les informations de l'utilisateur depuis les paramètres d'URL
    this.route.queryParams.subscribe(params => {
      this.userEmail = params['email'];
    });
  }

  logout() {
    this.router.navigate(['signin']);

    this.authenticationService.logout()
      .subscribe();
  }

}
