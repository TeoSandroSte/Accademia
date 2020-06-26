import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrarioComponent } from './orario/orario.component';
import { PianoComponent } from './piano/piano.component';
import { SostenutiComponent } from './sostenuti/sostenuti.component';
import { MancantiComponent } from './mancanti/mancanti.component';
import { AvvisiComponent } from './avvisi/avvisi.component';
import { ContattiComponent } from './contatti/contatti.component';
import { AuleComponent } from './aule/aule.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule }  from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { DatiService } from './dati.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { PopuporarioComponent } from './popuporario/popuporario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomepageComponent,
    OrarioComponent,
    PianoComponent,
    SostenutiComponent,
    MancantiComponent,
    AvvisiComponent,
    ContattiComponent,
    AuleComponent,
    LogoutComponent,
    PopupComponent,
    PopuporarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
  ],
  entryComponents: [
    PopupComponent,
    PopuporarioComponent,
  ],
  providers: [ DatiService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
