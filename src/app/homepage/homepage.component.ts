import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @ViewChild("matricola", {static: false} ) username: ElementRef;
  nomeCognome: string;
  mobileQuery: MediaQueryList;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  lezioni() {
    this.router.navigate([ '/homepage', { outlets: { 'naviga': ['sostenuti'] } } ], { relativeTo: this.route });
  }

  mancantiSostenuti() {
    this.router.navigate([''])
  }

  ngOnInit() {
    this.nomeCognome="Mario Rossi";
  }

}
