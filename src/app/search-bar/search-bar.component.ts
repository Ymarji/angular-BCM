import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() querySearch = new EventEmitter<string>();
  value: string = '';

  onChange(event: any) {
    this.querySearch.emit(event.target.value)
  }
}
