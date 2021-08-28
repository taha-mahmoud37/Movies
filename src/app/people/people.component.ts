import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  trendingPeople=[];

  constructor(_MovieService:MovieService) { 

    _MovieService.getTrendingPerson().subscribe((data) =>{

     console.log(this.trendingPeople = data.results) 


    })
  }

  ngOnInit(): void {
  }

}
