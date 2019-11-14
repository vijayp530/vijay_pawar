import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { RoutingComponent } from './routing/routing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AboutUsComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    RouterModule.forRoot([
      {path:'home',component:MoviesComponent},
      {path:'AboutUs',component:AboutUsComponent}
    ])
  ],
  providers: [HttpClientModule,MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
