import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movieService/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  dataSource;
  addComment;
  constructor(private movieService: MovieService,private route: ActivatedRoute) { 
   
      this.route.params.subscribe(param =>{
        this.movieService.getMovieById(param.id).subscribe(data =>{
          this.dataSource = data;
          console.log(data);
        })
      });
      
  }
  sendForm(comment){
    this.route.params.subscribe(param =>{
      this.movieService.addCommentMovie(comment,param.id).subscribe(data =>{
        this.addComment = data;
        console.log(data);
      })

    })
  }
  deleteComment(idComment){
    this.route.params.subscribe(param => {
      this.movieService.deleteCommentMovie(idComment,param.id).subscribe(data =>{
        this.dataSource = data;
      })
    })
  }
  ngOnInit() {
  }

}
