import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Output() deleteClient = new EventEmitter();

  onDelete(elm: Client) {
    this.deleteClient.emit(elm)
  }

}
