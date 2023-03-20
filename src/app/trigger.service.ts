import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  trigger = new Subject();

  onClickTrigger() {
    return this.trigger.asObservable()
  }
}
