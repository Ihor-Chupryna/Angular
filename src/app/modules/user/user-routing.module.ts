import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersDetailsComponent} from "./components/users-details/users-details.component";
import {UsersComponent} from "./components/users/users.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: ':id', component: UsersDetailsComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
