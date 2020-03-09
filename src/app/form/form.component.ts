/** importo cio che inietto nel costruttore */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  /** inietto nel costruttore tutte le variabili dichiarandone il tipo */
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  /** costruisco il form(builder) inserendo i campi del form e i vari validatori */
  form = this.formBuilder.group({
    matricola: ['', [Validators.required, Validators.pattern('^[0-9]{5}[a-zA-Z]{1}$')]],
    password: ['', [Validators.required]],
  })

  /** creo la funzione che al click del bottone mi fa cambiare component */
  entra() {
    this.router.navigate(['/homepage']);
  }

  ngOnInit() {
  }

}
