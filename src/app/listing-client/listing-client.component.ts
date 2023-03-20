import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Client } from '../types';
import { ClientService } from '../client.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { TriggerService } from '../trigger.service';

@Component({
  selector: 'app-listing-client',
  templateUrl: './listing-client.component.html',
  styleUrls: ['./listing-client.component.css'],
})
export class ListingClientComponent implements OnInit {
  @Input() updateBoolValue = new EventEmitter();

  onClick() {
    this._triggerService.trigger.next('')
  }
  title = 'BCM';
  clientProp: string[] = [
    'Accout number',
    'Name',
    'Gender',
    'Balence',
    'Email',
    'Address',
    'Account type',
  ];
  clients: Client[] = [];
  searchQuerySubject = new Subject<string>();

  constructor(private _clientService: ClientService, private _triggerService: TriggerService) {
    this.searchQuerySubject
    .pipe(debounceTime(500), distinctUntilChanged())
    .subscribe((query) => {
      this.querySearch(query);
    });
  }
  ngOnInit() {
    this._clientService.getClients().subscribe({
      next: (ret) => (this.clients = ret),
      error: (err) => console.log(err),
    });
  }

  querySearch(query: string) {
    console.log(query);

    this._clientService
      .searchClientByName(query)
      .subscribe((ret) => {
        this.clients = ret;
      });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }
}
