import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { routerModule } from './router.module';
import { CreateClientComponent } from './create-client/create-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListingClientComponent } from './listing-client/listing-client.component';
import { TableComponent } from './table/table.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { EditeOneComponent } from './edite-one/edite-one.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateClientComponent,
    ListingClientComponent,
    TableComponent,
    SearchBarComponent,
    HomeComponent,
    EditeOneComponent
  ],
  imports: [
    BrowserModule, routerModule, ReactiveFormsModule, HttpClientModule, FormsModule,FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
