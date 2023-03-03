import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CareGiversComponent} from "./components/care-givers/care-givers.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {TherapyRecordsComponent} from "./components/therapy-records/therapy-records.component";
import {ChildrenComponent} from "./components/children/children.component";
import {HelpingHandsComponent} from "./components/helping-hands/helping-hands.component";

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path: 'caregiver', component: CareGiversComponent},
  {path: 'therapy_records', component: TherapyRecordsComponent},
  {path: 'children', component: ChildrenComponent},
  {path: 'helping_hands', component: HelpingHandsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
