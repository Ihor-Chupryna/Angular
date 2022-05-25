import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentRoutingModule} from './comment-routing.module';
import {CommentsComponent} from './comment-components/comments/comments.component';
import {CommentComponent} from './comment-components/comment/comment.component';
import {CommentDetailsComponent} from './comment-components/comment-details/comment-details.component';
import {CommentResolver, CommentService, CommentsResolver} from "./comment-services";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ], providers: [CommentService, CommentsResolver, CommentResolver]
})
export class CommentModule {
}
