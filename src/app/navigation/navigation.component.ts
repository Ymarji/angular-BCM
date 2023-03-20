import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() isVisible: boolean = true;
  @Output() visibleClick = new EventEmitter()

  onClick(){
    this.visibleClick.emit()
  }
}
