import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';
import { MetodoHttpService } from '../metodo-http.service';

@Component({
  selector: 'app-orario',
  templateUrl: './orario.component.html',
  styleUrls: ['./orario.component.css']
})
export class OrarioComponent implements OnInit {
  matricolaInput: string;
  private matricole = [];

  constructor(private _datiService: DatiService, private http: MetodoHttpService) { }

  ngOnInit() {
    this.http.getDb().subscribe(data => this.matricole = data);
    this.matricolaInput = this.leggiLocale('MatricolaInput');
  }

  leggiLocale(variabileHtml: string): string {
    return localStorage.getItem(variabileHtml);
  }

}
