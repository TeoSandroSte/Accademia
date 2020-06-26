/** importo cio che inietto nel costruttore */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatiService } from '../dati.service';
import { LocalStorageService } from '../local-storage.service';
import { MetodoHttpService } from '../metodo-http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  /** serve se si usa il metodo dei dati salvati nel service
  private utenti = [];*/
  private matricole = [];

  /** inietto nel costruttore tutte le variabili dichiarandone il tipo */
  constructor(private formBuilder: FormBuilder, private router: Router, private _datiService: DatiService,
    private locale: LocalStorageService, private httpService: MetodoHttpService) { }

  /** costruisco il form(builder) inserendo i campi del form e i vari validatori */
  form = this.formBuilder.group({
    matricola: ['', [Validators.required, Validators.pattern('^[0-9]{5}[a-zA-Z]{1}$')]],
    password: ['', [Validators.required]],
  })

  /** creo la funzione che al click del bottone mi fa cambiare component
   * mi salva anche i dati in local storage per poter visualizzare determinati dati */
  entra() {
    for (let i = 0; i < this.matricole.length; i++) {
      /** metodo se i dati sono salvati nel service
      for (let i=0; i < this.utenti.length; i++) {
      if (this.matricole[i].matricola == this.form.get("matricola").value) { */
      if (this.matricole[i].matricola == this.form.get("matricola").value) {
        if (this.matricole[i].password == this.form.get("password").value) {
          /** si potrebbe salvare sul local storage chiamando un servizio in questo modo:
           * this.locale.salvaLocal(this.form.get('matricola').value); */
          localStorage.setItem('MatricolaInput', this.form.get('matricola').value)
          this.router.navigate([ '/homepage' ]);
        }
      }
    }
  }

  ngOnInit() {
    /** metodo se i dati sono salvati nel service
    this.utenti = this._datiService.getDati();*/
    this.httpService.getDb().subscribe(data => this.matricole = data);
  }

}
