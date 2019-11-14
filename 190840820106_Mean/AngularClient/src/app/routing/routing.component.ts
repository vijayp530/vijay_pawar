import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
 @Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }

  ngOnInit() {
  }

}
