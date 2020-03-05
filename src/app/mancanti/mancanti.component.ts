import { Component, OnInit } from '@angular/core';
import { SostenutiComponent } from '../sostenuti/sostenuti.component';
import { Router, ActivatedRoute, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-mancanti',
  templateUrl: './mancanti.component.html',
  styleUrls: ['./mancanti.component.css']
})
export class MancantiComponent implements OnInit {

  mancantiSostenuti() {
    this.router.navigate([ '/homepage', { outlets: { 'naviga': ['sostenuti'] } } ], { relativeTo: this.route });
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}