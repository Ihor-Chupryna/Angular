import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from "@angular/router";
import {filter, map} from "rxjs";

import {IComment} from "../../comment-interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;
  loading = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.comment = data)
    this.router.events.pipe(
      filter(e => e instanceof ResolveStart || e instanceof ResolveEnd),
      map(e => e instanceof ResolveStart)
    ).subscribe(value => this.loading = value)
  }

}
