import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  @ViewChild("matricola", {static: false} ) username: ElementRef;
  nomeCognome: string;

  constructor(private router: Router) { }

  mancantiSostenuti() {
    this.router.navigate([''])

  }

  ngOnInit() {
    this.nomeCognome="Mario Rossi";
  }

}
