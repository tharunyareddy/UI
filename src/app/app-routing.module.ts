import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { ContractorDetailsComponent } from './contractor-details/contractor-details.component';
import { ContractorComponent } from './contractor/contractor.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ResourceManagementComponent } from './resource-management/resource-management.component';
import { TaskComponent } from './task/task.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"admin",component:LoginComponent},
  {path:"contractor",component:ContractorComponent},
  {path:"contract-details/:id",component:ContractorDetailsComponent},
  {path:"maintenance",component:MaintenanceComponent},
  {path:"task",component:TaskComponent},
  {path:"worker",component:WorkerComponent},
  {path:"worker-details/:id",component:WorkerDetailsComponent},
  {path:"resource-management",component:ResourceManagementComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
