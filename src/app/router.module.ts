import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateClientComponent } from "./create-client/create-client.component";

const routes: Routes = [{
  path: 'add-client',
  component: CreateClientComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class routerModule {
}
