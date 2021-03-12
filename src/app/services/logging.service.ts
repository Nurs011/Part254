
import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {
  logStatus(status: string) {
    console.log("logging the data to the console and the status is "  + status);
  }
}
