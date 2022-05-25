import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './user-components/users/users.component';
import {UserComponent} from './user-components/user/user.component';
import {UserDetailsComponent} from './user-components/user-details/user-details.component';
import {UserService, UsersResolver} from "./user-services";
import {UserResolver} from "./user-services";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [
    UserComponent
  ],
  providers: [UserService, UsersResolver, UserResolver]
})
export class UserModule {
}
