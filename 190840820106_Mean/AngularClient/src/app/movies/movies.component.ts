import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service"
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
mv;
  constructor(public service:MoviesService) { }

  ngOnInit() {
    let resultState= this.service.Get();

    resultState.subscribe((data)=>{
    console.log(data);
      this.mv=data;
    })
  }

}
