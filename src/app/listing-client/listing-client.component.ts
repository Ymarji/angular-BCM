import { Component, OnInit } from '@angular/core';
import { Client } from '../types';
import { ClientService } from '../client.service';
import { map, pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-listing-client',
  templateUrl: './listing-client.component.html',
  styleUrls: ['./listing-client.component.css']
})
export class ListingClientComponent implements OnInit{
  title = 'BCM';
  clientProp: string[] = ['First Name', 'Last Name', 'Email', 'Gender', 'Address'];
  clients: Client[] = []

  constructor (
    private _clientService: ClientService
  ) {}
  ngOnInit() {
    this._clientService.getClients()
    .subscribe({
      next: ret => this.clients = ret,
      error: err => console.log(err)
    })
  }

  querySearch(query: string) {
    console.log(query);
  }
}
