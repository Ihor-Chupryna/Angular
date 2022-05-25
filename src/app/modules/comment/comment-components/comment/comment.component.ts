import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../comment-interfaces";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  @Input()
  comment: IComment;

  ngOnInit(): void {
  }

  commentDetails(): void {
    this.router.navigate([this.comment.id], {relativeTo: this.activatedRoute, state: {comment: this.comment}}).then()
  }
}
