import {User} from "../user";
import {Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

@Injectable()
export class UserService {
  users = [
    {name: 'Nurik', status: 'Active'},
    {name: 'Arsen', status: 'Active'},
    {name: 'Aruzhan', status: 'Active'},
  ];
  addUser(name: string, status: string) {
    this.users.push({name, status });
  }
  updateStatus(id: number, status: string){
    this.users[id].status = status;
  }
}
