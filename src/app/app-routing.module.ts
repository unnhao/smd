import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FireDashboardComponent } from './fire-api/fire-dashboard/fire-dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard', component: FireDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
