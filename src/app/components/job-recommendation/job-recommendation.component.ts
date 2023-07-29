import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-job-recommendation',
  templateUrl: './job-recommendation.component.html',
  styleUrls: ['./job-recommendation.component.css']
})
//import { Component, OnInit } from '@angular/core';


export class JobRecommendationComponent implements OnInit {
  // Propriétés pour stocker les caractéristiques saisies par l'utilisateur
  public competence: string;
  public niveauEtudes: string;
  public experience: number;
  public emplacement: string;

  // Propriété pour stocker les annonces recommandées
  public annoncesRecommandees: any[];

  constructor(private http: HttpClient) {
    this.competence = '';
    this.niveauEtudes = '';
    this.experience = 0;
    this.emplacement = '';
    this.annoncesRecommandees = [];
  }

  ngOnInit(): void {
  }

  // Méthode pour récupérer les annonces recommandées
  public getAnnoncesRecommandees(): void {
    // Construire l'URL de l'API Flask avec les caractéristiques saisies
    const url = `http://localhost:5000/recommend?competence=${this.competence}&niveauEtudes=${this.niveauEtudes}&experience=${this.experience}&emplacement=${this.emplacement}`;

    // Appeler l'API Flask pour obtenir les annonces recommandées
    this.http.get<any[]>(url).subscribe((data: any[]) => {
      this.annoncesRecommandees = data;
    });

  }
}
