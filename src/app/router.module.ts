import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListingClientComponent } from './listing-client/listing-client.component';
import { HomeComponent } from './home/home.component';
import { EditeOneComponent } from './edite-one/edite-one.component';

const routes: Routes = [
  {
    path: 'add-client',
    component: CreateClientComponent
  },
  {
    path: 'list',
    component: ListingClientComponent,
  },
  {
    path: 'list/update/:id',
    component: EditeOneComponent,
    pathMatch: 'prefix'
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class routerModule {}
