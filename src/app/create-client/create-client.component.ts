import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ClientService } from '../client.service';
import { Client } from '../types';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent {
  addClientForm: FormGroup;
  isLoading: boolean =  false;
  randomAccountNumber: string = this.generateAccountNumber();

  constructor(private _formBuilder: FormBuilder, private _clientService: ClientService) {
    this.addClientForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['',  [Validators.required]],
      types: ['', [Validators.required]],
      address: ['', [Validators.required]],
      balance:[0 , [Validators.required, Validators.min(0)]],
      accountNumber: [{value: this.randomAccountNumber, disabled: true}],
    });
  }

  onSubmit() {
    this.addClientForm.value.id = uuidv4()
    this.isLoading = true
    console.log(this.addClientForm.value)
    this._clientService.addClient({...this.addClientForm.value, accountNumber: this.randomAccountNumber}).subscribe((ret) => {
      this.addClientForm.reset()
      this.isLoading = false;
    });
  }

  isRequired(name: string) {
    return (
      this.addClientForm.get(name)?.hasError('required') &&
      this.addClientForm.get(name)?.touched
    );
  }

  generateAccountNumber() {
    const timestamp = Date.now().toString(); // Get current timestamp
    const random = Math.random().toString(10).substring(2, 6); // Generate a random string of 6 characters
    const accountNumber = timestamp + random; // Concatenate timestamp and random string
    console.log(accountNumber);

    return accountNumber;
  }
}
