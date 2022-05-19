import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  user: IUser

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getById(id).subscribe(value => this.user = value)
    })
  }

}
