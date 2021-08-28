import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  trendingTv=[];

  constructor(_MovieService:MovieService) { 

    _MovieService.getTrendingTv().subscribe((data) => {

      this.trendingTv = data.results;
    })

  }

  ngOnInit(): void {
  }

}
