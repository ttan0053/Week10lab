import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":"application/json",
  })
}

@Injectable({
  providedIn: 'root'
})

export class DbServiceService {

  constructor(private http:HttpClient) {}

  getActors(){
    return this.http.get('/actors')
  }

  getActor(id: any){
    return this.http.get(`/actors/${id}`);
  }

  createActor(data: any){
    return this.http.post('/actors',data,httpOptions);
  }

  updateActor(id: any,data :any){
    return this.http.put(`/actors/${id}`,data,httpOptions);
  }

  deleteActor(id: any){
    return this.http.delete(`/actors/${id}`,httpOptions);
  }

  getMovies(){
    return this.http.get('/movies')
  }

  getMovie(id: any){
    return this.http.get(`/movies/${id}`)
  }

  addMovie(data: any){
    return this.http.post('/movies',data,httpOptions);
  }

  deleteMovie(id: any){
    return this.http.delete(`/movie/${id}`,httpOptions);
  }

  associateActorAndMovie(a_id: any,m_id: any){
    return this.http.post(`/movies/${m_id}/actors/${a_id}`,httpOptions)
  }
}
