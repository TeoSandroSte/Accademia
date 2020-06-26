import { Component, OnInit } from '@angular/core';
import { MetodoHttpService } from '../metodo-http.service';
import { MatDialog } from '@angular/material';
import { PopuporarioComponent } from '../popuporario/popuporario.component';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-orario',
  templateUrl: './orario.component.html',
  styleUrls: ['./orario.component.css']
})
export class OrarioComponent implements OnInit {
  matricolaInput: string;
  private matricole = [];

  constructor(private http: MetodoHttpService, public dialog: MatDialog) { }

  ngOnInit() {
    this.http.getDb().subscribe(data => this.matricole = data);
    this.matricolaInput = this.leggiLocale('MatricolaInput');
  }

  leggiLocale(variabileHtml: string): string {
    return localStorage.getItem(variabileHtml);
  }

  popup(piano: string) {
    console.log("appena entrato " + piano);
    localStorage.setItem('piano', piano); 
    this.dialog.open(PopuporarioComponent);
  }

}
