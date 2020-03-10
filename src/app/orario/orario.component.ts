import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-orario',
  templateUrl: './orario.component.html',
  styleUrls: ['./orario.component.css']
})
export class OrarioComponent implements OnInit {

  private utenti = [];

  constructor(private _datiService: DatiService) { }

  ngOnInit() {
    this.utenti = this._datiService.getDati();
    console.log(this.utenti[0].matricola)
  }

}
