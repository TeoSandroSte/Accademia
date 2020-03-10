import { Component, OnInit } from '@angular/core';
import { MetodoHttpService } from '../metodo-http.service';

@Component({
  selector: 'app-mancanti',
  templateUrl: './mancanti.component.html',
  styleUrls: ['./mancanti.component.css']
})
export class MancantiComponent implements OnInit {
  public matricole = [];
  matricolaInput: string;

  constructor(private httpService: MetodoHttpService) { }

  ngOnInit() {
    /* prendo i dati dal database fittizio con il metodo usato dal service 'metodo-http' */
    this.httpService.getDb().subscribe(data => this.matricole = data);
    /* do alla variabile matricolaInput, che verrà letto dall'html, il valore di cio che è salvato nel local storage */
    this.matricolaInput = this.leggiLocale('MatricolaInput');
  }

  leggiLocale(variabileHtml: string): string {
    return localStorage.getItem(variabileHtml);
  }

}