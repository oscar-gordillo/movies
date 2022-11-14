import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movies/movies.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  private _baseUrl="http://localhost:3000/api";

  constructor(private _http:HttpClient) { }

  public getMovies():Observable<Movie[]>{
    const url=this._baseUrl+"/movies";
    return this._http.get(url) as Observable<Movie[]>
  }
  public getMovie(movieId:string):Observable<Movie>{
    const url=this._baseUrl+"/movies/"+movieId;
    return this._http.get(url) as Observable<Movie>
  }
  public deleteMovie(movieId:string):Observable<Movie>{
    const url=this._baseUrl+"/movies/"+movieId;
    return this._http.delete(url) as Observable<Movie>
  }
}
