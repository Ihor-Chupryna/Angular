import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable} from 'rxjs';

import {IPost} from "../../post-interfaces";
import {PostService} from "../post.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost> {
  constructor(private postService: PostService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    const post = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;
    if (post) {
      return post
    }
    const {id} = route.params;
    return this.postService.getById(id);
  }


}
