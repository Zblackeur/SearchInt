import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobRecommendationComponent} from "./job-recommendation.component";



@NgModule({
  declarations: [JobRecommendationComponent],
  imports: [
    CommonModule
  ],
  exports:[
    JobRecommendationComponent
  ]
})
export class JobRecommendationModule { }
