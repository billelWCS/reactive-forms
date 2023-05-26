import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilInscriptionComponent } from './profil-inscription/profil-inscription.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ChalengeComponent } from './chalenge/chalenge.component';
import { ProfilFormComponent } from './profil-form/profil-form.component';
import { TutoComponent } from './tuto/tuto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilInscriptionComponent,
    FirstPageComponent,
    SecondPageComponent,
    ConfirmEmailComponent,
    ChalengeComponent,
    ProfilFormComponent,
    TutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
