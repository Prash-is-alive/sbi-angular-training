import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { HomeComponent } from './home.component';
import { LifecycleComponent } from './lifecycle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'admin', 
    loadChildren: () => 
      import ('../admin/admin.module').then(m => m.AdminModule) },
  { path: 'customer', 
    loadChildren: () => 
     import ('../customer/customer.module').then(m => m.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
