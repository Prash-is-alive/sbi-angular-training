import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './guard/auth-guard';
import { FetchServerResolver } from './guard/fetch-server-resolver';
import { WarnUserGuard } from './guard/warn-user-guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerComponent2 } from './servers/server/server.component.2';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', canActivateChild: [AuthGuard]/*canActivate: [AuthGuard]*/, component: ServersComponent,  children: [
    //{ path: ':id', component: ServerComponent },
    {path: ':id', component: ServerComponent2, resolve: {server: FetchServerResolver }},
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [WarnUserGuard] }
  ] },
  //{ path: 'servers/:id', component: ServerComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'something', redirectTo: '/not-found' },
  { path: 'error', component: ErrorPageComponent, data: {message: 'Something went wrong!'} },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
