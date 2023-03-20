import { Component, OnDestroy, OnInit } from '@angular/core';
import { Client } from './types';
import { TriggerService } from './trigger.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isVisible: boolean = true;
  triggerSubcriber: Subscription = new Subscription();

  constructor(private _triggerService: TriggerService) {}
  ngOnInit(): void {
    this.triggerSubcriber = this._triggerService.onClickTrigger().subscribe(() => this.isVisible = !this.isVisible)
  }
  ngOnDestroy(): void {
    this.triggerSubcriber.unsubscribe()
  }
  onVisibleControl() {
    this.isVisible = !this.isVisible;
  }
}
