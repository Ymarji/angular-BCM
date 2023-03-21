import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Client } from '../types';

@Component({
  selector: 'app-edite-one',
  templateUrl: './edite-one.component.html',
  styleUrls: ['./edite-one.component.css'],
})
export class EditeOneComponent implements OnInit {
  updateClientForm!: FormGroup;
  client?: Client = undefined;
  isLoading: boolean = false;
  // randomAccountNumber: string = this.generateAccountNumber();
  routSuber: Subscription = new Subscription();

  constructor(
    private _formBuilder: FormBuilder,
    private _clientService: ClientService,
    private router: ActivatedRoute,
    private _router: Router
  ) {
    this.updateClientForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      types: ['', [Validators.required]],
      address: ['', [Validators.required]],
      balance: ['', [Validators.required, Validators.min(0)]],
      accountNumber: [{ value: 0, disabled: true }],
    });
  }
  ngOnInit(): void {
    this.routSuber = this.router.params
      .pipe(switchMap((params) => this._clientService.findOnd(params['id'])))
      .subscribe((ret) => {
        this.client = ret;
        console.log(this.client);
        this.updateClientForm = this._formBuilder.group({
          firstName: [this.client?.firstName, [Validators.required]],
          lastName: [this.client?.lastName, [Validators.required]],
          email: [this.client?.email, [Validators.required, Validators.email]],
          gender: [this.client?.gender, [Validators.required]],
          types: [this.client?.types, [Validators.required]],
          address: [this.client?.address, [Validators.required]],
          balance: [
            this.client?.balance,
            [Validators.required, Validators.min(0)],
          ],
          accountNumber: [
            { value: this.client?.accountNumber, disabled: true },
          ],
        });
      });
  }

  onSubmit() {
    this.isLoading = true;
    const value = { ...this.client, ...this.updateClientForm.value };
    this._clientService.updatePokemon(value).subscribe((ret) => {
      this.updateClientForm.reset();
      this.isLoading = false;
      this._router.navigate(['/list']);
    });
  }

  isRequired(name: string) {
    return (
      this.updateClientForm.get(name)?.hasError('required') &&
      this.updateClientForm.get(name)?.touched
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
