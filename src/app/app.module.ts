import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrarioComponent } from './orario/orario.component';
import { MainComponent } from './main/main.component';
import { PianoComponent } from './piano/piano.component';
import { SostenutiComponent } from './sostenuti/sostenuti.component';
import { MancantiComponent } from './mancanti/mancanti.component';
import { AvvisiComponent } from './avvisi/avvisi.component';
import { ContattiComponent } from './contatti/contatti.component';
import { AuleComponent } from './aule/aule.component';
import { ImpostazioniComponent } from './impostazioni/impostazioni.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomepageComponent,
    OrarioComponent,
    MainComponent,
    PianoComponent,
    SostenutiComponent,
    MancantiComponent,
    AvvisiComponent,
    ContattiComponent,
    AuleComponent,
    ImpostazioniComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
