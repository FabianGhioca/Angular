import { Movie } from './../types/types';
import { Component, inject } from '@angular/core';
import {MovieService } from '../services/movie';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  movieService = inject(MovieService);
  movieList: Movie[] = [];

  constructor(){
    // mi metto in ascolto della chiamata discoverMovies
    this.movieService.discoverMovies().subscribe({
      // quando arriva un risultato devo fare questo
      next: (movies) => {
        this.movieList = movies.results;
      }
    })
  }

}
