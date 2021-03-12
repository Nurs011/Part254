import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  providers: [UserService]
})
export class AppComponent implements OnInit{
  users: { name: string; status: string }[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.users;
  }
}
}
