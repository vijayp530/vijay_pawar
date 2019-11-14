import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http : HttpClient) { }

  Get()
  {
    return this.http.get("http://localhost:3538/movies")
  }
}
