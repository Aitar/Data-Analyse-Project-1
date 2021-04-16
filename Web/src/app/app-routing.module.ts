import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./data-analyse/layout/layout.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'data-analyse', pathMatch: 'full'},
      {path: 'data-analyse', loadChildren: ()=>import('./data-analyse/data-analyse.module').then(m => m.DataAnalyseModule)}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
