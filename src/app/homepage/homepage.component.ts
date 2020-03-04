import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  mancantiSostenuti() {
    this.router.navigate([''])
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
