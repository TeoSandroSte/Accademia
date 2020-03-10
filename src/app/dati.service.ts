import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  constructor() { }

  getDati() {
    return [
      {
        "matricola": "11111q",
        "password": "qwerty",
        "corsiSeguiti": [
          {
            "nome": 1,
            "crediti": "",
            "voto": "10",
            "aula": "gialla",
            "lezione": "lunedi",
            "data": "",
          },
          {
            "nome": 2,
            "crediti": "",
            "voto": "9",
            "aula": "rossa",
            "lezione": "martedi",
            "data": "",
          },{
            "nome": 3,
            "crediti": "",
            "voto": "8",
            "aula": "blu",
            "lezione": "mercoledi",
            "data": "",
          },
        ]
      },
      {
        "matricola": "22222q",
        "password": "asdfg",
        "corsiSeguiti": [
          {
            "nome": 4,
            "crediti": "",
            "voto": "5",
            "aula": "",
            "lezione": "giovedi",
            "data": "",
          },
          {
            "nome": 5,
            "crediti": "",
            "voto": "6",
            "aula": "",
            "lezione": "venerdi",
            "data": "",
          },{
            "nome": 6,
            "crediti": "",
            "voto": "7",
            "aula": "",
            "lezione": "sabato",
            "data": "",
          },
        ]
      },
      {
        "matricola": "33333q",
        "password": "asdfg",
        "corsiSeguiti": [
          {
            "nome": 4,
            "crediti": "",
            "voto": "5",
            "aula": "",
            "lezione": "giovedi",
            "data": "",
          },
          {
            "nome": 5,
            "crediti": "",
            "voto": "6",
            "aula": "",
            "lezione": "venerdi",
            "data": "",
          },{
            "nome": 6,
            "crediti": "",
            "voto": "7",
            "aula": "",
            "lezione": "sabato",
            "data": "",
          },
        ]
      },
    ];
  }

}
