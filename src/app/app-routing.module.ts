import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicComponent} from './components/public/public.component';
import {PrivateComponent} from './components/private/private.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', component: PublicComponent},
  {path: 'public', component: PublicComponent},
  {path: 'private', component: PrivateComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
