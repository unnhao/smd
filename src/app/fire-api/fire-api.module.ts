import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireDashboardComponent } from './fire-dashboard/fire-dashboard.component';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [FireDashboardComponent],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [FireDashboardComponent]
})
export class FireAPIModule { }
