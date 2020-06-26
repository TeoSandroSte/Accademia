import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popuporario',
  templateUrl: './popuporario.component.html',
  styleUrls: ['./popuporario.component.css']
})
export class PopuporarioComponent implements OnInit {
  indirizzo: string;
  risultato: string;

  constructor() { }

  ngOnInit() {
    this.indirizzo = localStorage.getItem('piano');
    console.log("popup" + this.indirizzo);
  }

  searchImage() {
    console.log("appena entrato nel search "+this.indirizzo);
    switch (this.indirizzo) {
      case 'terra':
        console.log("terra");
        this.risultato = '/assets/Img/mappa0.jpg';
        break;
      case 'primo':
        console.log("primo");
        this.risultato = '../assets/Img/mappa1.jpg';
        break;
      case 'secondo':
        console.log("secondo");
        this.risultato = '../assets/Img/mappa2.jpg';
        break;
      case 'terzo':
        console.log("terzo");
        this.risultato = '../assets/Img/mappa3.jpg';
        break;
      case 'quarto':
        console.log("quarto");
        this.risultato = '../assets/Img/mappa4.jpg';
        break;
    }
    return this.risultato;
  }

}
