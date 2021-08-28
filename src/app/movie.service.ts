import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MovieService {
  [x: string]: any;

  constructor(private _HttpClient:HttpClient) {




    

   }
   getTrendingAll(pageNumber):Observable<any>
   {
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=4f93229ebc54553fef9294d4b0889b16&page="+pageNumber)
   }

   getTrendingMovie():Observable<any>
   {
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=4f93229ebc54553fef9294d4b0889b16")
   }

   getTrendingTv():Observable<any>
   {
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=4f93229ebc54553fef9294d4b0889b16")
   }

   getTrendingPerson():Observable<any>
   {
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/week?api_key=4f93229ebc54553fef9294d4b0889b16")
   }
}
