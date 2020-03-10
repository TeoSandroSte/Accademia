/** importo cio che inietto nel costruttore */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatiService } from '../dati.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private utenti = [];

  /** inietto nel costruttore tutte le variabili dichiarandone il tipo */
  constructor(private formBuilder: FormBuilder, private router: Router, private _datiService: DatiService,) { }

  /** costruisco il form(builder) inserendo i campi del form e i vari validatori */
  form = this.formBuilder.group({
    matricola: ['', [Validators.required, Validators.pattern('^[0-9]{5}[a-zA-Z]{1}$')]],
    password: ['', [Validators.required]],
  })

  /** creo la funzione che al click del bottone mi fa cambiare component */
  entra() {
    for (let i=0; i < this.utenti.length; i++) {
      console.log(this.utenti[i].matricola)
    }
    console.log(this.form.get("matricola").value);
    for (let i=0; i < this.utenti.length; i++) {
      if (this.utenti[i].matricola == this.form.get("matricola").value) {
        this.router.navigate(['/homepage']);
      }
    }
  }

  ngOnInit() {
    this.utenti = this._datiService.getDati();
  }

}
