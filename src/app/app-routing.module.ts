import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register',
  loadChildren: () => import('./modules/general/register/register.module')
  .then(mod => mod.RegisterModule)
},  { path: 'userinfo',
loadChildren: () => import('./modules/general/userinfo/userinfo.module')
.then(mod => mod.UserinfoModule)
},  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }