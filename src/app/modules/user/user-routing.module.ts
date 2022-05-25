import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./user-components/users/users.component";
import {UsersResolver} from "./user-services";
import {UserDetailsComponent} from "./user-components/user-details/user-details.component";
import {UserResolver} from "./user-services";

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {data: UsersResolver}, children: [
      {path: ':id', resolve: {data: UserResolver}, component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
