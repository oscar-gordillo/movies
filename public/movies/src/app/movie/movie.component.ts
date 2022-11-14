import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesDataService } from '../movies-data.service';
import { Movie } from '../movies/movies.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie!:Movie;

  constructor(private _moviesService:MoviesDataService, private _router:ActivatedRoute, private _routerNav:Router) { }

  ngOnInit(): void {
    const movieId:string=this._router.snapshot.params["movieId"];
    
    this._moviesService.getMovie(movieId).subscribe(value=>{
      this.movie=value;
    });
  }

  deleteMovie(movieId:string){
    this._moviesService.deleteMovie(movieId).subscribe(value=>{
      console.log(value);
      this._routerNav.navigate(['movies']);
    });
  }

}
