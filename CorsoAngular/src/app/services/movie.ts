import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiscoverResponse } from '../types/types';

const REST_ENDPOINT: string = "https://api.themoviedb.org/3"
const API_KEY: string = "?api_key=ac33b3271c2b40beab187c3a15681d30&language=it&append_to_response=images&include_image_language=it,en,null"

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient){}

  discoverMovies(){
    return this.http.get<DiscoverResponse>(REST_ENDPOINT+"/discover/movie"+API_KEY+"&sort_by=popularity.desc&include_adult=false")
  }
}
