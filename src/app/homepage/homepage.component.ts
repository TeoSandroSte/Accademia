import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @ViewChild("userName", {static: false} ) username: ElementRef;
  nomeCognome: string;

  constructor(private router: Router) { }

  cambio() {
    this.router.navigate(['/form']);
  }

  ngOnInit() {
    this.nomeCognome="dalia blanco";
  }

}
