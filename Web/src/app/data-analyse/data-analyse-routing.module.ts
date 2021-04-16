import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {OverviewComponent} from "./overview/overview.component";
import {WeekViewComponent} from "./week-view/week-view.component";

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent},
      {path: 'week-view', component: WeekViewComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataAnalyseRoutingModule { }
