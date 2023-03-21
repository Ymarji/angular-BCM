import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  client: Client[] = [ ];
  clientNumber: number = 0;
  netWorth: number = 0;

  constructor (
    private _clientService: ClientService
  ) {}

	ngOnInit(): void {
    this._clientService.getClients().subscribe((ret) => {
      this.client = ret;
      this.clientNumber = ret.length
      this.netWorth = ret.reduce((sum, val) => { return sum += (+val.balance)}, 0)
    })
	}

}
