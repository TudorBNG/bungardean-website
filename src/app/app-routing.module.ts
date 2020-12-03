import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  {
    path:'maintenance',
    component: MaintenanceComponent
  },
  // { 
  //   path: '**', 
  //   redirectTo: 'maintenance' 
  // },
  // {
  //   path: '404',
  //   redirectTo:'maintenance'
  // },
  {
    path:'main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
