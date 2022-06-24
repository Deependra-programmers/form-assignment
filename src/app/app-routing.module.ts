import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssginmentTdfApprochComponent } from './assginment-tdf-approch/assginment-tdf-approch.component';
import { AssignmentRmfApprochComponent } from './assignment-rmf-approch/assignment-rmf-approch.component';

const routes: Routes = [
  {
    path:'tdf', component:AssginmentTdfApprochComponent
  },
  {
    path:'rmf', component:AssignmentRmfApprochComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
