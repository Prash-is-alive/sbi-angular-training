import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObsExample1Component } from './observable/obs-example1.component';
import { ObsExample2Component } from './observable/obs-example2.component';
import { ObsExample3aComponent } from './observable/obs-example3a.component';
import { ObsExample3bComponent } from './observable/obs-example3b.component';

const routes: Routes = [
  { path: 'obs-1', component: ObsExample1Component},
  { path: 'obs-2', component: ObsExample2Component},
  { path: 'obs-3a', component: ObsExample3aComponent},
  { path: 'obs-3b', component: ObsExample3bComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
