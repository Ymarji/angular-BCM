import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, PartialClient } from './types';

export const BASE_URL = 'http://localhost:3000/customers'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private _http: HttpClient
  ) { }

  getClients(): Observable<Client[]> {
    return this._http.get<Client[]>(BASE_URL)
  }

  addClient(client: PartialClient) {
    return this._http.post<Client>(BASE_URL, client)
  }

  searchClientByName(query: string) {
    return this._http.get<Client[]>(BASE_URL + '?q=' + query)
  }
  findOnd(id: string) {
    return this._http.get<Client>(BASE_URL+ '/' + id)
  }

  updatePokemon(value: Client) {
    return this._http.put<Client>(BASE_URL + '/' + value.id, value);
  }

  deleteClient(id: string) {
    return this._http.delete(BASE_URL+ '/' + id);
  }
}
