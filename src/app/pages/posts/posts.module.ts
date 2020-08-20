import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListModule } from './posts-list/posts-list.module';
import { AddPostModule } from './add-post/add-post.module';
import { EditPostModule } from './edit-post/edit-post.module';


@NgModule({
  declarations: [PostsListComponent, AddPostComponent, EditPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    PostsListModule,
    AddPostModule,
    EditPostModule
  ],
  exports: [
    PostsListComponent, AddPostComponent, EditPostComponent
  ],
})
export class PostsModule { }
