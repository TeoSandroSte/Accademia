import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { MetodoHttpService } from '../metodo-http.service';
import { supportsPassiveEventListeners } from '@angular/cdk/platform';
import { SostenutiComponent } from '../sostenuti/sostenuti.component';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {

  matricolaInput: string;
  private matricole = [];
  sopra: number = 0;
  sotto: number = 0;
  media: number;
  risultato: string;
  indirizzo: string;

  @ViewChild("matricola", { static: false }) username: ElementRef;
  nomeCognome: string;
  mobileQuery: MediaQueryList;

  constructor(private http: MetodoHttpService, private router: Router, private route: ActivatedRoute) {
  }

  /*lezioni() {
    this.router.navigate([ '/homepage', { outlets: { 'naviga': ['sostenuti'] } } ], { relativeTo: this.route });
  }*/

  logout() {
    this.router.navigate(['logout'])
  }

  ngOnInit() {
    this.http.getDb().subscribe(data => this.matricole = data);
    this.matricolaInput = this.leggiLocale('MatricolaInput');
    console.log("appena entrato nel search");
  }

  test() {
    console.log(this.matricolaInput);
      switch (this.matricolaInput) {
        case '12807T':
          console.log("case 1");
          this.risultato = '/assets/Img/profilo.jpeg';
          break;
        case '11297T':
          console.log("case 2");
          this.risultato = '../assets/Img/profiloDalia.jpg';
          break;
      }
      return this.risultato;
  }

leggiLocale(variabileHtml: string): string {
  return localStorage.getItem(variabileHtml);
}

f() {
  for (let elemento of this.matricole) {
    if (elemento.matricola == this.matricolaInput) {
      for (let materia of elemento.corsiSeguiti) {
        this.sopra = this.sopra + (materia.voto * materia.crediti);
        this.sotto = this.sotto + materia.crediti;
      }
      console.log(this.sotto);
      console.log(this.sopra);
      this.media = this.sopra / this.sotto;
    }
  }
  return this.media;
}

}
