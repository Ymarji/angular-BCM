import { Component, EventEmitter, Output } from '@angular/core';
import { faArrowLeft, faArrowRight, faArrowRightFromFile, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() querySearch = new EventEmitter<string>();
  @Output() trigger = new EventEmitter()
  value: string = '';
  initTrigger = true;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  // faRightFromBracket = faRightFromBracket;
  onHideClick() {
    this.initTrigger = !this.initTrigger
    this.trigger.emit()
  }
  onChange(event: any) {
    this.querySearch.emit(event)
  }
}
