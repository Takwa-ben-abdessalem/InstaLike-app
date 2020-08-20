import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';


const routes: Routes = [

  { path: 'login',
    loadChildren: () => import('./pages/login/login.module')
    .then(mod => mod.LoginModule) 
  },
  { path: 'register',
    loadChildren: () => import('./pages/register/register.module')
    .then(mod => mod.RegisterModule)
  },  
  { path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module')
    .then(mod => mod.PostsModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }