import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListingClientComponent } from './listing-client/listing-client.component';

const routes: Routes = [
  {
    path: 'add-client',
    component: CreateClientComponent
  },
  {
    path: 'list',
    component: ListingClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class routerModule {}
