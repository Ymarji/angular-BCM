import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
  addClientForm: FormGroup;

  constructor (
    private _formBuilder: FormBuilder,
  ) {
    this.addClientForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      gender: ['Male'],
      address: ['',[Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.addClientForm.value)
  }

  isRequired(name:string) {
    return this.addClientForm.get(name)?.hasError('required') && this.addClientForm.get(name)?.touched
  }
}
