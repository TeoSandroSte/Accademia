import { Component, OnInit } from '@angular/core';
import { SostenutiComponent } from '../sostenuti/sostenuti.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-mancanti',
  templateUrl: './mancanti.component.html',
  styleUrls: ['./mancanti.component.css']
})
export class MancantiComponent implements OnInit {

  mancantiSostenuti() {
    this.router.navigate([''])
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
