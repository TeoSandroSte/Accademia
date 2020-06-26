import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CercaImmagineService {

  numeroSalvato: number;

  constructor() { }

  numero(numero: number) {
    this.numeroSalvato = numero
    console.log("servizio" + this.numeroSalvato);
  }

}
