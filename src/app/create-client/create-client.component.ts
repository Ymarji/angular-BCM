import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent {
  addClientForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _clientService: ClientService) {
    this.addClientForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['Male'],
      address: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.addClientForm.value.id = uuidv4()
    this._clientService.addClient(this.addClientForm.value).subscribe((ret) => {
      console.log(ret);
    });
  }

  isRequired(name: string) {
    return (
      this.addClientForm.get(name)?.hasError('required') &&
      this.addClientForm.get(name)?.touched
    );
  }
}
