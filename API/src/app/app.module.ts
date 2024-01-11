import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SearchComponent } from './employee-search/employee-search.component';
import { CrudButtonComponent } from './crud-button/crud-button.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';
import { UpdateEmployeePageComponent } from './update-employee-page/update-employee-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchComponent,
    CrudButtonComponent,
    HelpPageComponent,
    HomePageComponent,
    AddEmployeePageComponent,
    UpdateEmployeePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
