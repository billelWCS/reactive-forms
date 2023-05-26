import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

const routes: Routes = [
  {path : "page-1", component : FirstPageComponent} ,
  {path : "page-2", component : SecondPageComponent},
  {path : "email-confirmation/:courriel", component : ConfirmEmailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
