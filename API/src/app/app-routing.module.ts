import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpPageComponent } from './help-page/help-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';
import { UpdateEmployeePageComponent } from './update-employee-page/update-employee-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'help', component: HelpPageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'add-employee', component: AddEmployeePageComponent},
  { path: 'update-employee/:id', component: UpdateEmployeePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
