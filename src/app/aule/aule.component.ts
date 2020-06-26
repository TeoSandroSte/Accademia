import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';
import { CercaImmagineService } from '../cerca-immagine.service';

@Component({
  selector: 'app-aule',
  templateUrl: './aule.component.html',
  styleUrls: ['./aule.component.css']
})
export class AuleComponent implements OnInit {

  constructor(public dialog: MatDialog, private immagine: CercaImmagineService) { }

  ngOnInit() {
  }

  popup(numero: string) {
    /**
    this.immagine.numero(numero);*/
    console.log("appena entrato" + numero);
    localStorage.setItem('numero', numero); 
    this.dialog.open(PopupComponent);
  }

}
