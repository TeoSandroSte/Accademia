import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
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


const routes: Routes = [
  { path: 'component', component: AppComponent },
  { path: 'homepage', component: HomepageComponent, children: [
    { path: 'orario', component: OrarioComponent, outlet: 'naviga' },
    { path: 'piano', component: PianoComponent, outlet: 'naviga' },
    { path: 'sostenuti', component: SostenutiComponent, outlet: 'naviga' },
    { path: 'mancanti', component: MancantiComponent, outlet: 'naviga' },
    { path: 'avvisi', component: AvvisiComponent, outlet: 'naviga' },
    { path: 'contatti', component: ContattiComponent, outlet: 'naviga' },
    { path: 'aule', component: AuleComponent, outlet: 'naviga' },
    { path: 'impostazioni', component: ImpostazioniComponent, outlet: 'naviga' }
    ]
  },
  { path: 'logout', component: FormComponent },
  { path: '', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
