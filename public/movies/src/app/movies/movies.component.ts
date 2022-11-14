import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

export class Movie {
  #_id: string;
  private _title: string;
  private _year: number;
  private _type: string;
  private _released: Date;
  private _genres: string[];
  private _directors: string[];
  private _tomatoes: any;
  private _poster: string;

  public get _id(): string {
    return this.#_id;
  }

  public set _id(id: string) {
    this.#_id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get year(): number {
    return this._year;
  }

  public set year(year: number) {
    this._year = year;
  }

  public get type(): string {
    return this._type;
  }

  public set type(type: string) {
    this._type = type;
  }

  public get released(): Date {
    return this._released;
  }

  public set released(release: Date) {
    this._released = release;
  }

  public get genres(): string[] {
    return this._genres;
  }

  public set genres(genres: string[]) {
    this._genres = genres;
  }

  public get directors(): string[] {
    return this._directors;
  }

  public set directors(directors: string[]) {
    this._directors = directors;
  }

  public get tomatoes(): any {
    return this._tomatoes;
  }

  public set tomatoes(tomatoes: any) {
    this._tomatoes = tomatoes;
  }

  public get poster(): string {
    return this._poster;
  }

  public set poster(poster: string) {
    this._poster = poster;
  }

  constructor(
    id: string,
    title: string,
    year: number,
    type: string,
    released: Date,
    genres: string[],
    directors: string[],
    tomatoes: any,
    poster: string
  ) {
    this.#_id = id
    this._title = title
    this._year = year
    this._type = type
    this._released = released
    this._genres = genres
    this._directors = directors
    this._tomatoes = tomatoes
    this._poster = poster
  }





}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _moviesService: MoviesDataService) { }

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe(value => {
      this.movies = value;
    });
  }
  movies: Movie[] = [];

}
