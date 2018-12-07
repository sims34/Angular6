import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movieService/movie.service';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  original_title: string;
  popularity: number;
  adult: boolean;
  overview: string;
  release_date:Date;
  vote_average:number;
}

const ELEMENT_DATA: any[] = [
  { name: 'Hydrogen'},
  { name: 'Helium'},
  { name: 'Lithium'},
];
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  displayedColumns: string[] = ['original_title', 'popularity', 'adult','overview','release_date','vote_average','action'];
  dataSource;
  constructor( private movieService: MovieService) { 
    this.movieService.getAll().subscribe( data =>{
      console.log(data);
      this.dataSource = data;
    });
  }

  ngOnInit() {

  }
 

}

