import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./post-components/posts/posts.component";
import {PostResolver, PostsResolver} from "./post-servises";
import {PostDetailsComponent} from "./post-components/post-details/post-details.component";
import {PostActivateGuard} from "./post-guards";

const routes: Routes = [
  {
    path: '', component: PostsComponent,canActivate:[PostActivateGuard], resolve: {data: PostsResolver}, children: [
      {path: ':id', component: PostDetailsComponent, resolve: {data: PostResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
