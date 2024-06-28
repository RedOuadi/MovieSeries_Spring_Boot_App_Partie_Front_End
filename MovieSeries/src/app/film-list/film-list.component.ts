// src/app/movie-list/movie-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [CommonModule],
  providers: [MovieService],
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
}

