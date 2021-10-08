import { Component, OnInit } from '@angular/core';
import {DbServiceService} from '../db-service.service'
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  movieName:string = "";
  movieYear:number = 0;
  constructor(private bdService:DbServiceService) { }

  ngOnInit(): void {
  }

  clearTft(){
    this.movieName = "";
    this.movieYear = 0;
  }

  onAddMovie(){
    let newMovie = {title: this.movieName, year:this.movieYear};
    this.bdService.addMovie(newMovie).subscribe((data:any)=>{
      alert(`${data.title} is added to movie list.`);
      this.clearTft();
    });
  }

}
