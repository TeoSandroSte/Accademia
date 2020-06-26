import { Component, OnInit } from '@angular/core';
import { CercaImmagineService } from '../cerca-immagine.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  indirizzo: string;
  risultato: string;

  constructor() { }

  ngOnInit() {
    this.indirizzo = localStorage.getItem('numero');
    console.log("popup" + this.indirizzo);
  }

  /*
  leggiLocale(variabileNumerica: string): string {
    return localStorage.getItem(variabileNumerica);
  }*/

  searchImage() {
    console.log("appena entrato nel search");
    switch (this.indirizzo) {
      case '1':
        console.log("case 1");
        this.risultato = '/assets/Img/mappa0.jpg';
        break;
      case '2':
        console.log("case 2");
        this.risultato = '../assets/Img/mappa1.jpg';
        break;
      case '3':
        console.log("case 3");
        this.risultato = '../assets/Img/mappa2.jpg';
        break;
      case '4':
        console.log("case 4");
        this.risultato = '../assets/Img/mappa3.jpg';
        break;
      case '5':
        console.log("case 5");
        this.risultato = '../assets/Img/mappa4.jpg';
        break;
    }
    return this.risultato;
  }

}
