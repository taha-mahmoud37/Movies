import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'
import { $ } from 'protractor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
   term:string;
   trendingAll=[];
   pageNumbers:number[]=[];

   currentPage = 1;
  
   
    

  constructor(private _MovieService:MovieService ) {

    for(let i=1 ; i<11 ; i++)
    {
      this.pageNumbers.push(i);
    }
    
    

    _MovieService.getTrendingAll(this.currentPage).subscribe((data) =>{


      this.trendingAll = data.results;
    })

   }

   changeNumber(index)
   {

    this.currentPage = index;
     
    this._MovieService.getTrendingAll(this.currentPage).subscribe((data) =>{
      document.getElementById("callBack").style.display= 'block';

      this.trendingAll = data.results;
    })


   }

   prv()
   {
     if(this.currentPage <1)
     {
      console.log( this.currentPage =1000);
     }

      this.changeNumber(this.currentPage - 1) 
     

      
   }
   next()
   {

     document.getElementById("callBack").style.display= 'block';

      this.changeNumber(this.currentPage + 1)
   }


    

  ngOnInit(): void {
  }

}
