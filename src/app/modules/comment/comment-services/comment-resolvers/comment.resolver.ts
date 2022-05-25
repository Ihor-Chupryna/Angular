import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable} from 'rxjs';

import {IComment} from "../../comment-interfaces";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {
  constructor(private commentService: CommentService,
              // private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    // const comment = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;
    //
    // if (comment) {
    //   return comment
    // }
    const {id} = route.params;
    return this.commentService.getById(id);
  }

}
