import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  salvaLocal(matricolaInput: string) {
    localStorage.setItem('MatricolaInput', matricolaInput)
  }

}
