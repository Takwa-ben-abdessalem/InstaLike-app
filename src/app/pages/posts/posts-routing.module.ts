import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./posts-list/posts-list.module').then(m => m.PostsListModule),
  }, {
    path: 'add-post',
    loadChildren: () => import('./add-post/add-post.module').then(m => m.AddPostModule),
  },
  {
    path: 'edit-post',
    loadChildren: () => import('./edit-post/edit-post.module').then(m => m.EditPostModule),
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
