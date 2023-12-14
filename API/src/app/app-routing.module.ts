import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpPageComponent } from './help-page/help-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'help', component: HelpPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
