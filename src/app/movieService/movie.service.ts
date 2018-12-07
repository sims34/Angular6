import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = `http://demo.capcod.eu/movies/api`;
  constructor(private http: Http) { }

  public getAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}/movie`).
      pipe(
        map((data) =>{
          return data.json();
        }, (err) =>{
          console.log('error', err)
        })
      );
  }
  public getMovieById(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${id}`).
      pipe(
        map((data)=>{
          return data.json();
        },(err) =>{
          console.log('error',err)
        }

        ));
  }
   addCommentMovie(value:string, id:number) : Observable<any>{
    return this.http.post(`${this.baseUrl}/movie/${id}/comment`,value)
      .pipe(
        map((data)=>{
          return data.json();
        },(err) =>{
          console.log('error',err)
        }
        )
      );
  }
  deleteCommentMovie(idComment:number, id:number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/movie/${id}/comment/${idComment}/delete`)
      .pipe(
        map((data)=>{
          return data.json();
        },(err) =>{
          console.log('error',err)
        }
        )
      );
  }
}
