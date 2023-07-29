import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobRecommendationComponent} from "./job-recommendation.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [JobRecommendationComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    JobRecommendationComponent
  ]
})
export class JobRecommendationModule { }
