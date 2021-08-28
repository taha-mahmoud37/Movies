import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovie = [];
  

  constructor(private _MovieService:MovieService) {

    
    
    
      
    _MovieService.getTrendingMovie().subscribe((data) => {

      this.trendingMovie = data.results;

    
    })

   }

   

  ngOnInit(): void {
  }

}
