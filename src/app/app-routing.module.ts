import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObsExample1Component } from './observable/obs-example1.component';
import { ObsExample2Component } from './observable/obs-example2.component';

const routes: Routes = [
  { path: 'obs-1', component: ObsExample1Component},
  { path: 'obs-2', component: ObsExample2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
